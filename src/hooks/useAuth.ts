import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth, provider } from '@/firebase';
import { useAppDispatch } from '@/store/hooks';
import { removeUser, setUser } from '@/store/slices/userSlice';

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const registerWithEmail = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                dispatch(setUser({ id: user.uid, email: user.email }));
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const loginWithEmail = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                dispatch(setUser({ id: user.uid, email: user.email }));
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
            })
            .catch(error => {
                console.log(error);
            });
    };

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(userCredential => {
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
