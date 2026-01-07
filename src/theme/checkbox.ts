import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const checkboxTheme: Components = {
  MuiCheckbox: {
    variants: [
      {
        props: { size: 'small' },
        style: {
          '& .MuiSvgIcon-root': {
            fontSize: '16px',
          },
        },
      },
      {
        props: { size: 'medium' },
        style: {
          '& .MuiSvgIcon-root': {
            fontSize: '20px',
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        padding: 0,
        borderRadius: '4px',
        transition: 'all 0.5s',
        marginRight: '8px',
        border: `1px solid ${colorPalette.other.stroke}`,
        '&:hover': {
          backgroundColor: colorPalette.secondary.hover,
        },
        '&.Mui-checked': {
          '&:hover': {
            backgroundColor: colorPalette.primary.bg,
          },
        },
      },
    },
    defaultProps: {
      size: 'medium',
    },
  },
};
