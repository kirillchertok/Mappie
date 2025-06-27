import { arrowLeftIcon } from '@/constants/icons';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deselectFavorite } from '@/store/slices/favoritesSlice';

import { Button } from '../ui/Button/Button';
import { Icon } from '../ui/Icon/Icon';
import { CurrentPanel } from './CurrentPanel/CurrentPanel';
import styles from './Panel.module.css';

export const Panel = () => {
    const dispatch = useAppDispatch();

    const { isOpen, currentPanel } = useAppSelector(state => state.panel);

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
                                currentPanel === 'all_favorites' || currentPanel === 'routes'
                                    ? 'overflow'
                                    : 'no_overflow'
                            }`
                        ]
                    }`}
                >
                    <CurrentPanel currentPanel={currentPanel} />
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
                        <Icon icon={arrowLeftIcon} />
                    </Button>
                </div>
            </div>
        </>
    );
};
