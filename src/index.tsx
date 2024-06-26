import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import App from './app/App';
import 'react-toastify/dist/ReactToastify.css';
import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение');
}

const root = createRoot(container);

root.render(
    <>
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <CssBaseline />
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
        <ToastContainer limit={3} position="bottom-center" autoClose={2000} closeOnClick />
    </>,
);
