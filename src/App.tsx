import type { JSX } from 'react';

import { Button, ThemeProvider } from '@mui/material';

import { theme } from './theme';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Button />
  </ThemeProvider>
);
export default App;
