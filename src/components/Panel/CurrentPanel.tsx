import { useAppSelector } from '@/store/hooks';

import { Favorites } from '../Favorites/Favorites';
import { LogIn } from '../LogIn/LogIn';
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
        case 'logIn':
            return <LogIn />;
        default:
            return;
    }
};
