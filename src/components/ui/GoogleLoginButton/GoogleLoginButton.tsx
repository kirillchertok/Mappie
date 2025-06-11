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
    const handleCredentialResponse = useCallback((response: GoogleCredentialResponse) => {
        const decoded: GoogleJwtPayload = jwtDecode(response.credential);
        console.log('Google user:', decoded);
    }, []);

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: '409280008868-edptgf61r3h049368u6e2m2dgj4n1fkq.apps.googleusercontent.com',
            callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(document.getElementById('google-button')!, {
            type: 'standard',
            theme: 'outline',
            size: 'large',
        });
    }, [handleCredentialResponse]);

    return <div id='google-button' />;
};
