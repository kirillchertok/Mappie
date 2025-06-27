import type { LatLngExpression } from 'leaflet';

import {
    arrowRightIcon,
    favoritesIconNotPressed,
    favoritesIconPressed,
    mapPointIcon,
} from '@/constants/icons';
import { PLACE_TYPES } from '@/constants/placeTypes';
import { useRoute } from '@/hooks/useGetRoute';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useSave } from '@/hooks/useSave';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addFavorite, removeFavorite, selectFavorite } from '@/store/slices/favoritesSlice';
import type { IFavoriteCard } from '@/types/IComponents/IFavoriteCard';
import { generateId } from '@/utils/generateId';

import { Button } from '../ui/Button/Button';
import { Icon } from '../ui/Icon/Icon';
import styles from './FavoriteCard.module.css';

export const FavoriteCard = ({ variant, data, ...attrs }: IFavoriteCard) => {
    const dispatch = useAppDispatch();

    const userCoordinates = useAppSelector(state => state.place.userCoordinates);

    const { buttonClick } = usePanelActions();
    const { getRoute } = useRoute();
    const { changeState, isSaved } = useSave({
        save: () => dispatch(addFavorite(data)),
        unsave: () => dispatch(removeFavorite(data)),
    });

    const types = PLACE_TYPES.filter(type => data.type.includes(type.normalizedName)).slice(0, 2);

    const goToFavorite = () => {
        dispatch(selectFavorite(data));
        buttonClick('single_favorite');
    };

    const favoriteCLick = () => changeState();

    const routeClick = async () =>
        await getRoute(userCoordinates, [data.lat, data.lon] as LatLngExpression);

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
                                    src={data.img.length === 0 ? '/logo.png' : data.img}
                                    alt={data.name}
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
                                    src={data.img.length === 0 ? '/logo.png' : data.img}
                                    alt={data.name}
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
                        {data.name}
                    </span>
                </div>
                <span className={`${styles.description} ${styles[`description--${variant}`]}`}>
                    {data.description ?? 'Для этого места нет описания'}
                </span>
                <div className={`${styles.buttons} ${styles[`buttons--${variant}`]}`}>
                    {variant === 'small' ? (
                        <>
                            <Icon icon={favoritesIconPressed} />
                            <Button
                                variant='no_diff'
                                size='small'
                                backgroundColor='transparent'
                                onClick={goToFavorite}
                            >
                                <Icon icon={arrowRightIcon} />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant={isSaved ? 'pressed' : 'not_pressed'}
                                size='medium'
                                backgroundColor='red'
                                onClick={favoriteCLick}
                            >
                                {isSaved ? (
                                    <>
                                        <Icon icon={favoritesIconPressed} /> Сохранено
                                    </>
                                ) : (
                                    <>
                                        <Icon icon={favoritesIconNotPressed} /> Сохранить
                                    </>
                                )}
                            </Button>
                            <Button
                                onClick={routeClick}
                                variant='not_pressed'
                                size='medium'
                            >
                                <Icon icon={mapPointIcon} /> Маршрут
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
