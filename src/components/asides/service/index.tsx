import Spinner from '@/components/spinners';

import useService from './hooks/useService';

import type { Service } from '@/types/service';

interface ServiceAsideProps {
  selectedService: Service | null;
  onShowAside: (state: boolean) => void;
}

const ServiceAside = ({ selectedService, onShowAside }: ServiceAsideProps) => {
  const {
    loadingRequest, service, isValidSubmit,
    handleChangeService, handleSubmitService
  } = useService({ selectedService, onShowAside });

  return (
    <>
      <h3 className='text-2xl font-bold text-purple-900'>
        {!selectedService ? 'Creación de Servicio' : 'Edición de Servicio'}
      </h3>
      <hr className='mt-2 mb-3 border-purple-900' />

      <form onSubmit={handleSubmitService}>
        <fieldset className='my-2'>
          <label className='block text-lg font-semibold text-black/90'>Nombre</label>
          <input
            className='w-full h-10 pl-3 text-lg border rounded-md shadow-md outline-none text-black/70'
            type='text'
            name='name'
            value={service.name}
            disabled={loadingRequest}
            onChange={handleChangeService}
          />
        </fieldset>

        <fieldset className='my-2'>
          <label className='block text-lg font-semibold text-black/90'>Descripción</label>
          <textarea
            name='description'
            value={service.description}
            className='w-full h-32 pl-3 text-lg border rounded-md shadow-md outline-none resize-none text-black/70'
            disabled={loadingRequest}
            onChange={handleChangeService}
          />
        </fieldset>

        <fieldset className='my-2'>
          <label className='block text-lg font-semibold text-black/90'>Cantidad de Citas</label>
          <input
            min={0}
            max={10}
            name='appointments'
            className='w-full h-10 pl-3 text-lg border rounded-md shadow-md outline-none text-black/70'
            value={service.appointments}
            type='number'
            disabled={loadingRequest}
            onChange={handleChangeService}
          />
        </fieldset>

        {isValidSubmit && (
          <section className='flex items-center justify-end w-full mt-6'>
            {loadingRequest
              ? (
                <Spinner />
              )
              
              : (
                <button className='p-2 text-purple-900 bg-purple-100 border border-purple-900 rounded-md hover:bg-purple-200 hover:border-purple-700 hover:text-purple-700'>
                  {!selectedService ? 'Crear Servicio' : 'Editar Servicio'}
                </button>
              )
            }
          </section>
        )}
      </form>
    </>
  );
};

export default ServiceAside;
