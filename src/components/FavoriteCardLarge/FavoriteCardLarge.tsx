import type { LatLngExpression } from 'leaflet';

import styles from '@/components/FavoriteCard/FavoriteCard.module.css';
import { favoritesIconNotPressed, favoritesIconPressed, mapPointIcon } from '@/constants/icons';
import { useRoute } from '@/hooks/useGetRoute';
import { useSave } from '@/hooks/useSave';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addFavorite, removeFavorite } from '@/store/slices/favoritesSlice';
import type { IFavoriteCardVariant } from '@/types/IComponents/IFavoriteCardVariant';

import { FavoriteCardImage } from '../FavoriteCardImage/FavoriteCardImage';
import { Button } from '../ui/Button/Button';
import { Icon } from '../ui/Icon/Icon';

export const FavoriteSCardLarge = ({ data, variant, types }: IFavoriteCardVariant) => {
    const dispatch = useAppDispatch();
    const { changeState, isSaved } = useSave({
        save: () => dispatch(addFavorite(data)),
        unsave: () => dispatch(removeFavorite(data)),
        inital: false,
    });
    const { getRoute } = useRoute();

    const userCoordinates = useAppSelector(state => state.place.userCoordinates);

    const favoriteCLick = () => changeState();

    const routeClick = async () =>
        await getRoute(userCoordinates, [data.lat, data.lon] as LatLngExpression);

    return (
        <>
            <div className={`${styles.header} ${styles[`header--${variant}`]}`}>
                <div className={`${styles.img__container} ${styles[`img__container--${variant}`]}`}>
                    <FavoriteCardImage
                        src={data.img}
                        alt={data.name}
                    />
                </div>
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
                <span className={`${styles.name} ${styles[`name--${variant}`]}`}>{data.name}</span>
            </div>
            <span className={`${styles.description} ${styles[`description--${variant}`]}`}>
                {data.description ?? 'Для этого места нет описания'}
            </span>
            <div className={`${styles.buttons} ${styles[`buttons--${variant}`]}`}>
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
            </div>
        </>
    );
};
