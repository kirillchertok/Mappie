import { memo } from 'react';

import type { IFavoriteCardImage } from '@/types/IComponents/IFavoriteCardImage';

import styles from './FavoriteCardImage.module.css';

export const FavoriteCardImage = memo(function FavoriteCardImage({ src, alt }: IFavoriteCardImage) {
    const imageUrl = src.length === 0 ? '/logo.png' : src;

    return (
        <img
            className={styles.img}
            src={imageUrl}
            alt={alt}
        />
    );
});
