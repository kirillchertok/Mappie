import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/Button/Button';
import {
    favoritesIconNotPressed,
    favoritesIconPressed,
    logInIconNotPressed,
    searchIconNotPressed,
    searchIconPressed,
} from '@/constants/icons';
import { useAuth } from '@/hooks/useAuth';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppSelector } from '@/store/hooks';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
    const navigate = useNavigate();
    const currentPanel = useAppSelector(state => state.panel.currentPanel);
    const { id, email } = useAppSelector(state => state.user);

    const { buttonClick } = usePanelActions();
    const { logout } = useAuth();

    const searchClick = () => buttonClick('search');
    const favoriteClick = () => buttonClick('all_favorites');
    const authClick = () => navigate('/auth');

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
                    {id && email ? (
                        <>
                            <Button
                                onClick={logout}
                                variant='pressed'
                                backgroundColor='gray'
                            >
                                <span className={styles.user_email}>{email[0].toUpperCase()}</span>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant='not_pressed'
                                backgroundColor='gray'
                                onClick={authClick}
                            >
                                {logInIconNotPressed}
                            </Button>
                        </>
                    )}
                </div>
            </aside>
        </>
    );
};
