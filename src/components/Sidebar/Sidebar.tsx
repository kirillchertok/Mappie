import { Button } from '@/components/ui/Button/Button';
import { favoritesIconNotPressed, logIn, searchIconNotPressed } from '@/constants/icons';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
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
                        <Button variant='not_pressed'>{searchIconNotPressed}</Button>
                        <Button
                            variant='not_pressed'
                            backgroundColor='red'
                        >
                            {favoritesIconNotPressed}
                        </Button>
                    </div>
                    <Button
                        variant='not_pressed'
                        backgroundColor='gray'
                    >
                        {logIn}
                    </Button>
                </div>
            </aside>
        </>
    );
};
