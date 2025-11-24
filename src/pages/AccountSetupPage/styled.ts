import { colorPalette } from 'src/theme/colorpalette';

import { Box, Stack, styled } from '@mui/material';

export const StyledWrapper = styled(Stack)(({ theme }) => ({
  borderRadius: theme.spacing(6),
  width: theme.spacing(204),
  height: theme.spacing(170),
  border: `1px solid ${theme.palette.secondary.main}`,
  background: 'white',
  overflow: 'hidden',
}));

export const StyledSidebar = styled(Stack)(({ theme }) => ({
  backgroundColor: colorPalette.primary.bgSecondary,
  width: theme.spacing(61.25),
  height: '100%',
  padding: theme.spacing(8, 6),
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
}));

export const StyledCard = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: '50%',
  transition: '.5s',
  height: theme.spacing(41.5),
  borderRadius: isActive ? theme.spacing(4) : theme.spacing(3.5),
  border: `1px solid ${colorPalette.other.stroke}`,
  background: isActive ? colorPalette.primary.bgSecondary : 'white',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
}));

export const StyledIconCardWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  transition: '.5s',
  borderRadius: theme.spacing(2.9),
  background: isActive ? colorPalette.accent.active : colorPalette.primary.bg,
}));

export const StyledTemplateCard = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  padding: theme.spacing(3),
  borderRadius: isActive ? theme.spacing(4) : theme.spacing(3.5),
  border: `1px solid ${colorPalette.other.stroke}`,
  background: isActive ? colorPalette.primary.bgSecondary : 'white',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: '.5s',
  cursor: 'pointer',
}));

export const StyledTemplateCardIconWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  background: isActive ? colorPalette.accent.main : colorPalette.primary.bg,
  transition: '.5s',
}));

export const StyledReviewCard = styled(Stack)(({ theme }) => ({
  backgroundColor: colorPalette.primary.bgSecondary,
  padding: theme.spacing(4),
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: theme.spacing(3.5),
  marginTop: theme.spacing(4),
}));

export const StyledTrialBadge = styled(Stack)(({ theme }) => ({
  backgroundColor: colorPalette.neutral.bg,
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(5),
  border: `1px solid ${colorPalette.other.stroke}`,
}));

export const StyledApiKey = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: theme.spacing(3.5),
  border: `1px solid ${colorPalette.secondary.bg}`,
}));

export const StyledCloseApiIconWrapper = styled(Stack)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  borderRadius: theme.spacing(2.5),
  background: '#E5E7EB',
  justifyContent: 'center',
  alignItems: 'center',
}));
