import {
    arrowRightIcon,
    favoritesIconGray,
    favoritesIconPressed,
    mapPointIcon,
} from '@/constants/icons';
import type { IFavoriteCard } from '@/types/IComponents/IFavoriteCard';
import { generateId } from '@/utils/generateId';

import { Button } from '../ui/Button/Button';
import styles from './FavoriteCard.module.css';

export const FavoriteCard = ({ variant, placeData, ...attrs }: IFavoriteCard) => {
    return (
        <>
            <div
                {...attrs}
                className={`${styles.container} ${styles[`container--${variant}`]}`}
            >
                <div className={`${styles.header} ${styles[`header--${variant}`]}`}>
                    {variant === 'small' ? (
                        <>
                            <div className={styles.img__container}>
                                <img
                                    className={styles.img}
                                    src={placeData.img}
                                    alt={placeData.name}
                                />
                                <div className={`${styles.types} ${styles[`types--${variant}`]}`}>
                                    {placeData.type.map(type => (
                                        <span key={generateId()}>{type}</span>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <img
                                className={styles.img}
                                src={placeData.img}
                                alt={placeData.name}
                            />
                            <div className={`${styles.types} ${styles[`types--${variant}`]}`}>
                                {placeData.type.map(type => (
                                    <span key={generateId()}>{type}</span>
                                ))}
                            </div>
                        </>
                    )}
                    <span className={`${styles.name} ${styles[`name--${variant}`]}`}>
                        {placeData.name}
                    </span>
                </div>
                <span className={`${styles.description} ${styles[`description--${variant}`]}`}>
                    {placeData.description}
                </span>
                <div className={`${styles.buttons} ${styles[`buttons--${variant}`]}`}>
                    {variant === 'small' ? (
                        <>
                            <Button
                                variant='no_diff'
                                size='small'
                                backgroundColor='transparent'
                            >
                                {favoritesIconPressed}
                            </Button>
                            <Button
                                variant='no_diff'
                                size='small'
                                backgroundColor='transparent'
                            >
                                {arrowRightIcon}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant='pressed'
                                size='medium'
                                backgroundColor='red'
                            >
                                {favoritesIconGray} Сохранено
                            </Button>
                            <Button
                                variant='not_pressed'
                                size='medium'
                            >
                                {mapPointIcon} Маршрут
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
