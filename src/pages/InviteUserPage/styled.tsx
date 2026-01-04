import { colorPalette } from 'src/theme/colorpalette';

import { alpha, Box, Stack, styled } from '@mui/material';

import BgImage from 'src/assets/images/login-bg-image.webp';

export const StyledPublicLayout = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${BgImage})`,
  height: '100vh',
  width: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const StyledUserDetailWrapper = styled(Box)(({ theme }) => ({
  boxShadow: `0 4px 20px 8px ${alpha('#000', 0.09)}`,
  borderRadius: theme.spacing(4),
  background: 'white',
  overflow: 'hidden',
  width: theme.spacing(110),
}));

export const StyledIconWrapper = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.spacing(16),
  height: theme.spacing(16),
  borderRadius: '50%',
  background: theme.palette.primary.main,
}));

export const StyledCompanyIconWrapper = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: '50%',
  background: colorPalette.primary.bg,
  marginRight: theme.spacing(3),
}));

export const StyledCompanyTeamInfo = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2.5),
  background: colorPalette.secondary.bg,
  width: '100%',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));
