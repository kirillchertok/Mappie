import { jwtDecode } from 'jwt-decode';
import { useCallback, useEffect } from 'react';

interface GoogleJwtPayload {
    email: string;
    name: string;
    picture: string;
}

interface GoogleCredentialResponse {
    credential: string;
}

export const GoogleLoginButton = () => {
    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID_AUTH;

    const handleCredentialResponse = useCallback((response: GoogleCredentialResponse) => {
        const decoded: GoogleJwtPayload = jwtDecode(response.credential);
        console.log('Google user:', decoded);
    }, []);

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(document.getElementById('google-button')!, {
            type: 'standard',
            theme: 'outline',
            size: 'large',
        });
    }, [handleCredentialResponse, CLIENT_ID]);

    return <div id='google-button' />;
};
