import type { JSX } from 'react';

import { Button, ThemeProvider, Typography } from '@mui/material';

import { theme } from './theme';

import 'src/styles/font.css';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Button>Test</Button>
    <Typography variant="h1">Hello World</Typography>
  </ThemeProvider>
);
export default App;
