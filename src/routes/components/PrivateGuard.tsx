import { Navigate } from 'react-router-dom';

import AuthLayout from '../../components/layouts/AuthLayout';

import { useAuthStore } from '@/store/auth';

const PrivateRoutes = () => {
  const isAuth = useAuthStore(state => state.isAuth);
  return isAuth ? <AuthLayout /> : <Navigate to='/' replace />;
};

export default PrivateRoutes;
