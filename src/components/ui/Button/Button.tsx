import { memo } from 'react';

import type { IButton } from '@/types/IComponents/IButton';

import styles from './Button.module.css';

export const Button = memo(function Button({
    variant = 'not_pressed',
    size = 'default',
    backgroundColor = 'blue',
    children,
    ...attrs
}: IButton) {
    return (
        <>
            <button
                className={`${styles.btn} ${styles[`btn--${variant}`]} ${styles[`btn--${size}`]} ${
                    styles[`btn--color_${variant === 'not_pressed' ? backgroundColor : 'white'}`]
                }`}
                {...attrs}
            >
                {children}
            </button>
        </>
    );
});
