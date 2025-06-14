import { useState } from 'react';

import { useAppDispatch } from '@/store/hooks';
import { addType, removeType } from '@/store/slices/placeSlice';
import type { ITypeCard } from '@/types/IComponents/ITypeCard';

import styles from './TypeCard.module.css';

export const TypeCard = ({ type, isSelected }: ITypeCard) => {
    const dispatch = useAppDispatch();

    const [selected, setSelected] = useState<boolean>(isSelected);

    const handleCLick = () => {
        setSelected(prev => !prev);
        if (selected) {
            dispatch(removeType(type));
        } else {
            dispatch(addType(type));
        }
    };

    return (
        <>
            <div
                className={styles.container}
                onClick={handleCLick}
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
