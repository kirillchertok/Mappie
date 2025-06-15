import { Home } from '@/pages/Home';
import { Login } from '@/pages/LogIn';

export const ROUTES = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <Login /> },
];
