import type { JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type CustomContentProps, SnackbarProvider } from 'notistack';

import { ThemeProvider } from '@mui/material';

import RouteComponents from 'src/routes';

import { CustomSnackbar } from './components';
import { theme } from './theme';

import 'src/styles/font.css';
import 'src/styles/global.css';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
      retryDelay: (failureCount): number => failureCount * 1000,
    },
  },
});

const renderSnackbar = (props: CustomContentProps): JSX.Element => <CustomSnackbar {...props} />;

const App = (): JSX.Element => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <ThemeProvider theme={theme}>
          <RouteComponents />
          <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            Components={{
              default: renderSnackbar,
              success: renderSnackbar,
              error: renderSnackbar,
              warning: renderSnackbar,
            }}
          />
        </ThemeProvider>
      </GoogleOAuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>
);
export default App;
