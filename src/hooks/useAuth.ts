import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth, provider } from '@/firebase';
import { useAppDispatch } from '@/store/hooks';
import { setAuthError, setIsLoading } from '@/store/slices/appSlice';
import { removeUser, setUser } from '@/store/slices/userSlice';
import { getFirebaseAuthErrorMessage } from '@/utils/getFirebaseAuthErrorMessage';

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const registerWithEmail = (email: string, password: string) => {
        dispatch(setIsLoading(true));
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                dispatch(setIsLoading(false));
                const user = userCredential.user;
                dispatch(setUser({ id: user.uid, email: user.email }));
                navigate('/');
            })
            .catch(error => {
                dispatch(setIsLoading(false));
                const message = getFirebaseAuthErrorMessage(error.code);
                dispatch(setAuthError(message));
            });
    };

    const loginWithEmail = (email: string, password: string) => {
        dispatch(setIsLoading(true));
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                dispatch(setIsLoading(false));
                const user = userCredential.user;
                dispatch(setUser({ id: user.uid, email: user.email }));
                navigate('/');
            })
            .catch(error => {
                dispatch(setIsLoading(false));
                const message = getFirebaseAuthErrorMessage(error.code);
                dispatch(setAuthError(message));
            });
    };

    const logout = () => {
        dispatch(setIsLoading(true));
        signOut(auth)
            .then(() => {
                dispatch(setIsLoading(false));
                dispatch(removeUser());
            })
            .catch(error => {
                dispatch(setIsLoading(false));
                const message = getFirebaseAuthErrorMessage(error.code);
                dispatch(setAuthError(message));
            });
    };

    const loginWithGoogle = () => {
        dispatch(setIsLoading(true));
        signInWithPopup(auth, provider)
            .then(userCredential => {
                dispatch(setIsLoading(false));
                const user = userCredential.user;
                dispatch(setUser({ id: user.uid, email: user.email }));
                navigate('/');
            })
            .catch(error => {
                dispatch(setIsLoading(false));
                const message = getFirebaseAuthErrorMessage(error.code);
                dispatch(setAuthError(message));
            });
    };

    return { registerWithEmail, loginWithEmail, logout, loginWithGoogle };
};
