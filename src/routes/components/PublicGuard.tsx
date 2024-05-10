import { Navigate } from 'react-router-dom';

import PublicLayout from '../../components/layouts/PublicLayout';

import { useAuthStore } from '@/store/auth';

const PublicRoutes = () => {
  const isAuth = useAuthStore(state => state.isAuth);
  return !isAuth ? <PublicLayout /> : <Navigate to='/dashboard' replace />;
};

export default PublicRoutes;
