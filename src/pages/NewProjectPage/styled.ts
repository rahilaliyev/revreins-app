import { colorPalette } from 'src/theme/colorpalette';

import { alpha, Box, IconButton, Stack, styled } from '@mui/material';

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

export const StyledContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'stretch',
  gap: theme.spacing(6),
  padding: theme.spacing(6),
  backgroundColor: colorPalette.primary.bgSecondary,
  minHeight: `calc(100% - ${theme.spacing(25.5)})`,
}));

export const StyledInfoCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: colorPalette.primary.bgSecondary,
  height: theme.spacing(72.25),
  border: `1px solid ${colorPalette.other.stroke}`,
  borderRadius: theme.spacing(3.5),
}));

export const StyledNumberWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  backgroundColor: colorPalette.accent.main,
  marginRight: theme.spacing(3),
  fontWeight: 700,
}));

export const StyledStagesSidebar = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  border: `1px solid ${alpha('#000', 0.1)}`,
  background: 'white',
  borderRadius: theme.spacing(3.5),
}));

export const StyledStageCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  padding: theme.spacing(3.5),
  paddingBottom: 4,
  borderRadius: theme.spacing(2.5),
  border: `2px solid ${isActive ? colorPalette.primary.main : colorPalette.secondary.main}`,
  backgroundColor: isActive ? colorPalette.primary.bgSecondary : 'white',
  cursor: isActive ? 'default' : 'pointer',
}));

export const StyledNumberQueue = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  border: `1px solid ${alpha('#000', 0.1)}`,
  borderRadius: theme.spacing(2),
}));
