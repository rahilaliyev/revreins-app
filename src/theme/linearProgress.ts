import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const linearProgress: Components = {
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        height: 4,
        borderRadius: 30,
      },
      bar: {
        borderRadius: 30,
      },
    },
    variants: [
      {
        props: { color: 'inherit' },
        style: {
          backgroundColor: colorPalette.background.main,
          '&.MuiLinearProgress-root::before': { backgroundColor: colorPalette.background.main },
          '& span': { backgroundColor: colorPalette.accent.main },
        },
      },
    ],
  },
};
