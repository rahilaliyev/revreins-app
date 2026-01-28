import type { Components } from '@mui/material';

export const accordionTheme: Components = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        backgroundColor: 'inherit',
        boxShadow: 'none',

        '&.Mui-expanded': {
          margin: 0,
        },

        '&::before': {
          display: 'none',
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 0,
        alignItems: 'flex-start',
      },
      content: { margin: 0 },
    },
  },
};
