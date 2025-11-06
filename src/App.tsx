import type { JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { SnackbarProvider } from 'notistack';

import { ThemeProvider } from '@mui/material';

import RouteComponents from 'src/routes';

import { theme } from './theme';

import 'src/styles/font.css';
import 'src/styles/global.css';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const App = (): JSX.Element => (
  <BrowserRouter>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <RouteComponents />
        <SnackbarProvider />
      </ThemeProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
export default App;
