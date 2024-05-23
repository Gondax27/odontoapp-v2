import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';

import Spinner from '../spinners';

import { AuthService } from '@/services/auth';
import { useAuthStore } from '@/store/auth';
import { useUIStore } from '@/store/ui';

const AppLayout = () => {
  const [loadingData, setLoadingData] = useState(false);

  const isAuth = useAuthStore(state => state.isAuth);
  const loginUser = useAuthStore(state => state.loginUser);
  const setLastPath = useUIStore(state => state.setLastPath);

  const { pathname } = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setLoadingData(true);
      AuthService.verifyToken(token)
        .then((result) => loginUser({ token, user: result }))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoadingData(false));
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    if (isAuth) setLastPath(pathname);
  }, [pathname]); // eslint-disable-line

  return (
    loadingData
      ? (
        <main className='flex items-center justify-center w-full min-h-dvh'>
          <Spinner />
        </main>
      )
      : <Outlet />
  );
}

export default AppLayout