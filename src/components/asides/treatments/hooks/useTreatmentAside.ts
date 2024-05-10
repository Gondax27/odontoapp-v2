import { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import Pubsub from 'pubsub-js';

import { UserService } from '@/services/user';
import { ProductService } from '@/services/services';
import { TreatmentService } from '@/services/treatment';

import type { Service } from '@/types/service';
import type { UserRequest } from '@/types/user';
import type{ Treatment } from '@/types/treatment';

import { REFRESH_TREATMENTS } from '@/utils/pubsub-events';

interface UseTreatmentAsideProps {
  selectedTreatment: Treatment | null;
  onShowAside: (state: boolean) => void;
}

const useTreatmentAside = ({ selectedTreatment, onShowAside }: UseTreatmentAsideProps) => {
  const [treatment, setTreatment] = useState({
    patient: selectedTreatment?.patient._id || '',
    service: selectedTreatment?.service._id || '',
    status: selectedTreatment?.status || 'In Progress'
  });

  const [patients, setPatients] = useState<UserRequest[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingRequest, setLoadingRequest] = useState(false);

  const isValidSubmit = useMemo(() => (
    Object.values(treatment).every(value => value.trim().length > 0)
  ), [treatment]);

  useEffect(() => {
    initializeTreatmentData();
  }, []);

  /**
   * Function that initialize necesary data for management treatments
   */
  async function initializeTreatmentData() {
    try {
      const patients = await UserService.getPatients();
      const services = await ProductService.getServices();
      setPatients(patients || []);
      setServices(services || []);
    } catch (error) {
      setPatients([]);
      setServices([]);
    } finally {
      setLoadingData(false);
    }
  }

  /**
   * Function that changes treatment state
   * @param ev
   */
  const handleChangeTreatment = (
    ev: React.ChangeEvent<HTMLSelectElement>
  ) => (
    setTreatment(prevTreatment => ({
      ...prevTreatment,
      [ev.target.name]: ev.target.value
    }))
  );

  /**
   * Function that submits treatment form data
   * @param ev
   */
  async function handleSubmitTreatment(ev: React.FormEvent<HTMLFormElement>) {
    try {
      ev.preventDefault();
      setLoadingRequest(true);

      if (!selectedTreatment) {
        await TreatmentService.createTreatment(treatment);
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: 'El tratamiento ha sido creado correctamente'
        });
      } else {
        await TreatmentService.updateTreatment(selectedTreatment?._id, treatment);
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: 'El tratamiento ha sido editado correctamente'
        });
      }

      Pubsub.publish(REFRESH_TREATMENTS);
      onShowAside(false);
    } catch (error) {
      if (!selectedTreatment) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al crear el tratamiento, intentalo de nuevo'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al editar el tratamiento, intentalo de nuevo'
        });
      }
    } finally {
      setLoadingRequest(false);
    }
  }

  return {
    /** States */
    patients,
    services,
    treatment,
    loadingData,
    isValidSubmit,
    loadingRequest,

    /** Functions */
    handleChangeTreatment,
    handleSubmitTreatment
  };
};

export default useTreatmentAside;
