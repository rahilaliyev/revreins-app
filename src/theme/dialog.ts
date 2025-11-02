import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

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
      paperWidthSm: {
        width: '348px',
        maxHeight: '278px !important',
        padding: '8px',
        '& .MuiDialogTitle-root, & .MuiDialogContent-root': {
          padding: '8px',
        },
        '& .MuiDialogActions-root': {
          padding: 0,
        },
      },
      paperWidthMd: {
        width: '418px',
        maxHeight: '190px !important',
        padding: '24px',
        '& .MuiDialogTitle-root': {
          padding: `0 0 16px 0`,
        },
        '& .MuiDialogContent-root': {
          paddingTop: '16px!important',
          paddingBottom: '16px !important',
          padding: 0,
          borderBottom: `1px solid ${colorPalette.secondary.main}`,
          borderTop: `1px solid ${colorPalette.secondary.main}`,
        },
        '& .MuiDialogActions-root': {
          paddingTop: '16px',
        },
      },
      paperWidthLg: {
        width: '630px',
        maxHeight: '390px !important',
        padding: '24px',
        '& .MuiDialogTitle-root': {
          padding: `0 0 16px 0`,
        },
        '& .MuiDialogContent-root': {
          paddingTop: '16px!important',
          paddingBottom: '16px !important',
          padding: 0,
          borderBottom: `1px solid ${colorPalette.secondary.main}`,
          borderTop: `1px solid ${colorPalette.secondary.main}`,
        },
        '& .MuiDialogActions-root': {
          paddingTop: '16px',
        },
      },
    },
  },
};
