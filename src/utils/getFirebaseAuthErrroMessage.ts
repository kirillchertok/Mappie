export const getFirebaseAuthErrorMessage = (code: string): string => {
    switch (code) {
        case 'auth/invalid-credential':
            return 'Неверный пароль или email.';
        case 'auth/email-already-in-use':
            return 'Пользователь с таким email уже существует.';
        case 'auth/too-many-requests':
            return 'Слишком много попыток входа. Попробуйте позже.';
        default:
            return 'Произошла неизвестная ошибка. Попробуйте снова.';
    }
};
