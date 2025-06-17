import { searchIconField, searchIconNotPressed } from '@/constants/icons';
import { PLACE_TYPES } from '@/constants/placeTypes';
import PlacesService from '@/services/placesService';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setIsLoading } from '@/store/slices/appSlice';
import { setPlaces, setRadius } from '@/store/slices/placeSlice';
import { convertLat } from '@/utils/convertLat';
import { generateId } from '@/utils/generateId';

import { TypeCard } from '../TypeCard/TypeCard';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import styles from './Search.module.css';

export const Search = () => {
    const dispatch = useAppDispatch();

    const placeTypes = useAppSelector(state => state.place.types);
    const radius = useAppSelector(state => state.place.radius);
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
            dispatch(setIsLoading(false));
        }
    };

    return (
        <>
            <Input
                placeholder='Место, адрес'
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
                                isSelected={placeTypes.includes(type)}
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
