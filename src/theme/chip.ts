import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const chipTheme: Components = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: 'Gilroy, sans-serif',
        backgroundColor: colorPalette.secondary.light,
        color: colorPalette.secondary.dark,
      },
      colorSuccess: {
        backgroundColor: colorPalette.green.light,
        color: colorPalette.green.main,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.green.main,
        },
      },
      colorError: {
        backgroundColor: colorPalette.error.dark,
        color: colorPalette.error.dark,
        '& .MuiBox-root': {
          backgroundColor: colorPalette.error.dark,
        },
      },
      colorInfo: {
        color: colorPalette.blue.light,

        '& .MuiBox-root': {
          backgroundColor: colorPalette.blue.light,
        },
      },
      sizeSmall: {
        fontSize: '12px',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: 'none',

        '& .MuiChip-label': {
          paddingLeft: 0,
        },
      },
    },
  },
};
