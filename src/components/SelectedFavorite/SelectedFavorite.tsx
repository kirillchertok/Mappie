import { arrowLeftIcon } from '@/constants/icons';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deselectFavorite } from '@/store/slices/favoritesSlice';

import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
import { Button } from '../ui/Button/Button';
import { Icon } from '../ui/Icon/Icon';
import styles from './SelectedFavorite.module.css';

export const SelectedFavorite = () => {
    const dispatch = useAppDispatch();

    const selectedFavorite = useAppSelector(state => state.favorites.selectedFavorite);

    const { buttonClick } = usePanelActions();

    const backClick = () => {
        buttonClick('all_favorites');
        dispatch(deselectFavorite());
    };

    return (
        <>
            <div className={styles.header}>
                <Button
                    variant='no_diff'
                    size='small'
                    backgroundColor='transparent'
                    onClick={backClick}
                >
                    <Icon icon={arrowLeftIcon} />
                </Button>
                <h1>Избранное</h1>
            </div>
            {selectedFavorite && (
                <FavoriteCard
                    variant='large'
                    placeData={selectedFavorite}
                />
            )}
        </>
    );
};
