import Sidebar from '@/components/sidebar';
import Spinner from '@/components/spinners';
import TitleSection from '@/components/title-section';
import TreatmentAside from '@/components/asides/treatments';

import useTreatment from './hooks/useTreatment';

import PlusIcon from '@/assets/svg/PlusIcon';
import EditIcon from '@/assets/svg/EditIcon';

const TreatmentsPage = () => {
  const {
    loadingData, treatments, showAside, selectedTreatment, isPatient,
    onShowAside, handleClickEditTreatment
  } = useTreatment();

  return (
    <>
      <TitleSection title='Tratamientos' />

      {loadingData ? (
        <section className='flex justify-center w-full'>
          <Spinner />
        </section>
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

          <section className='max-w-full overflow-auto'>
            <table className='table w-full border border-black table-auto'>
              <thead className='p-2 text-white bg-purple-900'>
                <tr>
                  <th className='px-2 py-1 border border-black'>ID</th>
                  <th className='px-2 py-1 border border-black'>Paciente</th>
                  <th className='px-2 py-1 border border-black'>Servicio</th>
                  <th className='px-2 py-1 border border-black'>Estado</th>
                  {!isPatient && <th className='px-2 py-1 border border-black'>Acciones</th>}
                </tr>
              </thead>

              <tbody>
                {treatments.map((treatment, idx) => (
                  <tr key={idx}>
                    <td className='px-2 py-1 text-center border border-black'>{treatment._id}</td>

                    <td className='px-2 py-1 text-center border border-black'>
                      {treatment.patient.name || '-'} {treatment.patient.last_name || '-'}
                    </td>

                    <td className='px-2 py-1 text-center border border-black'>{treatment.service.name || '-'}</td>

                    <td className='px-2 py-1 text-center border border-black'>{treatment.status}</td>

                    {!isPatient && (
                      <td className='px-2 py-1 border border-black'>
                        <div className='flex items-center justify-center gap-x-4'>
                          <button
                            onClick={() => handleClickEditTreatment(treatment)}
                            className='flex items-center p-1 text-purple-900 transition-colors border border-purple-900 rounded-md hover:bg-purple-100 hover:border-purple-700 hover:text-purple-700'
                          >
                            <EditIcon className='stroke-2 size-5' />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      )}

      <Sidebar
        allowOutsideClick
        element={<TreatmentAside selectedTreatment={selectedTreatment} onShowAside={onShowAside} />}
        show={showAside}
        setShow={onShowAside}
      />
    </>
  );
};

export default TreatmentsPage;
