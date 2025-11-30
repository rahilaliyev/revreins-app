import type { VariantType } from 'notistack';
import { colorPalette } from 'src/theme/colorpalette';

import { alpha, Box, styled } from '@mui/material';

export const StyledSnackbar = styled(Box)<{ variant: VariantType }>(({ theme, variant }) => ({
  display: 'flex',
  minWidth: theme.spacing(75),
  maxWidth: theme.spacing(100),
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: `0 4px 20px 8px ${alpha('#000', 0.09)}`,
  backgroundColor:
    variant === 'success'
      ? theme.palette.success.main
      : variant === 'error'
        ? theme.palette.error.main
        : variant === 'warning'
          ? theme.palette.warning.main
          : variant === 'info'
            ? theme.palette.info.main
            : colorPalette.neutral.main,
  color: colorPalette.text.textInverse,
}));
