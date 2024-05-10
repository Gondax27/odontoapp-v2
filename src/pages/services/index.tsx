import ServiceAside from '@/components/asides/service';
import Sidebar from '@/components/sidebar';
import SingleCard from '@/components/cards/SingleCard';
import Spinner from '@/components/spinners';
import TitleSection from '@/components/title-section';

import useServices from './hooks/useServices';

import DeleteIcon from '@/assets/svg/DeleteIcon';
import EditIcon from '@/assets/svg/EditIcon';
import PlusIcon from '@/assets/svg/PlusIcon';

const ServicesPage = () => {
  const {
    loadingData, services, selectedService,
    show, isPatient,
    onShowAside, handleSelectService, handleDeleteService
  } = useServices();

  return (
    <>
      <TitleSection title='Services' />

      {loadingData ? (
        <div className='flex justify-center w-full my-4'>
          <Spinner />
        </div>
      ) : (
        <>
          {!isPatient && (
            <section className='flex items-center justify-end w-full gap-4 my-4'>
              <button
                onClick={() => onShowAside(true)}
                className='flex items-center p-2 border rounded-md hover:bg-purple-100 hover:border-purple-900 hover:text-purple-900 transition-[background,color,border]'
              >
                <PlusIcon className='mr-1 size-5' />
                Crear
              </button>
            </section>
          )}

          <section className='grid grid-cols-1 md:grid-cols-2 gap-y-4'>
            {services.map((service, idx) => (
              <SingleCard key={idx}>
                <header className='flex flex-wrap items-center justify-between'>
                  <h3 className='text-2xl font-semibold text-purple-900'>{service.name}</h3>

                  {!isPatient && (
                    <div className='flex items-center gap-x-4'>
                      <button
                        onClick={() => handleSelectService(service)}
                        className='flex items-center p-2 text-purple-900 border border-purple-900 rounded-md hover:bg-purple-100 hover:border-purple-700 hover:text-purple-700 transition-[border-color,background,color]'
                      >
                        <EditIcon className='stroke-2 size-5' />
                      </button>

                      <button
                        onClick={() => handleDeleteService(service._id)}
                        className='flex items-center p-2 text-purple-900 border border-purple-900 rounded-md hover:bg-purple-100 hover:border-purple-700 hover:text-purple-700 transition-[border-color,background,color]'
                      >
                        <DeleteIcon className='stroke-2 size-5' />
                      </button>
                    </div>
                  )}
                </header>

                <p className='mb-2 text-lg'>{service.description}</p>

                <span className='font-semibold text-purple-900 text-md'>
                  Cantidad Citas:
                  <span className='ml-2 text-black'>{service.appointments}</span>
                </span>
              </SingleCard>
            ))}
          </section>
        </>
      )}

      <Sidebar
        allowOutsideClick
        show={show}
        element={<ServiceAside selectedService={selectedService} onShowAside={onShowAside} />}
        setShow={onShowAside}
      />
    </>
  );
};

export default ServicesPage;
