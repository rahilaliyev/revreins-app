import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const buttonTheme: Components = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'outlined', size: 'small' },
        style: {
          height: '40px',
          padding: '4px 12px',
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
      {
        props: { variant: 'outlined', size: 'medium' },
        style: {
          height: '40px',
          padding: '8px 16px',
          fontSize: '18px',
          lineHeight: '24px',
        },
      },
      {
        props: { variant: 'outlined', size: 'large' },
        style: {
          height: '40px',
          padding: '8px 16px',
          fontSize: '18px',
          lineHeight: '24px',
        },
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          color: colorPalette.common.black,
          boxShadow: 'none',
        },
      },
    ],
    defaultProps: {
      variant: 'contained',
      fullWidth: true,
      disableElevation: true,
      disableFocusRipple: true,
    },
    styleOverrides: {
      root: {
        fontFamily: 'Gilroy, sans-serif',
        borderRadius: 4,
        textTransform: 'unset',
        minWidth: 'auto',
        whiteSpace: 'nowrap',

        '&.MuiButton-sizeSmall': {
          height: 26,
          fontSize: '12px',
          lineHeight: '18px',
          borderRadius: 4,
        },

        '&.MuiButton-sizeMedium': {
          height: 44,
          padding: '8px 8px',
          fontSize: '14px',
          lineHeight: '20px',
          borderRadius: 8,
        },

        '&.MuiButton-sizeLarge': {
          height: 56,
          padding: '14px 24px',
          borderRadius: 10,
        },

        '& .MuiChip-root': {
          width: 18,
          height: 18,
          borderRadius: '50%',
          marginLeft: 8,
        },

        '& .MuiChip-label': {
          padding: 0,
        },
      },
      outlined: {
        fontSize: '14px !important',
        lineHeight: '20px !important',
        transition: '0.25s',

        '&:hover': {
          background: '#000',
          color: '#fff',
        },
      },
      contained: {
        color: colorPalette.common.white,
      },
      text: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      sizeSmall: {
        height: 38,
        fontSize: 14,
      },
      sizeMedium: {
        height: 44,
        fontSize: 16,
      },
      sizeLarge: {
        height: 52,
        fontSize: 16,
      },
    },
  },
};
