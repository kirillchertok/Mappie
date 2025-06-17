import { Home } from '@/pages/Home';
import { Login } from '@/pages/LogIn';
import { NotFound } from '@/pages/NotFound';

export const ROUTES = [
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Login /> },
    { path: '*', element: <NotFound /> },
];
