import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const stepperTheme: Components = {
  MuiStepLabel: {
    styleOverrides: {
      root: {
        padding: 0,
      },
      label: {
        fontSize: '14px',
        lineHeights: '20px',
        color: colorPalette.text.secondary,
        '&.Mui-completed': {
          color: colorPalette.text.secondary,
        },
        '&.Mui-active': {
          color: colorPalette.text.main,
        },
      },
      iconContainer: {
        paddingRight: 0,
        marginRight: '12px',
      },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: colorPalette.secondary.main,
        '&.Mui-active': {
          color: colorPalette.primary.main,
        },
        '&.Mui-completed': {
          color: colorPalette.secondary.main,
        },
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      lineVertical: {
        borderLeftWidth: '2px',
        borderColor: colorPalette.secondary.bg,
      },
    },
  },
};
