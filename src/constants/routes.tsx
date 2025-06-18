import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/LogIn'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const ROUTES = [
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Login /> },
    { path: '*', element: <NotFound /> },
];
