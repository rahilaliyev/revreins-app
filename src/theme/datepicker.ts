import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const datepickerTheme: Components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        '& .MuiPickersLayout-contentWrapper *': {
          fontFamily: 'Noto Sans, sans-serif',
        },
        '& .MuiPickersYear-yearButton.Mui-selected, & .MuiPickersDay-root.Mui-selected': {
          color: colorPalette.secondary.main,
        },
        '& .MuiDayCalendar-weekDayLabel': {
          color: colorPalette.secondary.main,
        },
      },
    },
  },
};
