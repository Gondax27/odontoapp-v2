import Spinner from '@/components/spinners';
import useUsersAside from './hooks/useUsersAside';

import type { UserRequest } from '@/types/user';

interface UsersAsideProps {
  selectedUser: UserRequest | null;
  onShowAside: (state: boolean) => void;
}

const UsersAside = ({ selectedUser, onShowAside }: UsersAsideProps) => {
  const {
    isValidSubmit, loadingData, loadingRequest, user, userTypes,
    handleChangeUser, handleSubmitUser
  } = useUsersAside({
    selectedUser,
    onShowAside
  });

  return (
    <>
      <h3 className='text-2xl font-bold text-purple-900'>
        {!selectedUser ? 'Creación de Usuario' : 'Edición de Usuario'}
      </h3>
      <hr className='mt-2 mb-3 border-purple-900' />

      {loadingData ? (
        <section className='flex justify-center w-full'>
          <Spinner />
        </section>
      ) : (
        <form onSubmit={handleSubmitUser}>
          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Nombre</label>

            <input
              className='w-full h-10 pl-3 text-lg border rounded-md shadow-md outline-none text-black/70'
              type='text'
              name='name'
              value={user.name}
              disabled={loadingRequest}
              onChange={handleChangeUser}
            />
          </fieldset>

          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Apellido</label>

            <input
              className='w-full h-10 pl-3 text-lg border rounded-md shadow-md outline-none text-black/70'
              type='text'
              name='last_name'
              value={user.last_name}
              disabled={loadingRequest}
              onChange={handleChangeUser}
            />
          </fieldset>

          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Email</label>

            <input
              className='w-full h-10 pl-3 text-lg border rounded-md shadow-md outline-none text-black/70'
              type='email'
              name='email'
              value={user.email}
              disabled={loadingRequest}
              onChange={handleChangeUser}
            />
          </fieldset>

          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Teléfono</label>

            <input
              className='w-full h-10 pl-3 text-lg border rounded-md shadow-md outline-none text-black/70'
              type='tel'
              name='phone'
              value={user.phone}
              disabled={loadingRequest}
              onChange={handleChangeUser}
            />
          </fieldset>

          <fieldset className='my-3'>
            <label className='block mb-1 text-lg font-semibold text-purple-900'>Rol</label>

            <select
              name='type'
              value={user.type}
              className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
              onChange={handleChangeUser}
            >
              {userTypes.map((type, idx) => (
                <option value={type._id} key={idx}>
                  {type.name}
                </option>
              ))}
            </select>
          </fieldset>

          {isValidSubmit && (
            <section className='flex items-center justify-end w-full mt-6'>
              {loadingRequest ? (
                <Spinner />
              ) : (
                <button className='p-2 text-purple-900 bg-purple-100 border border-purple-900 rounded-md hover:bg-purple-200 hover:border-purple-700 hover:text-purple-700'>
                  {!selectedUser ? 'Crear Usuario' : 'Editar Usuario'}
                </button>
              )}
            </section>
          )}
        </form>
      )}
    </>
  );
};

export default UsersAside;
