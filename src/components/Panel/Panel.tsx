import { arrowLeftIcon } from '@/constants/icons';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCurrentPanel, setIsOpen } from '@/store/slices/panelSlice';
import { choosePanel } from '@/utils/choosePanel';

import { Button } from '../ui/Button/Button';
import styles from './Panel.module.css';

export const Panel = () => {
    const dispatch = useAppDispatch();

    const isOpen = useAppSelector(state => state.panel.isOpen);
    const currentPanel = useAppSelector(state => state.panel.currentPanel);

    const close = () => {
        dispatch(setIsOpen(false));
        dispatch(setCurrentPanel(''));
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
                    {choosePanel(currentPanel)}
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
