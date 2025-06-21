import { useMap } from 'react-leaflet';

import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import { locationIcon, minusIcon, plusIcon } from '@/constants/icons';
import { useAppDispatch } from '@/store/hooks';
import { setPlaces, setUserCoordinates } from '@/store/slices/placeSlice';
import { getUserCoordinates } from '@/utils/getUserCoordinates';

import styles from './MapButtons.module.css';

export const MapButtons = () => {
    const dispatch = useAppDispatch();
    const map = useMap();

    const minusZoom = () => map.zoomOut();
    const plusZoom = () => map.zoomIn();
    const locationClick = async () => {
        const coordinates = await getUserCoordinates();
        map.setView(coordinates);
        dispatch(setUserCoordinates(coordinates));
    };
    const clearMap = () => dispatch(setPlaces([]));

    return (
        <>
            <div className={styles.buttons}>
                <Button
                    backgroundColor='gray'
                    variant='not_pressed'
                    onClick={plusZoom}
                >
                    <Icon icon={plusIcon} />
                </Button>
                <Button
                    backgroundColor='gray'
                    variant='not_pressed'
                    onClick={minusZoom}
                >
                    <Icon icon={minusIcon} />
                </Button>
                <Button
                    backgroundColor='gray'
                    variant='not_pressed'
                    onClick={locationClick}
                >
                    <Icon icon={locationIcon} />
                </Button>
                <Button
                    size='medium'
                    backgroundColor='red'
                    onClick={clearMap}
                >
                    Очистить карту
                </Button>
            </div>
        </>
    );
};
