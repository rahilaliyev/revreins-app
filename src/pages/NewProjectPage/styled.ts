import { colorPalette } from 'src/theme/colorpalette';

import { Box, IconButton, styled } from '@mui/material';

export const StyledNavigateBackButton = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.spacing(2),
  background: theme.palette.secondary.main,
  marginRight: theme.spacing(3),
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: colorPalette.primary.bgSecondary,
}));
