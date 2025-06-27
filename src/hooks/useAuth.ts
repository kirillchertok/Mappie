import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';

import { auth, provider } from '@/firebase';
import { useAppDispatch } from '@/store/hooks';
import { setIsLoading } from '@/store/slices/appSlice';
import { removeUser } from '@/store/slices/userSlice';

import { useLoginStatus } from './useLoginStatus';

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { successLogin, failLogin } = useLoginStatus();

    const registerWithEmail = (email: string, password: string) => {
        dispatch(setIsLoading(true));
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                successLogin(userCredential);
            })
            .catch(error => {
                failLogin(error);
            });
    };

    const loginWithEmail = (email: string, password: string) => {
        dispatch(setIsLoading(true));
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                successLogin(userCredential);
            })
            .catch(error => {
                failLogin(error);
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
                failLogin(error);
            });
    };

    const loginWithGoogle = () => {
        dispatch(setIsLoading(true));
        signInWithPopup(auth, provider)
            .then(userCredential => {
                successLogin(userCredential);
            })
            .catch(error => {
                failLogin(error);
            });
    };

    return { registerWithEmail, loginWithEmail, logout, loginWithGoogle };
};
