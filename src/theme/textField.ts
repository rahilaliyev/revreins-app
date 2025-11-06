import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const textFieldTheme: Components = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontFamily: 'Noto Sans, sans-serif',
        width: '100%',

        '&.Mui-disabled': {
          backgroundColor: '#eee',
        },

        '& legend': {
          width: '0',
        },
      },
      input: {
        padding: '4px 12px !important',
        height: '36px',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      InputLabelProps: {
        shrink: false,
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
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        marginTop: '0 !important',
        '& .MuiTypography-root': {
          color: `${colorPalette.primary.main} !important`,
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: colorPalette.secondary.main,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        width: '100%',
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
        color: colorPalette.primary.main,
        overflow: 'unset',
        whiteSpace: 'wrap',
        textAlign: 'left',
      },
      filled: {
        transform: 'translate(12px, 12px) scale(1)',
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontFamily: 'Noto Sans, sans-serif',
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        '&::before': {
          border: 'none',
        },
      },
      input: {
        padding: 0,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
      },
    },
  },
};
