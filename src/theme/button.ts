import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const buttonTheme: Components = {
  MuiButton: {
    variants: [
      {
        props: { size: 'small' },
        style: {
          height: '32px',
          padding: '6px 12px',
          fontSize: '13px',
          lineHeight: '20px',
          fontWeight: 500,
          borderRadius: '4px',
        },
      },
      {
        props: { size: 'medium' },
        style: {
          height: '40px',
          padding: '9px 14px',
          fontSize: '14px',
          lineHeight: '22px',
          fontWeight: 500,
        },
      },
      {
        props: { size: 'large' },
        style: {
          height: '48px',
          padding: '8px 16px',
          fontSize: '16px',
          lineHeight: '25px',
          fontWeight: 500,
        },
      },
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          backgroundColor: colorPalette.primary.main,
          color: colorPalette.text.textInverse,
          '&:hover': {
            backgroundColor: colorPalette.primary.hover,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          backgroundColor: colorPalette.secondary.main,
          color: colorPalette.text.main,
          '&:hover': {
            backgroundColor: colorPalette.secondary.hover,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'inherit' },
        style: {
          backgroundColor: colorPalette.accent.main,
          color: colorPalette.text.main,
          '&:hover': {
            backgroundColor: colorPalette.accent.hover,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'error' },
        style: {
          backgroundColor: colorPalette.error.main,
          color: colorPalette.text.textInverse,
          '&:hover': {
            backgroundColor: colorPalette.error.hover,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'success' },
        style: {
          backgroundColor: colorPalette.success.main,
          color: colorPalette.text.textInverse,
          '&:hover': {
            backgroundColor: colorPalette.success.hover,
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          border: `1px solid ${colorPalette.primary.bg}`,
          backgroundColor: 'transparent',
          color: colorPalette.primary.main,
          '&:hover': {
            border: `1px solid ${colorPalette.primary.bg}`,
            backgroundColor: colorPalette.primary.bg,
            color: colorPalette.primary.main,
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          border: `1px solid ${colorPalette.other.stroke}`,
          backgroundColor: 'transparent',
          color: colorPalette.text.main,
          '&:hover': {
            border: `1px solid ${colorPalette.secondary.bg}`,
            backgroundColor: colorPalette.secondary.bg,
            color: colorPalette.text.main,
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'inherit' },
        style: {
          border: `1px solid ${colorPalette.accent.bg}`,
          backgroundColor: 'transparent',
          color: colorPalette.accent.main,
          '&:hover': {
            border: `1px solid ${colorPalette.accent.bg}`,
            backgroundColor: colorPalette.accent.bg,
            color: colorPalette.accent.main,
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'error' },
        style: {
          border: `1px solid ${colorPalette.error.bg}`,
          backgroundColor: 'transparent',
          color: colorPalette.error.main,
          '&:hover': {
            border: `1px solid ${colorPalette.error.bg}`,
            backgroundColor: colorPalette.error.bg,
            color: colorPalette.error.main,
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'success' },
        style: {
          border: `1px solid ${colorPalette.success.bg}`,
          backgroundColor: 'transparent',
          color: colorPalette.success.main,
          '&:hover': {
            border: `1px solid ${colorPalette.success.bg}`,
            backgroundColor: colorPalette.success.bg,
            color: colorPalette.success.main,
          },
        },
      },
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          backgroundColor: 'transparent',
          color: colorPalette.primary.main,
          '&:hover': {
            backgroundColor: colorPalette.primary.bg,
            color: colorPalette.primary.main,
          },
        },
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          backgroundColor: 'transparent',
          color: colorPalette.text.main,
          '&:hover': {
            backgroundColor: colorPalette.secondary.bg,
            color: colorPalette.text.main,
          },
        },
      },
      {
        props: { variant: 'text', color: 'inherit' },
        style: {
          backgroundColor: 'transparent',
          color: colorPalette.accent.main,
          '&:hover': {
            backgroundColor: colorPalette.accent.bg,
            color: colorPalette.accent.main,
          },
        },
      },
      {
        props: { variant: 'text', color: 'error' },
        style: {
          backgroundColor: 'transparent',
          color: colorPalette.error.main,
          '&:hover': {
            backgroundColor: colorPalette.error.bg,
            color: colorPalette.error.main,
          },
        },
      },
      {
        props: { variant: 'text', color: 'success' },
        style: {
          backgroundColor: 'transparent',
          color: colorPalette.success.main,
          '&:hover': {
            backgroundColor: colorPalette.success.bg,
            color: colorPalette.success.main,
          },
        },
      },
      {
        props: { variant: 'contained', disabled: true },
        style: {
          backgroundColor: colorPalette.secondary.main,
          color: colorPalette.text.disable,
        },
      },
      {
        props: { variant: 'outlined', disabled: true },
        style: {
          border: `1px solid ${colorPalette.secondary.main}`,
          backgroundColor: 'transparent',
          color: colorPalette.text.disable,
        },
      },
      {
        props: { variant: 'text', disabled: true },
        style: {
          backgroundColor: 'transparent',
          color: colorPalette.text.disable,
        },
      },
    ],
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
      disableFocusRipple: true,
    },
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
        borderRadius: '8px',
        textTransform: 'unset',
        minWidth: 'auto',
        whiteSpace: 'nowrap',
        transition: '0.5s',
      },
    },
  },
};
