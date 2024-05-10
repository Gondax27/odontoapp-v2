import { useEffect, useMemo, useState } from 'react';
import Pubsub from 'pubsub-js';

import useSidebar from '@/components/sidebar/hooks/useSidebar';
import { useAuthStore } from '@/store/auth';
import { TreatmentService } from '@/services/treatment';

import type { Treatment } from '@/types/treatment';
import { REFRESH_TREATMENTS } from '@/utils/pubsub-events';

const useTreatment = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const { show: showAside, setShow: setShowAside } = useSidebar();

  const user = useAuthStore(state => state.user);

  const isPatient = useMemo(() => {
    const userType = user?.type?.name || '';
    return userType === 'Paciente'
  }, [user]);

  useEffect(() => {
    if (user) getTreatments();

    Pubsub.subscribe(REFRESH_TREATMENTS, () => {
      if (user) getTreatments();
    });

    return () => {
      Pubsub.unsubscribe(REFRESH_TREATMENTS);
    }
  }, [user]); // eslint-disable-line

  /**
   * Function that gets all treatments
   */
  async function getTreatments() {
    try {
      const userId = user?._id || '';

      const treatments = isPatient
        ? await TreatmentService.getTreatmentsByUserId(userId)
        : await TreatmentService.getAllTreatments();

      setTreatments(treatments || []);
    } catch (error) {
      setTreatments([]);
    } finally {
      setLoadingData(false);
    }
  }

  /**
   * Function that opens/closes treatments aside
   * @param state
   */
  function onShowAside(state: boolean) {
    if (selectedTreatment && !state) setSelectedTreatment(null);
    setShowAside(state);
  }

  /**
   * Function that opens treatment aside for treatment edition
   * @param treatment
   */
  function handleClickEditTreatment(treatment: Treatment) {
    setSelectedTreatment(treatment);
    onShowAside(true);
  }

  return {
    /** States */
    treatments,
    loadingData,
    showAside,
    selectedTreatment,
    isPatient,

    /** Functions */
    onShowAside,
    handleClickEditTreatment
  };
};

export default useTreatment;
