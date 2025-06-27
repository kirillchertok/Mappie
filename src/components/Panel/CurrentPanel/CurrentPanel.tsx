import { Favorites } from '@/components/Favorites/Favorites';
import { Routes } from '@/components/Routes/Routes';
import { Search } from '@/components/Search/Search';
import { SelectedFavorite } from '@/components/SelectedFavorite/SelectedFavorite';
import type { PanelType } from '@/types/IStore/IPanelSlice';

interface ICurrentPanel {
    currentPanel: PanelType;
}

export const CurrentPanel = ({ currentPanel }: ICurrentPanel) => {
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
