import { useEffect, useMemo, useState } from 'react';
import Pubsub from 'pubsub-js';
import Swal from 'sweetalert2';

import { useAuthStore } from '@/store/auth';
import { UserService } from '@/services/user';
import { TreatmentService } from '@/services/treatment';
import { AppointmentService } from '@/services/appointments';

import type { Appointment } from '@/types/appointment';
import type{ UserRequest } from '@/types/user';
import type { Treatment } from '@/types/treatment';

import { REFRESH_APPOINTMENTS } from '@/utils/pubsub-events';

interface UseAppointmentsAsideProps {
  selectedAppointment: Appointment | null;
  onShowAside: (state: boolean) => void;
}

const useAppointmentsAside = ({ selectedAppointment, onShowAside }: UseAppointmentsAsideProps) => {
  const [appointment, setAppointment] = useState({
    status: selectedAppointment?.status || '',
    patient: selectedAppointment?.patient?._id || '',
    doctor: selectedAppointment?.doctor?._id || '',
    treatment_id: selectedAppointment?.treatment_id || '',
    date: selectedAppointment?.date
      ? `${selectedAppointment?.date}T${selectedAppointment?.time}`
      : ''
  });

  const [patients, setPatients] = useState<UserRequest[]>([]);
  const [doctors, setDoctors] = useState<UserRequest[]>([]);
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingRequest, setLoadingRequest] = useState(false);

  const user = useAuthStore((state) => state.user);

  const isPatient = useMemo(() => {
    const userType = user?.type?.name || '';
    return userType === 'Paciente';
  }, [user]);

  const isValidSubmit = useMemo(() => (
    Object.values(appointment).every(value => value.trim().length > 0)
  ), [appointment]);

  useEffect(() => {
    initializeAppointmentAside();
  }, []); // eslint-disable-line

  /**
   * Function that gets patients and doctors data
   */
  async function initializeAppointmentAside() {
    try {
      const doctors = await UserService.getDoctors();
      const patients = await UserService.getPatients();

      const treatments = isPatient
        ? await TreatmentService.getTreatmentsByUserId(user?._id || '')
        : await TreatmentService.getAllTreatments();

      if (isPatient) {
        setAppointment((prevAppointment) => ({
          ...prevAppointment,
          patient: user?._id || ''
        }));
      }

      setPatients(patients || []);
      setDoctors(doctors || []);
      setTreatments(treatments || []);
    } catch (error) {
      setPatients([]);
      setDoctors([]);
    } finally {
      setLoadingData(false);
    }
  }

  /**
   * Function that changes the appointment state data
   * @param ev
   */
  function handleChangeAppointment(ev: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) {
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      [ev.target.name]: ev.target.value
    }));
  }

  /**
   * Function that submits appointment form data
   * @param ev
   */
  async function handleSubmitAppointment(ev: React.FormEvent) {
    try {
      ev.preventDefault();
      setLoadingRequest(true);

      const [date, time] = appointment.date.split('T') || '';

      const newAppointment = {
        ...appointment,
        date,
        time,
        treatment_id: appointment.treatment_id || null
      };

      if (!selectedAppointment) {
        await AppointmentService.createAppointment(newAppointment);
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: 'La cita ha sido creado correctamente'
        });
      } else {
        await AppointmentService.updateAppointment(selectedAppointment?._id, newAppointment);
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: 'La cita ha sido editado correctamente'
        });
      }

      Pubsub.publish(REFRESH_APPOINTMENTS);
      onShowAside(false);
    } catch (error) {
      if (!selectedAppointment) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al crear la cita, intentalo de nuevo'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al editar la cita, intentalo de nuevo'
        });
      }
    } finally {
      setLoadingRequest(false)
    }
  }

  return {
    /** States */
    appointment,
    patients,
    doctors,
    treatments,
    loadingData,
    loadingRequest,
    isValidSubmit,

    /** Functions */
    handleChangeAppointment,
    handleSubmitAppointment
  };
};

export default useAppointmentsAside;
