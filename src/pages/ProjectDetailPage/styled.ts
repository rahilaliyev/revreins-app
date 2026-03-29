import { colorPalette } from 'src/theme/colorpalette';

import { Box, Stack, styled } from '@mui/material';

export const StyledHeader = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-between',
  borderTop: `1px solid ${colorPalette.primary.bgSecondary}`,
  borderBottom: `1px solid ${colorPalette.other.stroke}`,
  padding: theme.spacing(2, 3),
  background: colorPalette.background.main,
}));

export const StyledContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: theme.spacing(6),
  padding: theme.spacing(6),
  backgroundColor: colorPalette.primary.bgSecondary,
  minHeight: `calc(100% - ${theme.spacing(15)})`,
}));

export const StyledRevenueWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.spacing(2),
  background: colorPalette.background.main,
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
