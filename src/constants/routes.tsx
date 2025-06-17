import { Home } from '@/pages/Home';
import { Login } from '@/pages/LogIn';
import { NotFound } from '@/pages/NotFound';

export const ROUTES = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> },
];
