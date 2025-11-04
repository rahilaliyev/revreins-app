import type { JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { ThemeProvider } from '@mui/material';

import { theme } from './theme';

import RouteComponents from 'src/routes';

import 'src/styles/font.css';
import 'src/styles/global.css';

const App = (): JSX.Element => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RouteComponents />
      <SnackbarProvider />
    </ThemeProvider>
  </BrowserRouter>
);
export default App;
