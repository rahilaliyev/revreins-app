import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const chipTheme: Components = {
  MuiChip: {
    variants: [
      {
        props: { variant: 'outlined' },
        style: {
          backgroundColor: colorPalette.neutral.bg,
          border: `1px solid ${colorPalette.other.stroke}`,
          color: colorPalette.text.main,
        },
      },
      {
        props: { variant: 'outlined', color: 'success' },
        style: {
          backgroundColor: colorPalette.success.bg,
          border: `1px solid ${colorPalette.success.bg}`,
          color: colorPalette.success.main,
        },
      },
      {
        props: { variant: 'outlined', color: 'error' },
        style: {
          backgroundColor: colorPalette.error.bg,
          border: `1px solid ${colorPalette.error.bg}`,
          color: colorPalette.error.main,
        },
      },
      {
        props: { size: 'small' },
        style: {
          padding: '2px 8px',
          fontSize: '12px',
          lineHeight: '16px',
        },
      },
      {
        props: { size: 'medium' },
        style: {
          padding: '2px 8px',
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
    ],
    defaultProps: {
      variant: 'filled',
      size: 'small',
    },
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
        padding: 0,
      },
      label: {
        paddingRight: 0,
      },
      sizeSmall: {
        fontSize: '12px',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: 'none',
      },
      deleteIcon: {
        marginLeft: 4,
      },
    },
  },
};
