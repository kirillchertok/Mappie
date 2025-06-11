type PanelType = 'all_favorites' | 'single_favorite' | 'search' | 'logIn' | 'profile' | '';

interface IPanelState {
    isOpen: boolean;
    currentPanel: PanelType;
}

export type { IPanelState, PanelType };
