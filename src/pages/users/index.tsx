import { Navigate } from 'react-router-dom';

import Sidebar from '@/components/sidebar';
import Spinner from '@/components/spinners';
import TitleSection from '@/components/title-section';
import UsersAside from '@/components/asides/users';

import useUsers from './hooks/useUsers';

import { APP_PRIVATE_ROUTES } from '@/routes/utils/constants';

import DeleteIcon from '@/assets/svg/DeleteIcon';
import EditIcon from '@/assets/svg/EditIcon';
import PlusIcon from '@/assets/svg/PlusIcon';

const UsersPage = () => {
  const {
    isPatient, loadingData, showAside, users, selectedUser,
    onShowAside, handleEditUser
  } = useUsers();

  return (
    isPatient
      ? <Navigate to={APP_PRIVATE_ROUTES.HOME} replace />
      
      : (
        <>
          <TitleSection title='Usuarios' />

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
                        <th className='px-2 py-1 border border-black'>Nombre</th>
                        <th className='px-2 py-1 border border-black'>Email</th>
                        <th className='px-2 py-1 border border-black'>Teléfono</th>
                        <th className='px-2 py-1 border border-black'>Rol</th>
                        <th className='px-2 py-1 border border-black'>Acciones</th>
                      </tr>
                    </thead>

                    <tbody>
                      {users.map((user, idx) => (
                        <tr key={idx}>
                          <td className='px-2 py-1 text-center border border-black'>
                            {user._id}
                          </td>

                          <td className='px-2 py-1 text-center border border-black'>
                            {user.name} {user.last_name}
                          </td>

                          <td className='px-2 py-1 text-center border border-black'>
                            {user.email}
                          </td>

                          <td className='px-2 py-1 text-center border border-black'>
                            {user.phone}
                          </td>

                          <td className='px-2 py-1 text-center border border-black'>
                            {user.type?.name || '-'}
                          </td>

                          <td className='px-2 py-1 border border-black'>
                            <div className='flex items-center justify-center gap-x-4'>
                              <button
                                onClick={() => handleEditUser(user)}
                                className='flex items-center p-1 text-purple-900 transition-colors border border-purple-900 rounded-md hover:bg-purple-100 hover:border-purple-700 hover:text-purple-700'
                              >
                                <EditIcon className='stroke-2 size-5' />
                              </button>

                              <button
                                // onClick={() => handleClickEditAppointment(appointment)}
                                className='flex items-center p-1 text-purple-900 transition-colors border border-purple-900 rounded-md hover:bg-purple-100 hover:border-purple-700 hover:text-purple-700'
                              >
                                <DeleteIcon className='stroke-2 size-5' />
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
            element={<UsersAside selectedUser={selectedUser} onShowAside={onShowAside} />}
            show={showAside}
            setShow={onShowAside}
          />
        </>
      )
  );
};

export default UsersPage;
