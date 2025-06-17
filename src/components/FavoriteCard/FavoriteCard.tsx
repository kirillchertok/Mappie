import type { LatLngExpression } from 'leaflet';
import { useState } from 'react';

import {
    arrowRightIcon,
    favoritesIconNotPressed,
    favoritesIconPressed,
    mapPointIcon,
} from '@/constants/icons';
import { PLACE_TYPES } from '@/constants/placeTypes';
import { useGetRoute } from '@/hooks/useGetRoute';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addFavorite, removeFavorite, selectFavorite } from '@/store/slices/favoritesSlice';
import type { IFavoriteCard } from '@/types/IComponents/IFavoriteCard';
import { generateId } from '@/utils/generateId';

import { Button } from '../ui/Button/Button';
import styles from './FavoriteCard.module.css';

export const FavoriteCard = ({ variant, placeData, ...attrs }: IFavoriteCard) => {
    const dispatch = useAppDispatch();

    const userCoordinates = useAppSelector(state => state.place.coordinates);

    const { buttonClick } = usePanelActions();
    const { getRoute } = useGetRoute();

    const [isFavorite, setIsFavorite] = useState<boolean>(true);

    const types = PLACE_TYPES.filter(type => placeData.type.includes(type.normalizedName)).slice(
        0,
        2
    );

    const goToFavorite = () => {
        dispatch(selectFavorite(placeData));
        buttonClick('single_favorite');
    };

    const favoriteCLick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(placeData));
        } else {
            dispatch(addFavorite(placeData));
        }

        setIsFavorite(prev => !prev);
    };

    const routeClick = async () =>
        await getRoute(userCoordinates, [placeData.lat, placeData.lon] as LatLngExpression);

    return (
        <>
            <div
                {...attrs}
                className={`${styles.container} ${styles[`container--${variant}`]}`}
            >
                <div className={`${styles.header} ${styles[`header--${variant}`]}`}>
                    {variant === 'small' ? (
                        <>
                            <div
                                className={`${styles.img__container} ${
                                    styles[`img__container--${variant}`]
                                }`}
                            >
                                <img
                                    className={styles.img}
                                    src={placeData.img.length === 0 ? '/logo.png' : placeData.img}
                                    alt={placeData.name}
                                />
                                <div className={`${styles.types} ${styles[`types--${variant}`]}`}>
                                    {types.map(type => (
                                        <div
                                            key={generateId()}
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
                        </>
                    ) : (
                        <>
                            <div
                                className={`${styles.img__container} ${
                                    styles[`img__container--${variant}`]
                                }`}
                            >
                                <img
                                    className={styles.img}
                                    src={placeData.img.length === 0 ? '/logo.png' : placeData.img}
                                    alt={placeData.name}
                                />
                            </div>
                            <div className={`${styles.types} ${styles[`types--${variant}`]}`}>
                                {types.map(type => (
                                    <div
                                        key={generateId()}
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
                        </>
                    )}
                    <span className={`${styles.name} ${styles[`name--${variant}`]}`}>
                        {placeData.name}
                    </span>
                </div>
                <span className={`${styles.description} ${styles[`description--${variant}`]}`}>
                    {placeData.description ?? 'Для этого места нет описания'}
                </span>
                <div className={`${styles.buttons} ${styles[`buttons--${variant}`]}`}>
                    {variant === 'small' ? (
                        <>
                            {/* <Button
                                variant='no_diff'
                                size='small'
                                backgroundColor='transparent'
                            >
                                {favoritesIconPressed}
                            </Button> */}
                            {favoritesIconPressed}
                            <Button
                                variant='no_diff'
                                size='small'
                                backgroundColor='transparent'
                                onClick={goToFavorite}
                            >
                                {arrowRightIcon}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant={isFavorite ? 'pressed' : 'not_pressed'}
                                size='medium'
                                backgroundColor='red'
                                onClick={favoriteCLick}
                            >
                                {isFavorite ? (
                                    <>{favoritesIconPressed} Сохранено</>
                                ) : (
                                    <>{favoritesIconNotPressed} Сохранить</>
                                )}
                            </Button>
                            <Button
                                onClick={routeClick}
                                variant='not_pressed'
                                size='medium'
                            >
                                {mapPointIcon} Маршрут
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
