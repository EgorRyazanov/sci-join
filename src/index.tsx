import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import 'app/styles/index.scss';
import App from './app/App';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <CssBaseline />
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
