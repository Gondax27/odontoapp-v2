import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import PublicHeader from '../navigation/PublicHeader';

import { APP_PUBLIC_ROUTES } from '../../routes/utils/constants';

const PublicLayout = () => {
  const { pathname } = useLocation();
  const isLoginRoute = useMemo(() => pathname === `/${APP_PUBLIC_ROUTES.LOGIN}`, [pathname]);

  return (
    <>
      {!isLoginRoute && <PublicHeader />}

      <main className={!isLoginRoute ? 'px-6 max-w-6xl py-8 mx-auto' : ''}>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
