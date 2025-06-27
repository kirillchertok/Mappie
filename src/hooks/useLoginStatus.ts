import { FirebaseError } from 'firebase/app';
import type { UserCredential } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/store/hooks';
import { setAuthError, setIsLoading } from '@/store/slices/appSlice';
import { setUser } from '@/store/slices/userSlice';
import { getFirebaseAuthErrorMessage } from '@/utils/getFirebaseAuthErrorMessage';

export const useLoginStatus = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const successLogin = (userCredential: UserCredential) => {
        dispatch(setIsLoading(false));
        const user = userCredential.user;
        dispatch(setUser({ id: user.uid, email: user.email }));
        navigate('/');
    };

    const failLogin = (error: unknown) => {
        dispatch(setIsLoading(false));
        if (error instanceof FirebaseError) {
            const message = getFirebaseAuthErrorMessage(error.code);
            dispatch(setAuthError(message));
        } else {
            dispatch(setAuthError('Неизвестная ошибка'));
        }
    };

    return { successLogin, failLogin };
};
