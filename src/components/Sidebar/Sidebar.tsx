import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/Button/Button';
import {
    darkThemeIcon,
    favoritesIconNotPressed,
    favoritesIconPressed,
    ligthThemeIcon,
    logInIconNotPressed,
    routeIcon,
    searchIconNotPressed,
    searchIconPressed,
} from '@/constants/icons';
import { useAuth } from '@/hooks/useAuth';
import { usePanelActions } from '@/hooks/usePanelActions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toogleTheme } from '@/store/slices/appSlice';

import { Icon } from '../ui/Icon/Icon';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const currentPanel = useAppSelector(state => state.panel.currentPanel);
    const theme = useAppSelector(state => state.app.theme);
    const { id, email } = useAppSelector(state => state.user);

    const { buttonClick } = usePanelActions();
    const { logout } = useAuth();

    const searchClick = () => buttonClick('search');
    const favoriteClick = () => buttonClick('all_favorites');
    const authClick = () => navigate('/auth');
    const routesClick = () => buttonClick('routes');

    const themeClick = () => dispatch(toogleTheme());

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
                            variant='not_pressed'
                            backgroundColor={theme === 'light' ? 'gray' : 'light'}
                            onClick={themeClick}
                        >
                            {theme === 'light' ? (
                                <Icon icon={darkThemeIcon} />
                            ) : (
                                <Icon icon={ligthThemeIcon} />
                            )}
                        </Button>
                        <Button onClick={routesClick}>
                            <span className={styles.route}>{routeIcon}</span>
                        </Button>
                        <Button
                            variant={currentPanel === 'search' ? 'pressed' : 'not_pressed'}
                            onClick={searchClick}
                        >
                            {currentPanel === 'search' ? (
                                <Icon icon={searchIconPressed} />
                            ) : (
                                <Icon icon={searchIconNotPressed} />
                            )}
                        </Button>
                        <Button
                            variant={currentPanel === 'all_favorites' ? 'pressed' : 'not_pressed'}
                            backgroundColor='red'
                            onClick={favoriteClick}
                        >
                            {currentPanel === 'all_favorites' ? (
                                <Icon icon={favoritesIconPressed} />
                            ) : (
                                <Icon icon={favoritesIconNotPressed} />
                            )}
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
                                <Icon icon={logInIconNotPressed} />
                            </Button>
                        </>
                    )}
                </div>
            </aside>
        </>
    );
};
