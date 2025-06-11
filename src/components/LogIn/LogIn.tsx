import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

import { Button } from '../ui/Button/Button';
import { GoogleLoginButton } from '../ui/GoogleLoginButton/GoogleLoginButton';
import { Input } from '../ui/Input/Input';
import styles from './LogIn.module.css';

export const LogIn = () => {
    const [currentOption, setCurrentOption] = useState<boolean>(true);

    const changeState = () => setCurrentOption(prev => !prev);

    const handleLogin = (token: string) => {
        const decoded = jwtDecode(token);
        console.log('Пользователь:', decoded);
    };

    return (
        <>
            <div className={styles.container}>
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
                <div
                    className={`${styles.main} ${
                        styles[`main--${currentOption ? 'login' : 'reg'}`]
                    }`}
                >
                    <Input
                        type='text'
                        label='Почта'
                        placeholder='example@gmail.com'
                        sizeType='large'
                    />
                    <Input
                        type='text'
                        label='Пароль'
                        placeholder='password'
                        sizeType='large'
                    />
                    {!currentOption && (
                        <Input
                            type='file'
                            label='Ваше фото'
                            sizeType='large'
                        />
                    )}
                    <Button
                        variant='not_pressed'
                        size='large'
                    >
                        {currentOption ? 'Войти' : 'Зарегестрироваться'}
                    </Button>
                    <GoogleLoginButton onLoginSuccess={handleLogin} />
                </div>
            </div>
        </>
    );
};
