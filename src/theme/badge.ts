import type { Components } from '@mui/material';

export const badgeTheme: Components = {
  MuiBadge: {
    styleOverrides: {
      dot: {
        minWidth: '5px',
        height: '5px',
        right: '2px',
      },
    },
  },
};
