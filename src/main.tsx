import 'leaflet/dist/leaflet.css';
import './firebase';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoudary } from '@/components/ErrorBoundary/ErrorBoundary';

import { App } from './App';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ErrorBoudary>
                    <App />
                </ErrorBoudary>
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
