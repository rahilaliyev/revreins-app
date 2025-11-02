import { createTheme } from '@mui/material/styles';

import { accordionTheme } from './accordion';
import { buttonTheme } from './button';
import { chipTheme } from './chip';
import { colorPalette } from './colorpalette';
import { dataGridTheme } from './dataGrid';
import { datepickerTheme } from './datepicker';
import { dialogTheme } from './dialog';
import { iconButtonTheme } from './iconButton';
import { listTheme } from './list';
import { menuTheme } from './menu';
import { modal } from './modal';
import { selectTheme } from './select';
import { stackTheme } from './stack';
import { switchTheme } from './switch';
import { tableTheme } from './table';
import { textFieldTheme } from './textField';
import { tooltipTheme } from './tooltip';
import { typographyOptions, typographyTheme } from './typography';

// A custom theme for this app.
export const theme = createTheme({
  spacing: 4,
  palette: { ...colorPalette },
  typography: { ...typographyOptions },
  components: {
    ...accordionTheme,
    ...buttonTheme,
    ...chipTheme,
    ...dataGridTheme,
    ...datepickerTheme,
    ...dialogTheme,
    ...listTheme,
    ...menuTheme,
    ...iconButtonTheme,
    ...selectTheme,
    ...stackTheme,
    ...switchTheme,
    ...tableTheme,
    ...textFieldTheme,
    ...tooltipTheme,
    ...typographyTheme,
  },
});

export const modalTheme = createTheme({
  spacing: 4,
  palette: { ...colorPalette },
  typography: { ...typographyOptions },
  components: {
    ...modal,
    ...accordionTheme,
    ...buttonTheme,
    ...chipTheme,
    ...dataGridTheme,
    ...datepickerTheme,
    ...listTheme,
    ...menuTheme,
    ...iconButtonTheme,
    ...selectTheme,
    ...stackTheme,
    ...switchTheme,
    ...tableTheme,
    ...textFieldTheme,
    ...tooltipTheme,
    ...typographyTheme,
  },
});
