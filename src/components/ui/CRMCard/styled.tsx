import { colorPalette } from 'src/theme/colorpalette';

import { Box, Stack, styled } from '@mui/material';

export const StyledApiKey = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: theme.spacing(3.5),
  border: `1px solid ${colorPalette.secondary.bg}`,
  marginBottom: theme.spacing(4),
}));

export const StyledIconWrapper = styled(Stack)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  borderRadius: theme.spacing(2.5),
  background: '#E5E7EB',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
