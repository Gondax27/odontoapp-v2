import Spinner from '@/components/spinners';

import useTreatmentAside from './hooks/useTreatmentAside';

import type { Treatment } from '@/types/treatment';
import { TREATMENT_STATUS } from './utils/constants';

interface TreatmentAsideProps {
  selectedTreatment: Treatment | null;
  onShowAside: (state: boolean) => void;
}

const TreatmentAside = ({ selectedTreatment, onShowAside }: TreatmentAsideProps) => {
  const {
    loadingData,
    loadingRequest,
    patients,
    services,
    isValidSubmit,
    treatment,
    handleChangeTreatment,
    handleSubmitTreatment
  } = useTreatmentAside({ selectedTreatment, onShowAside });

  return (
    <>
      <h3 className='text-2xl font-bold text-purple-900'>
        {!selectedTreatment ? 'Creación de Tratamiento' : 'Edición de Tratamiento'}
      </h3>
      <hr className='mt-2 mb-3 border-purple-900' />

      {loadingData ? (
        <section className='flex justify-center w-full'>
          <Spinner />
        </section>
      ) : (
        <form onSubmit={handleSubmitTreatment}>
          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Paciente</label>

            <select
              name='patient'
              value={treatment.patient}
              className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
              onChange={handleChangeTreatment}
            >
              <option value=''>Selecciona un Paciente</option>

              {patients.map((patient, idx) => (
                <option value={patient._id} key={idx}>
                  {patient.name} {patient.last_name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Servicio</label>

            <select
              name='service'
              value={treatment.service}
              className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
              onChange={handleChangeTreatment}
            >
              <option value=''>Selecciona un Servicio</option>

              {services.map((service, idx) => (
                <option value={service._id} key={idx}>
                  {service.name}
                </option>
              ))}
            </select>
          </fieldset>

          {selectedTreatment && (
            <fieldset className='my-3'>
              <label className='block mb-1 text-lg font-semibold text-purple-900'>Estado Tratamiento</label>

              <select
                name='status'
                value={treatment.status}
                className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
                onChange={handleChangeTreatment}
              >
                {TREATMENT_STATUS.map((status, idx) => (
                  <option value={status} key={idx}>{status}</option>
                ))}
              </select>
            </fieldset>
          )}

          {isValidSubmit && (
            <section className='flex items-center justify-end w-full mt-6'>
              {loadingRequest ? (
                <Spinner />
              ) : (
                <button className='p-2 text-purple-900 bg-purple-100 border border-purple-900 rounded-md hover:bg-purple-200 hover:border-purple-700 hover:text-purple-700'>
                  {!selectedTreatment ? 'Crear Tratamiento' : 'Editar Tratamiento'}
                </button>
              )}
            </section>
          )}
        </form>
      )}
    </>
  );
};

export default TreatmentAside;
