import { colorPalette } from './colorpalette';

import { Calendar2FillIcon } from 'src/assets/icons';

export const datepickerTheme = {
  MuiPickersTextField: {
    styleOverrides: {
      root: {
        '&.Mui-focused .MuiInputAdornment-root svg path': {
          fill: 'black',
        },
        '& .MuiPickersInputBase-root': {
          borderRadius: '8px',
        },
      },
    },
  },
  MuiDesktopDatePicker: {
    defaultProps: {
      slots: {
        openPickerIcon: Calendar2FillIcon,
      },
      slotProps: {
        inputAdornment: {
          sx: {
            '& .MuiIconButton-root svg path': {
              fill: colorPalette.other.icon,
            },
          },
        },
      },
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        border: 'none',
        background: colorPalette.secondary.main,
        margin: '0 4px',
      },
      today: {
        background: `${colorPalette.primary.main} !important`,
        color: colorPalette.text.textInverse,
      },
      dayOutsideMonth: {
        background: 'none !important',
        color: colorPalette.text.third,
      },
    },
  },
  MuiDayCalendar: {
    styleOverrides: {
      weekContainer: {
        margin: '3px 0',
      },
      weekDayLabel: {
        width: '40px',
      },
    },
  },
  MuiDateCalendar: {
    styleOverrides: {
      root: {
        width: '328px',
        padding: '12px',
      },
    },
  },
  MuiPickersLayout: {
    styleOverrides: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiPickersLayout-actionBar': {
          order: 999,
          marginTop: 'auto',
        },
      },
    },
  },
};
