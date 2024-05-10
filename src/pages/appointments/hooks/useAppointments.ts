import { useEffect, useMemo, useState } from 'react';
import Pubsub from 'pubsub-js';

import useSidebar from '@/components/sidebar/hooks/useSidebar';
import { useAuthStore } from '@/store/auth';
import { AppointmentService } from '@/services/appointments';

import type { Appointment } from '@/types/appointment';

import { REFRESH_APPOINTMENTS } from '@/utils/pubsub-events';

const useAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const { show: showAside, setShow: setShowAside } = useSidebar();

  const user = useAuthStore((state) => state.user);

  const isPatient = useMemo(() => {
    const userType = user?.type?.name || '';
    return userType === 'Paciente';
  }, [user]);

  useEffect(() => {
    getAppointments();
    Pubsub.subscribe(REFRESH_APPOINTMENTS, () => getAppointments());

    return () => {
      Pubsub.unsubscribe(REFRESH_APPOINTMENTS);
    };
  }, []); // eslint-disable-line

  /**
   * Function that gets available appointments according to user type
   */
  async function getAppointments() {
    try {
      const appointments = isPatient
        ? await AppointmentService.getAppointmentsByUserId(user?._id || '')
        : await AppointmentService.getAppointments();

      setAppointments(appointments || []);
    } catch (error) {
      setAppointments([]);
    } finally {
      setLoadingData(false);
    }
  }

  /**
   * Function that opens/closes treatments aside
   * @param state
   */
  function onShowAside(state: boolean) {
    if (selectedAppointment && !state) setSelectedAppointment(null);
    setShowAside(state);
  }

  /**
   * Function that opens treatment aside for treatment edition
   * @param appointment
   */
  function handleClickEditAppointment(appointment: Appointment) {
    setSelectedAppointment(appointment);
    onShowAside(true);
  }

  return {
    /** States */
    appointments,
    loadingData,
    selectedAppointment,
    showAside,

    /** Functions */
    onShowAside,
    handleClickEditAppointment
  };
};

export default useAppointments;
