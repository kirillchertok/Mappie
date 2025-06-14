import { searchIconField } from '@/constants/icons';
import { useAppSelector } from '@/store/hooks';

import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
import { Input } from '../ui/Input/Input';
import styles from './Favorites.module.css';

export const Favorites = () => {
    const favorites = useAppSelector(state => state.favorites.favorites);

    return (
        <>
            <Input
                placeholder='Место, адрес'
                sizeType='large'
                icon={searchIconField}
            />
            <div className={styles.container}>
                <h1>Избранное: </h1>
                <div className={styles.favorites}>
                    {favorites.length > 0 ? (
                        <>
                            {favorites.map(placeData => (
                                <FavoriteCard
                                    key={placeData.id}
                                    variant='small'
                                    placeData={placeData}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <h2>У вас пока нет любимых мест</h2>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
