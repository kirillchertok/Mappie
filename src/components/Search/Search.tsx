import { searchIconField, searchIconNotPressed } from '@/constants/icons';
import { PLACE_TYPES } from '@/constants/placeTypes';
import { generateId } from '@/utils/generateId';

import { TypeCard } from '../TypeCard/TypeCard';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import styles from './Search.module.css';

export const Search = () => {
    return (
        <>
            <Input
                placeholder='Место, адрес'
                sizeType='large'
                icon={searchIconField}
            />
            <div className={styles.container}>
                <div>
                    <h1>Искать: </h1>
                    <div className={styles.types}>
                        {PLACE_TYPES.map(type => (
                            <TypeCard
                                key={generateId()}
                                type={type}
                                isSelected={true}
                            />
                        ))}
                    </div>
                    <h1>В радиусе</h1>
                    <Input
                        type='number'
                        min='0'
                        label='км'
                        placeholder='45'
                    />
                </div>
                <Button variant='not_pressed'>{searchIconNotPressed}</Button>
            </div>
        </>
    );
};
