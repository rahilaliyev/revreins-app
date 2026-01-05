import type { Components } from '@mui/material';

export const dialogTheme: Components = {
  MuiModal: {
    styleOverrides: {
      root: {
        '&.MuiDialog-root': {
          maxWidth: '100%',
          height: '100%',
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        width: '100%',
        height: '100%',
      },
      paper: {
        width: '600px',
        borderRadius: '8px',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '20px',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: '0',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: '20px',
      },
    },
  },
};
