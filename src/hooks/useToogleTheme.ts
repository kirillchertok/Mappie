import { useEffect } from 'react';

import { useAppSelector } from '@/store/hooks';

export const useToogleTheme = () => {
    const theme = useAppSelector(state => state.app.theme);

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);
};
