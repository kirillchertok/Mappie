import { FavoriteCardVariant } from '@/constants/variants';
import type { IFavoriteCard } from '@/types/IComponents/IFavoriteCard';
import { filterPlaceTypes } from '@/utils/filterPlaceTypes';

import { FavoriteSCardLarge } from '../FavoriteCardLarge/FavoriteCardLarge';
import { FavoriteSCardSmall } from '../FavoriteCardSmall/FavoriteCardSmall';
import styles from './FavoriteCard.module.css';

export const FavoriteCard = ({ variant, data, ...attrs }: IFavoriteCard) => {
    const types = filterPlaceTypes(data.type);

    return (
        <>
            <div
                {...attrs}
                className={`${styles.container} ${styles[`container--${variant}`]}`}
            >
                {variant === FavoriteCardVariant.SMALL ? (
                    <FavoriteSCardSmall
                        data={data}
                        variant={variant}
                        types={types}
                    />
                ) : (
                    <FavoriteSCardLarge
                        data={data}
                        variant={variant}
                        types={types}
                    />
                )}
            </div>
        </>
    );
};
