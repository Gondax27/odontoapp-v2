import Sidebar from '@/components/sidebar';
import Spinner from '@/components/spinners';
import TitleSection from '@/components/title-section';

import AppointmentsAside from '@/components/asides/appointments';

import useAppointments from './hooks/useAppointments';

import EditIcon from '@/assets/svg/EditIcon';
import PlusIcon from '@/assets/svg/PlusIcon';

const AppointmentsPage = () => {
  const {
    appointments, loadingData, showAside, selectedAppointment,
    handleClickEditAppointment, onShowAside
  } = useAppointments();

  return (
    <>
      <TitleSection title='Citas' />

      {loadingData
        ? (
          <section className='flex justify-center w-full'>
            <Spinner />
          </section>
        )

        : (
          <>
            <section className='flex items-center justify-end w-full gap-4 my-4'>
              <button
                onClick={() => onShowAside(true)}
                className='flex items-center p-2 border rounded-md hover:bg-purple-100 hover:border-purple-900 hover:text-purple-900 transition-[background,color,border]'
              >
                <PlusIcon className='mr-1 size-5' />
                Crear
              </button>
            </section>

            <section className='max-w-full overflow-auto'>
              <table className='table w-full border border-black table-auto'>
                <thead className='p-2 text-white bg-purple-900'>
                  <tr>
                    <th className='px-2 py-1 border border-black'>ID</th>
                    <th className='px-2 py-1 border border-black'>Fecha y Hora</th>
                    <th className='px-2 py-1 border border-black'>Paciente</th>
                    <th className='px-2 py-1 border border-black'>Doctor</th>
                    <th className='px-2 py-1 border border-black'>Estado</th>
                    <th className='px-2 py-1 border border-black'>ID Tratamiento</th>
                    <th className='px-2 py-1 border border-black'>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {appointments.map((appointment, idx) => (
                    <tr key={idx}>
                      <td className='px-2 py-1 text-center border border-black'>
                        {appointment._id}
                      </td>

                      <td className='px-2 py-1 text-center border border-black'>
                        {appointment.date} {appointment.time}
                      </td>

                      <td className='px-2 py-1 text-center border border-black'>
                        {appointment.patient.name} {appointment.patient.last_name}
                      </td>

                      <td className='px-2 py-1 text-center border border-black'>
                        {appointment.doctor.name} {appointment.doctor.last_name}
                      </td>

                      <td className='px-2 py-1 text-center border border-black'>
                        {appointment.status}
                      </td>

                      <td className='px-2 py-1 text-center border border-black'>
                        {appointment.treatment_id}
                      </td>

                      <td className='px-2 py-1 border border-black'>
                        <div className='flex items-center justify-center gap-x-4'>
                          <button
                            onClick={() => handleClickEditAppointment(appointment)}
                            className='flex items-center p-1 text-purple-900 transition-colors border border-purple-900 rounded-md hover:bg-purple-100 hover:border-purple-700 hover:text-purple-700'
                          >
                            <EditIcon className='stroke-2 size-5' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </>
        )
      }

      <Sidebar
        allowOutsideClick
        element={<AppointmentsAside selectedAppointment={selectedAppointment} onShowAside={onShowAside} />}
        show={showAside}
        setShow={onShowAside}
      />
    </>
  );
};

export default AppointmentsPage;
