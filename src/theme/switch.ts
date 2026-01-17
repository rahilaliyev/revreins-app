import type { Components } from '@mui/material/styles';

import { colorPalette } from './colorpalette';

export const switchTheme: Components = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        padding: 0,
        width: 52,
        height: 28,

        /* MEDIUM (default) */
        '& .MuiSwitch-switchBase': {
          padding: 2,
        },

        '& .MuiSwitch-thumb': {
          width: 24,
          height: 24,
        },

        '& .MuiSwitch-track': {
          borderRadius: 14,
        },

        /* MEDIUM ICON */
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 16,
          height: 16,
          left: 7,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '16px 16px',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 9'><path d='M4.5 6.4L10.7 0.3L11.6 1.2L4.5 8.3L0.3 4.1L1.2 3.1L4.5 6.4Z' fill='white'/></svg>")`,
        },

        /* SMALL */
        '&.MuiSwitch-sizeSmall': {
          height: 20,
          width: 36,

          '& .MuiSwitch-switchBase': {
            padding: 2,
          },

          '& .MuiSwitch-thumb': {
            width: 16,
            height: 16,
          },

          '& .MuiSwitch-track': {
            borderRadius: 10,
          },

          /* SMALL ICON OVERRIDE */
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track::before': {
            width: 12,
            height: 12,
            left: 4,
            backgroundSize: '12px 12px',
          },
        },
      },

      switchBase: {
        '&.Mui-checked': {
          transform: 'translateX(24px)',
        },

        '&.MuiSwitch-sizeSmall.Mui-checked': {
          transform: 'translateX(14px)',
        },
      },

      track: {
        backgroundColor: colorPalette.other.stroke,
        opacity: '1 !important',

        '&::before, &::after': {
          content: 'none',
        },
      },

      thumb: {
        background: colorPalette.inverted.invertedBg,
        boxShadow: '0 4px 30px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
