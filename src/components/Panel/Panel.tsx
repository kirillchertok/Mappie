import { arrowLeftIcon } from '@/constants/icons';
import { PanelVariant } from '@/constants/variants';
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
        if (currentPanel === PanelVariant.SINGLE_FAVORITE) {
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
                    styles[
                        `container--${
                            currentPanel === PanelVariant.SINGLE_FAVORITE ? 'large' : 'default'
                        }`
                    ]
                }`}
            >
                <div
                    className={`${styles.panel} ${
                        styles[
                            `panel--${
                                currentPanel === PanelVariant.ALL_FAVORITES ||
                                currentPanel === PanelVariant.ROUTES
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
