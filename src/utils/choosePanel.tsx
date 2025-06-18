import { FavoriteCard } from '@/components/FavoriteCard/FavoriteCard';
import { Favorites } from '@/components/Favorites/Favorites';
import { LogIn } from '@/components/LogIn/LogIn';
import { Search } from '@/components/Search/Search';
import { DATA } from '@/data/placesData';
import type { PanelType } from '@/types/IStore/IPanelSlice';

export const choosePanel = (currentPanel: PanelType) => {
    switch (currentPanel) {
        case 'all_favorites':
            return <Favorites />;
        case 'single_favorite':
            return (
                <FavoriteCard
                    variant='large'
                    placeData={DATA[0]}
                />
            );
        case 'search':
            return <Search />;
        case 'logIn':
            return <LogIn />;
        default:
            return null;
    }
};
