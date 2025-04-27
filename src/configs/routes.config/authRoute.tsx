import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import sharedRoutes from './sharedRoutes';

// Lazy import your components
const SignIn = lazy(() => import('@/views/auth/SignIn'));
const SignUp = lazy(() => import('@/views/auth/SignUp'));
const ForgotPassword = lazy(() => import('@/views/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('@/views/auth/ResetPassword'));
const Home = lazy(() => import('@/views/Home'));

const authRoutes: RouteObject[] = [
  ...sharedRoutes,
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/hello', // maybe later change to '/'
    element: <Home />,
  },
];

export default authRoutes;
