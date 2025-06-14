import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCurrentPanel, setIsOpen } from '@/store/slices/panelSlice';
import type { PanelType } from '@/types/IStore/IPanelSlice';

export const usePanelActions = () => {
    const dispatch = useAppDispatch();

    const isOpen = useAppSelector(state => state.panel.isOpen);
    const currentPanel = useAppSelector(state => state.panel.currentPanel);

    const closePanel = () => {
        dispatch(setIsOpen(false));
        dispatch(setCurrentPanel(''));
    };

    const openPanel = (panelType: PanelType) => {
        dispatch(setIsOpen(true));
        dispatch(setCurrentPanel(panelType));
    };

    const buttonClick = (buttonType: PanelType) => {
        if (isOpen && currentPanel === buttonType) {
            closePanel();
            return;
        }
        if (isOpen && currentPanel !== buttonType) {
            closePanel();
            setTimeout(() => openPanel(buttonType), 500);
            return;
        }
        openPanel(buttonType);
    };

    return { closePanel, openPanel, buttonClick };
};
