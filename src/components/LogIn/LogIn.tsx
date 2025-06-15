import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { backIcon } from '@/constants/icons';
import { useAuth } from '@/hooks/useAuth';
import type { ILoginInputs } from '@/types/IComponents/ILogin';

import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import styles from './LogIn.module.css';
import { schema } from './schema';

export const LogIn = () => {
    const navigate = useNavigate();

    const [currentOption, setCurrentOption] = useState<boolean>(true);

    const { loginWithEmail, loginWithGoogle, registerWithEmail } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ILoginInputs>({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const changeState = () => setCurrentOption(prev => !prev);
    const backCLick = () => {
        reset();
        navigate('/');
    };
    const submitForm = (data: ILoginInputs) => {
        if (currentOption) {
            loginWithEmail(data.email, data.password);
        } else {
            registerWithEmail(data.email, data.password);
        }
        reset();
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.back}>
                    <Button
                        variant='no_diff'
                        size='small'
                        backgroundColor='transparent'
                        onClick={backCLick}
                    >
                        <span className={styles.back__icon}>{backIcon}</span>
                    </Button>
                </div>
                <h1 className={styles.header}>
                    {currentOption ? 'Вход в аккаунт' : 'Регистрация аккаунта'}
                </h1>
                <div className={styles.selection}>
                    <Button
                        variant={currentOption ? 'pressed' : 'not_pressed'}
                        onClick={changeState}
                        backgroundColor='red'
                        size='medium'
                    >
                        Вход
                    </Button>
                    ИЛИ
                    <Button
                        variant={!currentOption ? 'pressed' : 'not_pressed'}
                        onClick={changeState}
                        backgroundColor='red'
                        size='medium'
                    >
                        Регистрация
                    </Button>
                </div>
                <form
                    className={`${styles.main} ${
                        styles[`main--${currentOption ? 'login' : 'reg'}`]
                    }`}
                    onSubmit={handleSubmit(submitForm)}
                >
                    <Input
                        type='text'
                        label='Почта'
                        placeholder='example@gmail.com'
                        sizeType='large'
                        {...register('email')}
                    />
                    {errors.email?.message && (
                        <span className={styles.errors}>{errors.email?.message}</span>
                    )}
                    <Input
                        type='password'
                        label='Пароль'
                        placeholder='password'
                        sizeType='large'
                        {...register('password')}
                    />
                    {errors.password?.message && (
                        <span className={styles.errors}>{errors.password?.message}</span>
                    )}
                    <Button
                        type='submit'
                        variant='not_pressed'
                        size='large'
                        backgroundColor='red'
                    >
                        {currentOption ? 'Войти' : 'Зарегестрироваться'}
                    </Button>
                </form>
                <Button
                    variant='not_pressed'
                    size='large'
                    onClick={loginWithGoogle}
                >
                    Вход через Google
                </Button>
            </div>
        </>
    );
};
