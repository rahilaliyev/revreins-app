import type { Components } from '@mui/material';

export const menuTheme: Components = {
  MuiMenu: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
    },
    styleOverrides: {
      root: {
        padding: 8,
        borderRadius: 8,
      },
      paper: {
        width: 280,
        padding: 8,
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        '& .MuiTypography-root': {
          marginLeft: 8,
        },
      },
    },
  },
};
