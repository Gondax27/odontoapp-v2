import { Outlet } from 'react-router-dom';

import AuthHeader from '../navigation/AuthHeader';
import AuthNavbar from '../navigation/AuthNavBar';

const AuthLayout = () => (
  <section className='flex'>
    <AuthNavbar />

    <section className='w-full px-6'>
      <AuthHeader />

      <main className='mt-5'>
        <Outlet />
      </main>
    </section>
  </section>
);

export default AuthLayout;
