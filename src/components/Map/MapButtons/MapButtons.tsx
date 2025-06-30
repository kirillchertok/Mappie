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

    const btns = [
        {
            onCLick: plusZoom,
            icon: plusIcon,
        },
        {
            onCLick: minusZoom,
            icon: minusIcon,
        },
        {
            onCLick: locationClick,
            icon: locationIcon,
        },
    ];

    return (
        <>
            <div className={styles.buttons}>
                {btns.map(btn => (
                    <Button
                        variant='not_pressed'
                        backgroundColor='gray'
                        onClick={btn.onCLick}
                    >
                        <Icon icon={btn.icon} />
                    </Button>
                ))}
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
