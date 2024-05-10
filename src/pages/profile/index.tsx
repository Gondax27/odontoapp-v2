import Spinner from '@/components/spinners';
import TitleSection from '@/components/title-section';

import useProfile from './hooks/useProfile';

import CancelIcon from '@/assets/svg/CancelIcon';
import EditIcon from '@/assets/svg/EditIcon';
import SaveIcon from '@/assets/svg/SaveIcon';

const ProfilePage = () => {
  const {
    profile, isEdit, loadingData, userTypes, isPatient,
    handleChangeAttribute, handleChangeEditMode, handleClickSaveUser
  } = useProfile();

  return (
    <>
      <TitleSection title='Profile' />

      {loadingData
        ? (
          <div className='flex justify-center w-full my-4'>
            <Spinner />
          </div>
        )
        
        : (
          <>
            <div className='flex items-center justify-end w-full gap-4 my-4'>
              {!isEdit
                ? (
                  <button
                    onClick={handleChangeEditMode}
                    className='flex items-center p-2 transition-colors border rounded-md hover:bg-purple-100 hover:border-purple-900 hover:text-purple-900'
                  >
                    <EditIcon className='mr-1 size-5' />
                    Editar
                  </button>
                )
                
                : (
                  <>
                    <button
                      onClick={handleChangeEditMode}
                      className='flex items-center p-2 text-purple-900 transition-colors border rounded-md hover:bg-purple-100 hover:border-purple-900'
                    >
                      <CancelIcon className='stroke-2 size-5' />
                    </button>

                    <button
                      onClick={handleClickSaveUser}
                      className='flex items-center p-2 transition-colors border rounded-md hover:bg-purple-100 hover:border-purple-900 hover:text-purple-900'
                    >
                      <SaveIcon className='mr-1 size-5' />
                      Guardar
                    </button>
                  </>
                )
              }
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <fieldset>
                <label className='block text-xl font-semibold'>ID</label>
                <input
                  name='_id'
                  className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none text-black/70'
                  type='text'
                  value={profile._id}
                  disabled
                />
              </fieldset>

              <fieldset>
                <label className='block text-xl font-semibold'>Email</label>
                <input
                  name='email'
                  disabled={!isEdit}
                  className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none text-black/70'
                  type='text'
                  value={profile.email}
                />
              </fieldset>

              <fieldset>
                <label className='block text-xl font-semibold'>Nombre</label>
                <input
                  name='name'
                  disabled={!isEdit}
                  className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none text-black/70'
                  type='text'
                  value={profile.name}
                  onChange={handleChangeAttribute}
                />
              </fieldset>

              <fieldset>
                <label className='block text-xl font-semibold'>Apellido</label>
                <input
                  name='lastName'
                  disabled={!isEdit}
                  className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none text-black/70'
                  type='text'
                  value={profile.lastName}
                  onChange={handleChangeAttribute}
                />
              </fieldset>

              <fieldset>
                <label className='block text-xl font-semibold'>Teléfono</label>
                <input
                  name='phone'
                  disabled={!isEdit}
                  className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none text-black/70'
                  type='text'
                  value={profile.phone}
                  onChange={handleChangeAttribute}
                />
              </fieldset>

              <fieldset>
                <label className='block text-xl font-semibold'>Tipo Usuario</label>
                <select
                  name='type'
                  disabled={!isEdit || isPatient}
                  className='w-full h-10 pl-3 text-lg rounded-md shadow-md outline-none disabled:appearance-none text-black/70 disabled:bg-white/5 disabled:opacity-100'
                  value={profile.type}
                  onChange={handleChangeAttribute}
                >
                  {userTypes?.map((type, idx) => <option key={idx} value={type._id}>{type.name}</option>)}
                </select>
              </fieldset>
            </div>
          </>
        )
      }
    </>
  );
};

export default ProfilePage;
