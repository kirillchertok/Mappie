import PlacesService from '@/services/placesService';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setIsLoading } from '@/store/slices/appSlice';
import { setFilteredPLaces, setPlaces, setRadius } from '@/store/slices/placeSlice';
import { convertLeafletExpr } from '@/utils/convertLeafletExpr';

export const useSearch = () => {
    const dispatch = useAppDispatch();
    const { types, radius, userCoordinates: coordinates } = useAppSelector(state => state.place);

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
        const { lat, lon } = convertLeafletExpr(coordinates);
        dispatch(setIsLoading(true));
        const places = await PlacesService.getPlaces(lat, lon, radius, types);
        if (places) {
            dispatch(setPlaces(places));
            dispatch(setFilteredPLaces(places));
            dispatch(setIsLoading(false));
        }
    };

    return { getPlaces, changeRadius };
};
