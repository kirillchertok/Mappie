import { Button } from '@/components/ui/Button/Button';
import {
    favoritesIconNotPressed,
    favoritesIconPressed,
    logInIconNotPressed,
    logInIconPressed,
    searchIconNotPressed,
    searchIconPressed,
} from '@/constants/icons';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppSelector } from '@/store/hooks';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
    const currentPanel = useAppSelector(state => state.panel.currentPanel);

    const { buttonClick } = usePanelActions();

    const searchClick = () => buttonClick('search');
    const favoriteClick = () => buttonClick('all_favorites');
    const logInClick = () => buttonClick('logIn');

    return (
        <>
            <aside className={styles.sidebar}>
                <img
                    className={styles.sidebar__logo}
                    src='/logo.png'
                    alt='Logo'
                />
                <div className={styles.sidebar__functions}>
                    <div className={styles.functions__main}>
                        <Button
                            variant={currentPanel === 'search' ? 'pressed' : 'not_pressed'}
                            onClick={searchClick}
                        >
                            {currentPanel === 'search' ? searchIconPressed : searchIconNotPressed}
                        </Button>
                        <Button
                            variant={currentPanel === 'all_favorites' ? 'pressed' : 'not_pressed'}
                            backgroundColor='red'
                            onClick={favoriteClick}
                        >
                            {currentPanel === 'all_favorites'
                                ? favoritesIconPressed
                                : favoritesIconNotPressed}
                        </Button>
                    </div>
                    <Button
                        variant={currentPanel === 'logIn' ? 'pressed' : 'not_pressed'}
                        backgroundColor='gray'
                        onClick={logInClick}
                    >
                        {currentPanel === 'logIn' ? logInIconPressed : logInIconNotPressed}
                    </Button>
                </div>
            </aside>
        </>
    );
};
