import { useEffect, useState } from 'react';

import { searchIconField } from '@/constants/icons';
import { useAppSelector } from '@/store/hooks';
import type { IPlace } from '@/types/IPlace';

import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
import { Icon } from '../ui/Icon/Icon';
import { Input } from '../ui/Input/Input';
import styles from './Favorites.module.css';

export const Favorites = () => {
    const favorites = useAppSelector(state => state.favorites.favorites);

    const [filteredFavorites, setFiletredFavorites] = useState<IPlace[]>(favorites);
    const [query, setQuery] = useState<string>('');

    const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    useEffect(() => {
        if (query === '') {
            setFiletredFavorites(favorites);
        } else {
            setFiletredFavorites(favorites.filter(fav => fav.name.includes(query)));
        }
    }, [favorites, query]);

    return (
        <>
            <Input
                value={query}
                onChange={changeQuery}
                placeholder='Название места'
                sizeType='large'
                icon={<Icon icon={searchIconField} />}
            />
            <div className={styles.container}>
                <h1>Избранное: </h1>
                <div className={styles.favorites}>
                    {filteredFavorites.length > 0 ? (
                        <>
                            {filteredFavorites.map(placeData => (
                                <FavoriteCard
                                    key={placeData.id}
                                    variant='small'
                                    placeData={placeData}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <h2>
                                {query.length > 0
                                    ? 'Не найдено мест с таким названием'
                                    : 'У вас пока нет любимых мест'}
                            </h2>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
