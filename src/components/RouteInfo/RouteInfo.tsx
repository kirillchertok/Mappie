import { useEffect } from 'react';

import { useRoute } from '@/hooks/useGetRoute';
import { useSave } from '@/hooks/useSave';
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
    const { changeState, isSaved, setIsSaved } = useSave({
        save: () => dispatch(addRoute(route)),
        unsave: () => dispatch(removeRoute(route)),
        inital: false,
    });

    useEffect(() => {
        if (route.isActive) {
            setIsSaved(compareRoute(route));
        }
    }, [route, compareRoute, setIsSaved]);

    const close = () => dispatch(closeRoute());
    const saveClick = () => changeState();

    return (
        <>
            <div
                className={`${styles.container} ${
                    styles[`container--${route.isActive && !isLoading ? 'open' : 'closed'}`]
                }`}
            >
                <div className={styles.info}>
                    <div className={styles.info__block}>
                        {route.distance && (
                            <span className={styles.value}>
                                {route.distance.value} {route.distance.unitOfMeasurement}
                            </span>
                        )}
                        <span className={styles.description}>дистанция</span>
                    </div>
                    <div className={styles.info__block}>
                        {route.duration && (
                            <span className={styles.value}>
                                {route.duration.value} {route.duration.unitOfMeasurement}
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
