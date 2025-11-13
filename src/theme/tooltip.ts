import { type Components, Fade } from '@mui/material';

import { colorPalette } from './colorpalette';

export const tooltipTheme: Components = {
  MuiTooltip: {
    defaultProps: {
      TransitionComponent: Fade,
      TransitionProps: { timeout: 500 },
      arrow: true,
      slotProps: {
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-6, 0],
              },
            },
          ],
        },
      },
    },
    styleOverrides: {
      tooltip: {
        fontFamily: 'Noto Sans, sans-serif',
        padding: '8px 12px',
        backgroundColor: colorPalette.other.black,
        borderRadius: '4px',
      },
      arrow: {
        color: colorPalette.other.black,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 15px 8px 0px',
        borderColor: `transparent transparent ${colorPalette.other.black} transparent`,
        transform: 'rotate(0deg)',
        left: '4px !important',
      },
    },
  },
};
