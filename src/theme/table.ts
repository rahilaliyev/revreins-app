import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const tableTheme: Components = {
  MuiTable: {
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
        fontSize: 14,
      },
      head: {
        color: colorPalette.secondary.main,
        opacity: 0.4,
        borderBottom: '1px solid rgba(28, 28, 28, 0.4)',
      },
      body: {
        borderBottom: '1px solid rgba(28, 28, 28, 0.2)',
      },
    },
  },
};
