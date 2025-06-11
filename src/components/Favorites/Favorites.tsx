import { searchIconField } from '@/constants/icons';
import { DATA } from '@/data/placesData';
import { generateId } from '@/utils/generateId';

import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
import { Input } from '../ui/Input/Input';
import styles from './Favorites.module.css';

export const Favorites = () => {
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
                    {DATA.map(placeData => (
                        <FavoriteCard
                            key={generateId()}
                            variant='small'
                            placeData={placeData}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
