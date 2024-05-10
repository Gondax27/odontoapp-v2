import { useMemo, useState } from 'react';
import Pubsub from 'pubsub-js';
import Swal from 'sweetalert2';

import { ProductService } from '@/services/services';

import { REFRESH_SERVICES } from '@/utils/pubsub-events';
import type { Service } from '@/types/service';

interface UseServiceProps {
  selectedService: Service | null;
  onShowAside: (state: boolean) => void;
}

const useService = ({ selectedService, onShowAside }: UseServiceProps) => {
  const [service, setService] = useState({
    name: selectedService?.name || '',
    description: selectedService?.description || '',
    appointments: selectedService?.appointments || 0
  });

  const [loadingRequest, setLoadingRequest] = useState(false);

  const isValidSubmit = useMemo(() => (
    service.name.trim().length > 0 &&
    service.description.trim().length > 0 &&
    Number(service.appointments) > 0
  ), [service]);

  /**
   * Function that changes current state for service creation
   * @param ev
   * @returns
   */
  const handleChangeService = (
    ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => (
    setService((prevService) => ({
      ...prevService,
      [ev.target.name]: ev.target.value
    }))
  );

  /**
   * Function that creates/edit a service data
   * @param ev
   */
  const handleSubmitService = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault();
      setLoadingRequest(true);

      if (selectedService) {
        await ProductService.updateService(selectedService._id, service);
        Swal.fire({ icon: 'success', title: 'El servicio se ha editado correctamente' });
      } else {
        await ProductService.createService(service);
        Swal.fire({ icon: 'success', title: 'El servicio se ha creado correctamente' });
      }

      Pubsub.publish(REFRESH_SERVICES);
      onShowAside(false);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error a la hora de crear el nuevo servicio, intentalo de nuevo'
      });
    } finally {
      setLoadingRequest(false);
    }
  };

  return {
    /* States */
    service,
    loadingRequest,
    isValidSubmit,

    /* Functions */
    handleChangeService,
    handleSubmitService
  };
};

export default useService;
