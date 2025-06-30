import styles from '@/components/FavoriteCard/FavoriteCard.module.css';
import { arrowRightIcon, favoritesIconPressed } from '@/constants/icons';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppDispatch } from '@/store/hooks';
import { selectFavorite } from '@/store/slices/favoritesSlice';
import type { IFavoriteCardVariant } from '@/types/IComponents/IFavoriteCardVariant';

import { FavoriteCardImage } from '../FavoriteCardImage/FavoriteCardImage';
import { Button } from '../ui/Button/Button';
import { Icon } from '../ui/Icon/Icon';

export const FavoriteSCardSmall = ({ data, variant, types }: IFavoriteCardVariant) => {
    const dispatch = useAppDispatch();
    const { buttonClick } = usePanelActions();

    const goToFavorite = () => {
        dispatch(selectFavorite(data));
        buttonClick('single_favorite');
    };

    return (
        <>
            <div className={`${styles.header} ${styles[`header--${variant}`]}`}>
                <div className={`${styles.img__container} ${styles[`img__container--${variant}`]}`}>
                    <FavoriteCardImage
                        src={data.img}
                        alt={data.name}
                    />
                    <div className={`${styles.types} ${styles[`types--${variant}`]}`}>
                        {types.map(type => (
                            <div
                                key={type.name}
                                className={`${styles.type__container} ${
                                    styles[`type__container--${variant}`]
                                }`}
                            >
                                <img
                                    className={styles.type}
                                    src={type.img.src}
                                    alt={type.img.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <span className={`${styles.name} ${styles[`name--${variant}`]}`}>{data.name}</span>
            </div>
            <span className={`${styles.description} ${styles[`description--${variant}`]}`}>
                {data.description ?? 'Для этого места нет описания'}
            </span>
            <div className={`${styles.buttons} ${styles[`buttons--${variant}`]}`}>
                <Icon icon={favoritesIconPressed} />
                <Button
                    variant='no_diff'
                    size='small'
                    backgroundColor='transparent'
                    onClick={goToFavorite}
                >
                    <Icon icon={arrowRightIcon} />
                </Button>
            </div>
        </>
    );
};
