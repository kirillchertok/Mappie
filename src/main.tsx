import 'leaflet/dist/leaflet.css';
import './firebase';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ErrorBoudary } from '@/components/ErrorBoundary/ErrorBoundary';

import { App } from './App';
import { Loader } from './components/Loader/Loader';
import { persistor, store } from './store/store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}
                    loading={<Loader />}
                >
                    <ErrorBoudary>
                        <App />
                    </ErrorBoudary>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
