import L, { type LatLngExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

import { favoritesIconNotPressed, favoritesIconPressed, mapPointIcon } from '@/constants/icons';
import { useRoute } from '@/hooks/useGetRoute';
import { useSave } from '@/hooks/useSave';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addFavorite, removeFavorite } from '@/store/slices/favoritesSlice';
import type { IPlaceMarker } from '@/types/IComponents/IPlaceMarker';
import { filterPlaceTypes } from '@/utils/filterPlaceTypes';

import { Button } from '../ui/Button/Button';
import { Icon } from '../ui/Icon/Icon';
import styles from './PlaceMarker.module.css';

export const PlaceMarker = ({ data }: IPlaceMarker) => {
    const dispatch = useAppDispatch();
    const userCoordinates = useAppSelector(state => state.place.userCoordinates);

    const { getRoute } = useRoute();
    const { changeState, isSaved } = useSave({
        save: () => dispatch(addFavorite(data)),
        unsave: () => dispatch(removeFavorite(data)),
    });

    const placeCoordinates: LatLngExpression = [data.lat, data.lon];
    const types = filterPlaceTypes(data.type);

    const favoriteClick = () => changeState();

    const routeCLick = async () => await getRoute(userCoordinates, placeCoordinates);

    return (
        <>
            <Marker
                position={placeCoordinates}
                icon={L.icon({
                    iconUrl: types[0].img.src,
                    iconSize: [30, 30],
                })}
            >
                <Popup>
                    <div className={styles.container}>
                        <div className={styles.img__container}>
                            <img
                                className={styles.img}
                                src={data.img.length === 0 ? '/logo.png' : data.img}
                                alt={`${data.name} image`}
                            />
                        </div>
                        <span className={styles.name}>{data.name}</span>
                        <span className={styles.description}>
                            {data.description ?? 'Для этого места нет описания'}
                        </span>
                        <div className={styles.buttons}>
                            <Button
                                variant={isSaved ? 'pressed' : 'not_pressed'}
                                size='default'
                                backgroundColor='red'
                                onClick={favoriteClick}
                            >
                                {isSaved ? (
                                    <Icon icon={favoritesIconPressed} />
                                ) : (
                                    <Icon icon={favoritesIconNotPressed} />
                                )}
                            </Button>
                            <Button
                                variant='not_pressed'
                                size='medium'
                                onClick={routeCLick}
                            >
                                <Icon icon={mapPointIcon} /> Маршрут
                            </Button>
                        </div>
                    </div>
                </Popup>
            </Marker>
        </>
    );
};
