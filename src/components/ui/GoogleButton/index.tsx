import type { JSX } from 'react';
import {
  type CodeResponse,
  type CredentialResponse,
  type TokenResponse,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from '@react-oauth/google';
import { enqueueSnackbar } from 'notistack';

import { type ButtonProps, Typography } from '@mui/material';

import { StyledGoogleButton } from './styled';

import { GoogleIcon } from 'src/assets/icons/googleIcon';

interface IProps {
  text: string;
  size?: ButtonProps['size'];
}

export const GoogleButton = ({ text, size = 'medium' }: IProps): JSX.Element => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse: TokenResponse | CodeResponse) =>
      enqueueSnackbar({ message: 'User logged in by Google' + tokenResponse, variant: 'success' }),
    onError: () => enqueueSnackbar({ message: 'Google login failed', variant: 'error' }),
  });

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse: CredentialResponse) =>
      enqueueSnackbar({ message: 'User logged in by Google' + credentialResponse, variant: 'success' }),
    onError: () => enqueueSnackbar({ message: 'Google login failed', variant: 'error' }),
  });

  return (
    <StyledGoogleButton onClick={() => login()} variant="outlined" size={size}>
      <GoogleIcon />
      <Typography variant="body1" color="textPrimary" fontWeight={500}>
        {text}
      </Typography>
    </StyledGoogleButton>
  );
};
