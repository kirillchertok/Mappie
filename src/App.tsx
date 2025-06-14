import '@/assets/fonts/Mont/stylesheet.css';
import '@/assets/stylesheets/global.css';

import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';

export const App = () => {
    return (
        <>
            <Routes>
                {ROUTES.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </>
    );
};
