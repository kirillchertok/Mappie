import { useEffect, useState } from 'react';

import { useRoute } from '@/hooks/useGetRoute';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeRoute } from '@/store/slices/routeSlice';
import { addRoute, removeRoute } from '@/store/slices/routesSlice';

import { Button } from '../ui/Button/Button';
import styles from './RouteInfo.module.css';

export const RouteInfo = () => {
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(state => state.app.isLoading);
    const route = useAppSelector(state => state.route);

    const { compareRoute } = useRoute();

    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        if (route.isActive) {
            setIsSaved(compareRoute(route));
        }
    }, [route, compareRoute]);

    const isActive = route.isActive;
    const duration = route.duration;
    const distance = route.distance;

    const close = () => dispatch(closeRoute());
    const saveClick = () => {
        if (isSaved) {
            dispatch(removeRoute(route));
        } else {
            dispatch(addRoute(route));
        }

        setIsSaved(prev => !prev);
    };

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
                <div className={styles.buttons}>
                    <Button
                        variant='not_pressed'
                        backgroundColor='red'
                        size='large'
                        onClick={close}
                    >
                        Убрать маршурт с карты
                    </Button>
                    <Button
                        variant='not_pressed'
                        size='large'
                        onClick={saveClick}
                    >
                        {isSaved ? 'Убрать из сохраненных' : 'Сохранить маршрут'}
                    </Button>
                </div>
            </div>
        </>
    );
};
