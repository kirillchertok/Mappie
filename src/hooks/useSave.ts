import { useState } from 'react';

import type { IUseSave } from '@/types/IHooks/IUseSave';

export const useSave = ({ inital = false, save, unsave }: IUseSave) => {
    const [isSaved, setIsSaved] = useState<boolean>(inital);

    const changeState = () => {
        if (isSaved) {
            unsave();
        } else {
            save();
        }

        setIsSaved(prev => !prev);
    };

    return { changeState, isSaved, setIsSaved };
};
