import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth, provider } from '@/firebase';
import { useAppDispatch } from '@/store/hooks';
import { setIsLoading } from '@/store/slices/appSlice';
import { removeUser, setUser } from '@/store/slices/userSlice';

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
                console.log(error);
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
                console.log(error);
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
                console.log(error);
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
                console.log(error);
            });
    };

    return { registerWithEmail, loginWithEmail, logout, loginWithGoogle };
};
