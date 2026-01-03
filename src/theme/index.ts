import type { TypographyVariantsOptions } from '@mui/material';
import { createTheme, type PaletteOptions } from '@mui/material/styles';

import { accordionTheme } from './accordion';
import { buttonTheme } from './button';
import { chipTheme } from './chip';
import { colorPalette } from './colorpalette';
import { dataGridTheme } from './dataGrid';
import { datepickerTheme } from './datepicker';
import { dialogTheme } from './dialog';
import { iconButtonTheme } from './iconButton';
import { linearProgress } from './linearProgress';
import { listTheme } from './list';
import { menuTheme } from './menu';
import { selectTheme } from './select';
import { stackTheme } from './stack';
import { stepperTheme } from './stepper';
import { switchTheme } from './switch';
import { tableTheme } from './table';
import { textFieldTheme } from './textField';
import { tooltipTheme } from './tooltip';
import { typographyOptions, typographyTheme } from './typography';

// A custom theme for this app.
export const theme = createTheme({
  spacing: 4,
  palette: colorPalette as PaletteOptions,
  typography: { ...typographyOptions },
  components: {
    ...accordionTheme,
    ...buttonTheme,
    ...chipTheme,
    ...dataGridTheme,
    ...datepickerTheme,
    ...dialogTheme,
    ...listTheme,
    ...linearProgress,
    ...menuTheme,
    ...iconButtonTheme,
    ...selectTheme,
    ...stackTheme,
    ...stepperTheme,
    ...switchTheme,
    ...tableTheme,
    ...textFieldTheme,
    ...tooltipTheme,
    ...(typographyTheme as TypographyVariantsOptions),
  },
});
