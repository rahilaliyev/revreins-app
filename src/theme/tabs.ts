import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const tabTheme: Components = {
  MuiTabs: {
    styleOverrides: {
      root: {
        display: 'inline-flex',
        borderRadius: '24px',
        background: colorPalette.secondary.main,
        minHeight: '36px',
        padding: '3.5px 4px',
      },
      indicator: {
        display: 'none',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        padding: '8px 16px',
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '20px',
        minHeight: '29px',
        color: colorPalette.text.main,
        borderRadius: '999px',
        '&.Mui-selected': {
          borderRadius: '999px',
          color: colorPalette.text.main,
          backgroundColor: 'white',
        },
      },
      icon: {
        marginLeft: '8px',
      },
    },
  },
};
