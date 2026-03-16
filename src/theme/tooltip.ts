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
        transform: 'rotate(0deg)',
      },
      popper: {
        '&[data-popper-placement*="bottom-start"] .MuiTooltip-arrow': {
          left: '4px !important',
          borderWidth: '0 15px 8px 0',
          borderColor: `transparent transparent ${colorPalette.other.black} transparent`,
        },

        '&[data-popper-placement*="top-start"] .MuiTooltip-arrow': {
          borderWidth: '8px 15px 0 0',
          borderColor: `${colorPalette.other.black} transparent transparent transparent`,
        },

        '&[data-popper-placement*="bottom"] .MuiTooltip-arrow': {
          borderWidth: '0 0 8px 15px',
          borderColor: `transparent transparent ${colorPalette.other.black} transparent`,
        },
      },
    },
  },
};
