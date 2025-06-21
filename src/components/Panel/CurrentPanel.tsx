import { useAppSelector } from '@/store/hooks';

import { Favorites } from '../Favorites/Favorites';
import { Routes } from '../Routes/Routes';
import { Search } from '../Search/Search';
import { SelectedFavorite } from '../SelectedFavorite/SelectedFavorite';

export const CurrentPanel = () => {
    const currentPanel = useAppSelector(state => state.panel.currentPanel);

    switch (currentPanel) {
        case 'all_favorites':
            return <Favorites />;
        case 'single_favorite':
            return <SelectedFavorite />;
        case 'search':
            return <Search />;
        case 'routes':
            return <Routes />;
        default:
            return;
    }
};
