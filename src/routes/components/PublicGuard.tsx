import { Navigate } from 'react-router-dom';

import PublicLayout from '../../components/layouts/PublicLayout';

import { useAuthStore } from '@/store/auth';
import { useUIStore } from '@/store/ui';

const PublicRoutes = () => {
  const isAuth = useAuthStore(state => state.isAuth);
  const lastpath = useUIStore(state => state.lastPath);
  return !isAuth ? <PublicLayout /> : <Navigate to={lastpath || '/dashboard'} replace />;
};

export default PublicRoutes;
