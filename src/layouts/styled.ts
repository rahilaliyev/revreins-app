import { Box, styled, Typography } from '@mui/material';

import BgImage from 'src/assets/images/login-bg-image.webp';

export const StyledPublicLayout = styled(Box)(() => ({
  backgroundImage: `url(${BgImage})`,
  height: '100vh',
  width: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: theme.spacing(5),

  '& a': {
    color: '#3B82F6',
    textDecoration: 'underline',
    transition: 'color 0.2s ease',

    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));
