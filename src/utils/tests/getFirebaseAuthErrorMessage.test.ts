import { getFirebaseAuthErrorMessage } from '../getFirebaseAuthErrorMessage';

describe('getFirebaseAuthErrorMessage', () => {
    it('Правильное значение для auth/invalid-credential', () => {
        expect(getFirebaseAuthErrorMessage('auth/invalid-credential')).toBe(
            'Неверный пароль или email.'
        );
    });

    it('Правильное значение для auth/email-already-in-use', () => {
        expect(getFirebaseAuthErrorMessage('auth/email-already-in-use')).toBe(
            'Пользователь с таким email уже существует.'
        );
    });

    it('Правильное значение для auth/too-many-requests', () => {
        expect(getFirebaseAuthErrorMessage('auth/too-many-requests')).toBe(
            'Слишком много попыток входа. Попробуйте позже.'
        );
    });

    it('Правильное значение по умолчанию для неизвестного кода', () => {
        expect(getFirebaseAuthErrorMessage('unknown-code')).toBe(
            'Произошла неизвестная ошибка. Попробуйте снова.'
        );
    });
});
