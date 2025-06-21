import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppDispatch } from '@/store/hooks';
import { setCenterCoordinates } from '@/store/slices/placeSlice';
import { setRouteData } from '@/store/slices/routeSlice';
import type { IRouteCard } from '@/types/IComponents/IRouteCard';

import { Button } from '../ui/Button/Button';
import { MiniRouteMap } from './MiniRouteMap/MiniRouteMap';
import styles from './RouteCard.module.css';

export const RouteCard = ({ data }: IRouteCard) => {
    const dispatch = useAppDispatch();
    const { closePanel } = usePanelActions();

    const displayClick = () => {
        closePanel();
        if (data.route)
            dispatch(setCenterCoordinates(data.route[Math.floor(data.route?.length / 2)]));
        dispatch(setRouteData(data));
    };

    return (
        <>
            <div className={styles.container}>
                <h3>
                    От <span className={styles.highlighted}>{data.startName}</span> до{' '}
                    <span className={styles.highlighted}>{data.endName}</span>
                </h3>
                <span>
                    Расстояние:{' '}
                    <span className={styles.highlighted}>
                        {data.distance?.value}
                        {data.distance?.unitOfMeasurement}
                    </span>
                </span>
                <span>
                    Время:{' '}
                    <span className={styles.highlighted}>
                        {data.duration?.value}
                        {data.duration?.unitOfMeasurement}
                    </span>
                </span>
                {data.route && (
                    <div className={styles.map_container}>
                        <MiniRouteMap coordinates={data.route} />
                    </div>
                )}
                <Button
                    size='large'
                    onClick={displayClick}
                >
                    Показать на карте
                </Button>
            </div>
        </>
    );
};
