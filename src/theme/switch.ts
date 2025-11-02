import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

// TODO: Complete style of switch input
export const switchTheme: Components = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 44,
        height: 30,
        padding: 8,
      },
      switchBase: {
        left: 7,
        top: 7,

        '&.Mui-checked': {
          width: 44,
          height: 30,
          padding: 8,
          color: '#fff',
          '&.Mui-checked': {
            backgroundColor: 'transparent',
            top: 0,
            transform: 'translateX(0px)',
          },
          '& .MuiSwitch-thumb': {
            width: '9px !important',
            height: '9px !important',
          },
          '& + .MuiSwitch-track': {
            backgroundColor: colorPalette.common.black,
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: '8px !important',
        height: '8px !important',
        boxShadow: 'none',
        border: '1px solid #000',
      },
      track: {
        borderRadius: 26 / 2,
        backgroundColor: colorPalette.common.white,
        opacity: 1,
        transition: 'background-color 0.3s',
        border: '1px solid #000',
      },
    },
  },
};
