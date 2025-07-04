import { useEffect, useState } from 'react';

import { searchIconField, searchIconNotPressed } from '@/constants/icons';
import { PLACE_TYPES } from '@/constants/placeTypes';
import { useSearch } from '@/hooks/useSearch';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setFilteredPLaces } from '@/store/slices/placeSlice';
import type { IPlaceType } from '@/types/IPlaceType';

import { TypeCard } from '../TypeCard/TypeCard';
import { Button } from '../ui/Button/Button';
import { Icon } from '../ui/Icon/Icon';
import { Input } from '../ui/Input/Input';
import styles from './Search.module.css';

export const Search = () => {
    const dispatch = useAppDispatch();

    const [query, setQuery] = useState<string>('');

    const { types, radius, places } = useAppSelector(state => state.place);

    const { changeRadius, getPlaces } = useSearch();

    const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    const checkSelected = (type: IPlaceType) =>
        types.filter(typeTmp => typeTmp.normalizedName === type.normalizedName).length > 0;

    useEffect(() => {
        if (query === '') {
            dispatch(setFilteredPLaces(places));
        } else {
            dispatch(setFilteredPLaces(places.filter(place => place.name.includes(query))));
        }
    }, [query, places, dispatch]);

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
                <div>
                    <h1>Искать: </h1>
                    <div className={styles.types}>
                        {PLACE_TYPES.map(type => (
                            <TypeCard
                                key={type.name}
                                type={type}
                                isSelected={checkSelected(type)}
                            />
                        ))}
                    </div>
                    <h1>В радиусе</h1>
                    <Input
                        value={radius}
                        onChange={changeRadius}
                        label='м'
                        placeholder='500'
                    />
                </div>
                <Button
                    onClick={getPlaces}
                    variant='not_pressed'
                >
                    <Icon icon={searchIconNotPressed} />
                </Button>
            </div>
        </>
    );
};
