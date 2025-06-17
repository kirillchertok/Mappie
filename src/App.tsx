import '@/assets/fonts/Mont/stylesheet.css';
import '@/assets/stylesheets/global.css';

import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/components/Loader/Loader';
import { ROUTES } from '@/constants/routes';
import { useAppSelector } from '@/store/hooks';

export const App = () => {
    const isLoading = useAppSelector(state => state.app.isLoading);

    return (
        <>
            {isLoading && <Loader />}
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
