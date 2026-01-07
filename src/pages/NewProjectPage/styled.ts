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
