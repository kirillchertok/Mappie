import { useEffect } from 'react';

import type { IUseClickOutside } from '@/types/IHooks/IUseClickOutside';

export const useClickOutside = <T extends HTMLElement>({ ref, onClose }: IUseClickOutside<T>) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClose]);
};
