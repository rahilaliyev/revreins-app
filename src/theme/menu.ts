import { alpha, type Components, Fade } from '@mui/material';

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
      slots: {
        transition: Fade,
      },
      slotProps: {
        paper: {
          sx: {
            boxShadow: `0 0 0 1px ${alpha('#000', 0.1)}`,
            borderRadius: '8px',
            background: 'white',
          },
        },
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
