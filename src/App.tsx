import '@/assets/fonts/Mont/stylesheet.css';
import '@/assets/stylesheets/global.css';

import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/components/Loader/Loader';
import { ROUTES } from '@/constants/routes';
import { useAppSelector } from '@/store/hooks';

import { useToogleTheme } from './hooks/useToogleTheme';

export const App = () => {
    const isLoading = useAppSelector(state => state.app.isLoading);

    useToogleTheme();

    return (
        <>
            {isLoading && <Loader />}
            <Suspense fallback={<Loader />}>
                <Routes>
                    {ROUTES.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
};
