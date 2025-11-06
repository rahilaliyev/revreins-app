import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const selectTheme: Components = {
  MuiSelect: {
    defaultProps: {
      displayEmpty: true,
      fullWidth: true,
      variant: 'outlined',
    },
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
        backgroundColor: 'transparent',
        border: 'none',

        '&::before': {
          display: 'none',
        },

        '&.Mui-focused::after': {
          display: 'none',
        },
      },
      standard: {
        border: 'none',
        outline: 'none',
      },
      outlined: {
        height: '36px',
        padding: '4px 12px !important',
      },
      select: {
        color: colorPalette.primary.main,
        display: 'flex',
        alignItems: 'center',
        padding: '0 !important',
        marginRight: '20px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
        color: colorPalette.primary.main,
      },
    },
  },
};
