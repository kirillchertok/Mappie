import { useEffect } from 'react';

import type { IUseLocation } from '@/types/IHooks/IUseLocation';
import { getUserCoordinates } from '@/utils/getUserCoordinates';

export const useLocation = ({ setCoordinates }: IUseLocation) => {
    useEffect(() => {
        const getLocation = async () => {
            const coordinates = await getUserCoordinates();
            setCoordinates(coordinates);
        };

        getLocation();
    }, [setCoordinates]);
};
