import type { Components } from '@mui/material';

export const modal: Components = {
  MuiDialog: {
    styleOverrides: {
      root: {
        width: '100%',
        height: '100%',
      },
      paper: {
        padding: '40px !important',
      },

      paperWidthMd: {
        width: '864px',
        padding: '24px',
      },
      paperWidthSm: {
        width: '832px !important',
      },
      paperWidthLg: {
        width: '975px',
        padding: '24px',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: '16px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 0,
        maxHeight: 'calc(100vh - 200px)',
        overflow: 'auto',
        marginRight: '-10px',
        paddingRight: '10px',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 0,
        paddingTop: '20px',
      },
    },
  },
};
