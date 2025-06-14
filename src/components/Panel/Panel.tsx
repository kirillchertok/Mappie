import { arrowLeftIcon } from '@/constants/icons';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deselectFavorite } from '@/store/slices/favoritesSlice';

import { Button } from '../ui/Button/Button';
import { CurrentPanel } from './CurrentPanel';
import styles from './Panel.module.css';

export const Panel = () => {
    const dispatch = useAppDispatch();

    const isOpen = useAppSelector(state => state.panel.isOpen);
    const currentPanel = useAppSelector(state => state.panel.currentPanel);

    const { closePanel } = usePanelActions();

    const close = () => {
        if (currentPanel === 'single_favorite') {
            dispatch(deselectFavorite());
        }
        closePanel();
    };

    return (
        <>
            <div
                className={`${styles.container} ${
                    styles[`container--${isOpen ? 'open' : 'closed'}`]
                } ${
                    styles[`container--${currentPanel === 'single_favorite' ? 'large' : 'default'}`]
                }`}
            >
                <div
                    className={`${styles.panel} ${
                        styles[
                            `panel--${
                                currentPanel === 'all_favorites' ? 'overflow' : 'no_overflow'
                            }`
                        ]
                    }`}
                >
                    <CurrentPanel />
                </div>
                <div
                    className={styles.close}
                    onClick={close}
                >
                    <Button
                        variant='no_diff'
                        onClick={close}
                        size='small'
                        backgroundColor='transparent'
                    >
                        {arrowLeftIcon}
                    </Button>
                </div>
            </div>
        </>
    );
};
