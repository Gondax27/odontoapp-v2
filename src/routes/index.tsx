import React, { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LazyElement from './components/LazyElement';

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
    element: <LazyElement Element={AppLayout} />,
    children: [
      {
        path: APP_PUBLIC_ROUTES.HOME,
        element: <LazyElement Element={PublicGuard} />,
        children: [
          { index: true, element: <LazyElement Element={HomePage} /> },
          { path: APP_PUBLIC_ROUTES.DENTALHEALTH, element: <LazyElement Element={DentalHealthPage} /> },
          { path: APP_PUBLIC_ROUTES.FAQ, element: <LazyElement Element={FAQPage} /> },
          { path: APP_PUBLIC_ROUTES.LOGIN, element: <LazyElement Element={LoginPage} /> },
          { path: '*', element: <h1>Page not Found</h1> }
        ]
      },
      {
        path: '/dashboard',
        element: <LazyElement Element={PrivateGuard} />,
        children: [
          { index: true, element: <LazyElement Element={DashboardHomePage} /> },
          { path: APP_PRIVATE_ROUTES.PROFILE, element: <LazyElement Element={ProfilePage} /> },
          { path: APP_PRIVATE_ROUTES.APPOINTMENTS, element: <LazyElement Element={AppointmentsPage} /> },
          { path: APP_PRIVATE_ROUTES.TREATMENT, element: <LazyElement Element={TreatmentsPage} /> },
          { path: APP_PRIVATE_ROUTES.SERVICES, element: <LazyElement Element={ServicesPage} /> },
          { path: APP_PRIVATE_ROUTES.USERS, element: <LazyElement Element={UsersPage} /> },
          { path: '*', element: <h1>Page not Found</h1> }
        ]
      }
    ]
  }
]);

export const AppRouter = React.memo(() => <RouterProvider router={router} />);
