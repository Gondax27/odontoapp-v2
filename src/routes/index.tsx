import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LazyRoute from './components/LazyRoute';

import { APP_PUBLIC_ROUTES, APP_PRIVATE_ROUTES } from './utils/constants';

/* Layouts */
const AppLayout = lazy(() => import('@/components/layouts/AppLayout'));
const PrivateGuard = lazy(() => import('./components/PrivateGuard'));
const PublicGuard = lazy(() => import('./components/PublicGuard'));

/* Public Routes */
const DentalHealthPage = lazy(() => import('@/pages/dental-health'));
const FAQPage = lazy(() => import('@/pages/faq'));
const HomePage = lazy(() => import('@/pages/home'));
const LoginPage = lazy(() => import('@/pages/login'));

/* Private Routes */
const AppointmentsPage = lazy(() => import('@/pages/appointments'));
const DashboardHomePage = lazy(() => import('@/pages/dashboard'));
const ProfilePage = lazy(() => import('@/pages/profile'));
const ServicesPage = lazy(() => import('@/pages/services'));
const TreatmentsPage = lazy(() => import('@/pages/treatments'));
const UsersPage = lazy(() => import('@/pages/users'));

const router = createBrowserRouter([
  {
    element: <LazyRoute Route={AppLayout} />,
    children: [
      {
        path: APP_PUBLIC_ROUTES.HOME,
        element: <LazyRoute Route={PublicGuard} />,
        children: [
          { index: true, element: <LazyRoute Route={HomePage} /> },
          { path: APP_PUBLIC_ROUTES.DENTALHEALTH, element: <LazyRoute Route={DentalHealthPage} /> },
          { path: APP_PUBLIC_ROUTES.FAQ, element: <LazyRoute Route={FAQPage} /> },
          { path: APP_PUBLIC_ROUTES.LOGIN, element: <LazyRoute Route={LoginPage} /> },
          { path: '*', element: <h1>Page not Found</h1> }
        ]
      },
      {
        path: '/dashboard',
        element: <LazyRoute Route={PrivateGuard} />,
        children: [
          { index: true, element: <LazyRoute Route={DashboardHomePage} /> },
          { path: APP_PRIVATE_ROUTES.PROFILE, element: <LazyRoute Route={ProfilePage} /> },
          { path: APP_PRIVATE_ROUTES.APPOINTMENTS, element: <LazyRoute Route={AppointmentsPage} /> },
          { path: APP_PRIVATE_ROUTES.TREATMENT, element: <LazyRoute Route={TreatmentsPage} /> },
          { path: APP_PRIVATE_ROUTES.SERVICES, element: <LazyRoute Route={ServicesPage} /> },
          { path: APP_PRIVATE_ROUTES.USERS, element: <LazyRoute Route={UsersPage} /> },
          { path: '*', element: <h1>Page not Found</h1> }
        ]
      }
    ]
  }
]);

export const AppRouter = () => <RouterProvider router={router} />;
