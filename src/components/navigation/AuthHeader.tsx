import { useCallback, useMemo } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore } from '@/store/auth';

const AuthHeader = () => {
  const user = useAuthStore(state => state.user);
  const logoutUser = useAuthStore(state => state.logoutUser);
  const userFullName = useMemo(() => `${user?.name} ${user?.lastName}`, [user?.name, user?.lastName]);

  /**
   * Function that logouts current session
   */
  const handleClickLogout = useCallback(() => {
    Swal.fire({
      icon: 'info',
      title: '¿Estás seguro de cerrar la sesión?',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si, deseo cerrarla',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        logoutUser();
      }
    })
  }, [logoutUser]);

  return (
    <header className='flex justify-end w-full gap-4 mt-5'>
      <div
        className='px-6 py-2 overflow-hidden font-semibold text-center text-purple-900 border border-purple-900 rounded-lg outline-none select-none min-w-36 max-w-40 text-ellipsis'
        style={{ whiteSpace: 'nowrap' }}
        title={userFullName}
      >
        {userFullName}
      </div>

      <button
        onClick={handleClickLogout}
        className='px-6 py-2 text-purple-900 border border-purple-900 rounded-md hover:bg-purple-200 hover:border-purple-700 hover:text-purple-700 transition-[border-color,background,color] font-semibold'
      >
        Cerrar Sesión
      </button>
    </header>
  );
};

export default AuthHeader;
