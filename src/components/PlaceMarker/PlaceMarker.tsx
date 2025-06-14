import L, { type LatLngExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

import { favoritesIconNotPressed, mapPointIcon } from '@/constants/icons';
import { PLACE_TYPES } from '@/constants/placeTypes';
import type { IPlaceMarker } from '@/types/IComponents/IPlaceMarker';

import { Button } from '../ui/Button/Button';
import styles from './PlaceMarker.module.css';

export const PlaceMarker = ({ data }: IPlaceMarker) => {
    const position: LatLngExpression = [data.lat, data.lon];
    const types = PLACE_TYPES.filter(type => data.type.includes(type.normalizedName));

    return (
        <>
            <Marker
                position={position}
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
                                variant='not_pressed'
                                size='default'
                                backgroundColor='red'
                            >
                                {favoritesIconNotPressed}
                            </Button>
                            <Button
                                variant='not_pressed'
                                size='medium'
                            >
                                {mapPointIcon} Маршрут
                            </Button>
                        </div>
                    </div>
                </Popup>
            </Marker>
        </>
    );
};
