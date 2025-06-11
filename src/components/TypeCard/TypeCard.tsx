import { useState } from 'react';

import type { ITypeCard } from '@/types/IComponents/ITypeCard';

import styles from './TypeCard.module.css';

export const TypeCard = ({ type, isSelected }: ITypeCard) => {
    const [selected, setSelected] = useState<boolean>(isSelected);
    return (
        <>
            <div
                className={styles.container}
                onClick={() => setSelected(prev => !prev)}
            >
                <div
                    className={`${styles.img__container} ${
                        styles[`img__container--${selected ? 'selected' : 'not_selected'}`]
                    }`}
                >
                    <img
                        className={styles.img}
                        src={type.img.src}
                        alt={type.img.alt}
                    />
                </div>
                <span
                    className={`${styles.name} ${
                        styles[`name--${selected ? 'selected' : 'not_selected'}`]
                    }`}
                >
                    {type.name}
                </span>
            </div>
        </>
    );
};
