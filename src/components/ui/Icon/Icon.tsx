import { memo } from 'react';

import type { IIcon } from '@/types/IComponents/IIcon';

import styles from './Icon.module.css';

export const Icon = memo(function ({ icon }: IIcon) {
    return (
        <>
            <span className={styles.container}>{icon}</span>
        </>
    );
});
