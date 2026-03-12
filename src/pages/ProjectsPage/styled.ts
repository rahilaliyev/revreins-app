import { colorPalette } from 'src/theme/colorpalette';

import { alpha, Box, IconButton, MenuItem, Stack, styled } from '@mui/material';

export const StyledPageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  background: colorPalette.primary.bgSecondary,
  minHeight: '100%',
}));

export const StyledMoreIconButton = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  background: theme.palette.secondary.main,
  borderRadius: theme.spacing(1),
}));

export const StyledIconWrapper = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  background: theme.palette.secondary.main,
  borderRadius: theme.spacing(1.5),
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: theme.spacing(80),
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
}));

export const StyledNoDataWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 6),
  borderRadius: theme.spacing(3),
  border: `${theme.spacing(0.25)} solid ${alpha('#000', 0.1)}`,
  background: 'rgba(0, 0, 0, 0.03)',
  marginTop: theme.spacing(3),
}));
