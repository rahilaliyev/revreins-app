import { colorPalette } from 'src/theme/colorpalette';

import { alpha, Box, Button, Stack, styled } from '@mui/material';

export const StyledHomePageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  background: colorPalette.primary.bgSecondary,
  minHeight: '100%',
}));

export const StyledWidgetWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '50%',
  height: theme.spacing(37.5),
  borderRadius: theme.spacing(3),
  border: `1px solid ${alpha('#000', 0.1)}`,
  boxShadow: `0 1px 3px 0 ${alpha('#000', 0.1)}, 0 1px 2px -1px ${alpha('#000', 0.1)}`,
  background: 'white',
  padding: theme.spacing(4),
}));

export const StyledCreateProject = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.spacing(3),
  border: `2px solid ${alpha('#000', 0.1)}`,
  backgroundColor: colorPalette.background.surface1,
  height: theme.spacing(62.5),
}));

export const StyledProjectCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  border: `1px solid ${alpha('#000', 0.1)}`,
  backgroundColor: 'white',
  height: theme.spacing(62),
  padding: theme.spacing(6),
}));

export const StyledChartIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.spacing(9),
  height: theme.spacing(9),
  background: 'rgba(0, 0, 0, 0.04);',
}));

export const StyledAddIconButton = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  width: theme.spacing(12),
  height: theme.spacing(12),
  background: colorPalette.accent.main,
  borderRadius: '50%',
}));
