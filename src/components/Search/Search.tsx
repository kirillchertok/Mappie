import { useEffect, useState } from 'react';

import { searchIconField, searchIconNotPressed } from '@/constants/icons';
import { PLACE_TYPES } from '@/constants/placeTypes';
import PlacesService from '@/services/placesService';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setIsLoading } from '@/store/slices/appSlice';
import { setFilteredPLaces, setPlaces, setRadius } from '@/store/slices/placeSlice';
import { convertLat } from '@/utils/convertLat';
import { generateId } from '@/utils/generateId';

import { TypeCard } from '../TypeCard/TypeCard';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import styles from './Search.module.css';

export const Search = () => {
    const dispatch = useAppDispatch();

    const [query, setQuery] = useState<string>('');

    const placeTypes = useAppSelector(state => state.place.types);
    const radius = useAppSelector(state => state.place.radius);
    const places = useAppSelector(state => state.place.places);
    const coordinates = useAppSelector(state => state.place.coordinates);

    const changeRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value =
            e.target.value[0] === '0'
                ? e.target.value.slice(1, e.target.value.length)
                : e.target.value;

        if (!Number.isNaN(Number(value))) {
            dispatch(setRadius(Number(value)));
        }
    };

    const getPlaces = async () => {
        const { lat, lon } = convertLat(coordinates);
        dispatch(setIsLoading(true));
        const places = await PlacesService.getPlaces(lat, lon, radius, placeTypes);
        if (places) {
            dispatch(setPlaces(places));
            dispatch(setFilteredPLaces(places));
            dispatch(setIsLoading(false));
        }
    };

    const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

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
                icon={searchIconField}
            />
            <div className={styles.container}>
                <div>
                    <h1>Искать: </h1>
                    <div className={styles.types}>
                        {PLACE_TYPES.map(type => (
                            <TypeCard
                                key={generateId()}
                                type={type}
                                isSelected={
                                    placeTypes.filter(
                                        typeTmp => typeTmp.normalizedName === type.normalizedName
                                    ).length > 0
                                }
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
                    {searchIconNotPressed}
                </Button>
            </div>
        </>
    );
};
