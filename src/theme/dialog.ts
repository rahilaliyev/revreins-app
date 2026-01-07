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
        borderRadius: '8px',
      },
      paperWidthMd: {
        width: '862px',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '20px',
        borderBottom: 'none',
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
