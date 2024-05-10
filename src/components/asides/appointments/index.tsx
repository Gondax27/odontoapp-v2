import Spinner from '@/components/spinners';

import useAppointmentsAside from './hooks/useAppointmentsAside';

import type { Appointment } from '@/types/appointment';

import { APPOINTMENT_STATUS } from './utils/constants';

interface AppointmentsAsideProps {
  selectedAppointment: Appointment | null;
  onShowAside: (state: boolean) => void;
}

const AppointmentsAside = ({ selectedAppointment, onShowAside }: AppointmentsAsideProps) => {
  const {
    appointment, doctors, loadingData, patients, treatments,
    loadingRequest, isValidSubmit,  
    handleChangeAppointment, handleSubmitAppointment
  } = useAppointmentsAside({
    selectedAppointment,
    onShowAside
  });

  return (
    <>
      <h3 className='text-2xl font-bold text-purple-900'>
        {!selectedAppointment ? 'Creación de Citas' : 'Edición de Citas'}
      </h3>
      <hr className='mt-2 mb-3 border-purple-900' />

      {loadingData ? (
        <section className='flex justify-center w-full'>
          <Spinner />
        </section>
      ) : (
        <form onSubmit={handleSubmitAppointment}>
          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Paciente</label>
            <select
              name='patient'
              value={appointment.patient}
              className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
              onChange={handleChangeAppointment}
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
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Médico</label>
            <select
              name='doctor'
              value={appointment.doctor}
              className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
              onChange={handleChangeAppointment}
            >
              <option value=''>Selecciona un Médico</option>
              {doctors.map((doctor, idx) => (
                <option value={doctor._id} key={idx}>
                  {doctor.name} {doctor.last_name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Tratamiento</label>
            <select
              name='treatment_id'
              value={appointment.treatment_id}
              className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
              onChange={handleChangeAppointment}
            >
              <option value=''>Selecciona un Tratamiento</option>
              {treatments.map((treatment, idx) => (
                <option value={treatment._id} key={idx}>
                  {treatment.service._id} - {treatment.service.name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Estado</label>
            <select
              name='status'
              value={appointment.status}
              className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
              onChange={handleChangeAppointment}
            >
              {APPOINTMENT_STATUS.map((status, idx) => (
                <option value={status} key={idx}>
                  {status}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Fecha y Hora</label>
            <input
              name='date'
              type='datetime-local'
              value={appointment.date}
              className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
              onChange={handleChangeAppointment}
            />
          </fieldset>

          {isValidSubmit && (
            <section className='flex items-center justify-end w-full mt-6'>
              {loadingRequest ? (
                <Spinner />
              ) : (
                <button className='p-2 text-purple-900 bg-purple-100 border border-purple-900 rounded-md hover:bg-purple-200 hover:border-purple-700 hover:text-purple-700'>
                  {!selectedAppointment ? 'Crear Cita' : 'Editar Cita'}
                </button>
              )}
            </section>
          )}
        </form>
      )}
    </>
  );
};

export default AppointmentsAside;
