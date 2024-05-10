import { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import Pubsub from 'pubsub-js';

import useSidebar from '@/components/sidebar/hooks/useSidebar';
import { useAuthStore } from '@/store/auth';
import { ProductService } from '@/services/services';

import type { Service } from '@/types/service';

import { REFRESH_SERVICES } from '@/utils/pubsub-events';

const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [loadingData, setLoadingData] = useState(true);

  const { show, setShow } = useSidebar();

  const user = useAuthStore(state => state.user);
  
  const isPatient = useMemo(() => {
    const userType = user?.type?.name || '';
    return userType === 'Paciente'
  }, [user]);

  useEffect(() => {
    getServices();
    Pubsub.subscribe(REFRESH_SERVICES, () => getServices());

    return () => {
      Pubsub.unsubscribe(REFRESH_SERVICES);
    };
  }, []);

  /**
   * Function that gets available odonto-app services
   */
  async function getServices() {
    try {
      const services = await ProductService.getServices();
      setServices(services || []);
    } catch (error) {
      setServices([]);
    } finally {
      setLoadingData(false);
    }
  }

  /**
   * Function that selects a specific service item
   * @param service
   */
  function handleSelectService(service: Service) {
    setSelectedService(service);
    setShow(true);
  }

  /**
   * Function that deletes a specific service
   * @param serviceId
   */
  function handleDeleteService(serviceId: string) {
    Swal.fire({
      title: '¿Seguro que deseas eliminar este servicio?',
      text: 'Esta acción no se podrá deshacer',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, deseo eliminarlo',
      allowOutsideClick: !Swal.isLoading(),
      showLoaderOnConfirm: true,
      reverseButtons: true,
      preConfirm: async () => {
        try {
          await ProductService.deleteService(serviceId)
          return { isSuccess: true };
        } catch (error) {
          return { isSuccess: false };
        }
      }
    }).then(result => {
      if (result.value?.isSuccess) {
        Swal.fire({
          icon: 'success',
          title: 'Ok',
          text: 'Servicio eliminado correctamente'
        });
        Pubsub.publish(REFRESH_SERVICES)
      } else if (!result.isDismissed) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error eliminando el servicio, vuelve a intentarlo'
        });
      }
    });
  }

  /**
   * Function that opens/closes current aside element
   * @param state
   */
  function onShowAside(state: boolean) {
    if (selectedService) setSelectedService(null);
    setShow(state);
  }

  return {
    /** States */
    services,
    loadingData,
    show,
    selectedService,
    isPatient,

    /** Functions */
    onShowAside,
    handleSelectService,
    handleDeleteService
  };
};

export default useServices;
