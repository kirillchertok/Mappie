import { useState } from 'react';

import type { IUseSave } from '@/types/IHooks/IUseSave';

export const useSave = ({ save, unsave }: IUseSave) => {
    const [isSaved, setIsSaved] = useState<boolean>(true);

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
