import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const alertTheme: Components = {
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        color: colorPalette.info.main,
        padding: '16px',
      },
      icon: {
        padding: 0,
      },
      message: {
        padding: 0,
      },
    },
  },
};
