import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeRoute } from '@/store/slices/routeSlice';

import { Button } from '../ui/Button/Button';
import styles from './RouteInfo.module.css';

export const RouteInfo = () => {
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(state => state.app.isLoading);

    const isActive = useAppSelector(state => state.route.isActive);
    const distance = useAppSelector(state => state.route.distance);
    const duration = useAppSelector(state => state.route.duration);

    const close = () => dispatch(closeRoute());

    return (
        <>
            <div
                className={`${styles.container} ${
                    styles[`container--${isActive && !isLoading ? 'open' : 'closed'}`]
                }`}
            >
                <div className={styles.info}>
                    <div className={styles.info__block}>
                        {distance && (
                            <span className={styles.value}>
                                {distance.value} {distance.unitOfMeasurement}
                            </span>
                        )}
                        <span className={styles.description}>дистанция</span>
                    </div>
                    <div className={styles.info__block}>
                        {duration && (
                            <span className={styles.value}>
                                {duration.value} {duration.unitOfMeasurement}
                            </span>
                        )}
                        <span className={styles.description}>примерное время</span>
                    </div>
                </div>
                <Button
                    variant='not_pressed'
                    backgroundColor='red'
                    size='large'
                    onClick={close}
                >
                    Убрать маршурт с карты
                </Button>
            </div>
        </>
    );
};
