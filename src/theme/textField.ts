import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const textFieldTheme: Components = {
  MuiInputBase: {
    variants: [
      {
        props: { size: 'small' },
        style: { height: '40px', padding: '10px 12px', fontSize: '14px', lineHeight: '20px' },
      },
      {
        props: { size: 'medium' },
        style: { height: '48px', padding: '11px 16px', fontSize: '16px', lineHeight: '26px' },
      },
    ],
    styleOverrides: {
      root: {
        '& legend': {
          width: '0',
        },
        '& fieldset': {
          transition: 'border-color 0.5s ease',
          borderColor: colorPalette.other.stroke,
          borderRadius: '8px',
        },
        '&.Mui-error': {
          color: colorPalette.error.main,
          '& fieldset': {
            borderWidth: '2px',
          },
        },
      },
      input: {
        padding: '0 !important',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      InputLabelProps: {
        shrink: true,
      },
    },
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
        '& fieldset': {
          borderColor: colorPalette.secondary.main,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
        marginBottom: '6px',
        position: 'unset',
        transform: 'none',
        color: colorPalette.text.main,
        overflow: 'unset',
        whiteSpace: 'wrap',
        textAlign: 'left',
        '&.Mui-focused': {
          color: colorPalette.text.main,
        },
        '&.Mui-error': {
          color: colorPalette.text.main,
        },
      },
      filled: {
        transform: 'translate(12px, 12px) scale(1)',
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: colorPalette.text.secondary,
        margin: 0,
        marginTop: '12px',
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        marginBottom: '8px !important',
      },
    },
  },
};
