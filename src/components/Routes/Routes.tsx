import { useAppSelector } from '@/store/hooks';

import { RouteCard } from '../RouteCard/RouteCard';
import styles from './Routes.module.css';

export const Routes = () => {
    const routes = useAppSelector(state => state.routes.routes);

    return (
        <>
            <div className={styles.container}>
                <h1>Ваши сохраненные маршруты:</h1>
                {routes.length > 0 ? (
                    <>
                        {routes.map(route => (
                            <RouteCard data={route} />
                        ))}
                    </>
                ) : (
                    <>
                        <h1>У вас пока нет сохраненных маршрутов</h1>
                    </>
                )}
            </div>
        </>
    );
};
