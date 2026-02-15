import { colorPalette } from 'src/theme/colorpalette';

import { alpha, Avatar, Box, Stack, styled } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: colorPalette.primary.bgSecondary,
  minHeight: '100%',
}));

export const StyledMainInfoSectionWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: theme.spacing(3),
  boxShadow: `0 1px 3px 0 ${alpha('#000', 0.1)}, 0 1px 2px -1px ${alpha('#000', 0.1)}`,
  background: 'white',
  gap: theme.spacing(6),
  border: `${theme.spacing(0.25)} solid ${alpha('#000', 0.1)}`,
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  background: colorPalette.primary.bg,
  color: colorPalette.primary.main,
  width: theme.spacing(32),
  height: theme.spacing(32),
  fontSize: theme.typography.h4.fontSize,
  fontWeight: 500,
  lineHeight: theme.typography.h4.lineHeight,
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
}));

export const StyledActivityIconWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  padding: theme.spacing(2),
  borderRadius: '50%',
}));
