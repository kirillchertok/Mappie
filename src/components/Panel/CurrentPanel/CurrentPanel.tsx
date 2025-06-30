import { Favorites } from '@/components/Favorites/Favorites';
import { Routes } from '@/components/Routes/Routes';
import { Search } from '@/components/Search/Search';
import { SelectedFavorite } from '@/components/SelectedFavorite/SelectedFavorite';
import { PanelVariant } from '@/constants/variants';
import type { PanelType } from '@/types/IStore/IPanelSlice';

interface ICurrentPanel {
    currentPanel: PanelType;
}

export const CurrentPanel = ({ currentPanel }: ICurrentPanel) => {
    return (
        <>
            {currentPanel === PanelVariant.ALL_FAVORITES ? (
                <Favorites />
            ) : currentPanel === PanelVariant.SINGLE_FAVORITE ? (
                <SelectedFavorite />
            ) : currentPanel === PanelVariant.SEARCH ? (
                <Search />
            ) : (
                <Routes />
            )}
        </>
    );
};
