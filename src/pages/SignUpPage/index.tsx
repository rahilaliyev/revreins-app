import { type JSX, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { ROUTES } from 'src/routes/paths';

import { NotVerified } from './components';
import { StyledSignUpButton } from './styled';

import { SignInIcon } from 'src/assets/icons';
import Logo from 'src/assets/images/logo.svg?react';

const SignUpPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isVerify, setIsVerify] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  const handleNavigateSignIn = (): void => {
    navigate(ROUTES.AUTH.SIGNIN.PATH);
  };

  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center">
      <Logo />
      <Stack flexDirection="column">
        <Stack mt={0.5} mb={6} flexDirection="column" gap={0.5}>
          <Typography variant="h5">{isVerify ? 'Let’s verify your email' : 'Create Your Account'}</Typography>
          <Typography color="textSecondary" width={isVerify ? '90%' : '100%'} textAlign="center">
            {isVerify
              ? `Check ${emailValue} to verify your account and get started`
              : 'Get started with RevReins.io'}
          </Typography>
        </Stack>
        {!isVerify && <NotVerified setEmailValue={setEmailValue} setIsVerify={setIsVerify} />}
      </Stack>
      <Stack gap={2.5} mb={6}>
        <Typography variant="body2" color="textSecondary">
          Already have an account?
        </Typography>
        <StyledSignUpButton endIcon={<SignInIcon />} variant="text" onClick={handleNavigateSignIn}>
          Sign in
        </StyledSignUpButton>
      </Stack>
      <Stack>
        <Typography variant="caption1" color="textSecondary" textAlign="center">
          By signing up you agree to{' '}
          <Link to="#" style={{ textDecoration: 'underline' }}>
            Terms of Service
          </Link>
          &nbsp;&&nbsp;
          <Link to="#" style={{ textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SignUpPage;
