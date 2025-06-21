type PanelType = 'all_favorites' | 'single_favorite' | 'search' | 'routes' | '';

interface IPanelState {
    isOpen: boolean;
    currentPanel: PanelType;
}

export type { IPanelState, PanelType };
