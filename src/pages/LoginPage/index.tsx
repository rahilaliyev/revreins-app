import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Stack, Typography } from '@mui/material';

import { CustomTextField, GoogleButton } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { StyledSignInButton } from './styled';
import { type TFormData, validationSchema } from './validationSchema';

import { SignInIcon } from 'src/assets/icons';
import Logo from 'src/assets/images/logo.svg?react';

const LoginPage = (): JSX.Element => {
  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = (data: TFormData): void => {
    console.log(data);
  };

  const emailValue = formBag.watch('email');

  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center">
      <Logo />
      <Stack flexDirection="column" gap={0.5} mt={0.5} mb={6}>
        <Typography variant="h5">Create Your Account</Typography>
        <Typography variant="body1" color="textSecondary">
          Get started with RevReins.io
        </Typography>
      </Stack>
      <Stack flexDirection="column" justifyContent="center" mb={4} gap={6}>
        <GoogleButton text="Sign up with Google" size="large" />
        <Typography variant="body1" color="textSecondary">
          or sign up with email
        </Typography>
        <Stack width="100%">
          <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
            <Stack justifyContent="center" alignItems="center" flexDirection="column" minWidth={400}>
              <CustomTextField name="email" label="Your email" placeholder="you@company.com" />
              <Button
                sx={{ marginTop: (theme) => theme.spacing(6) }}
                type="submit"
                disabled={!emailValue}
                color="inherit"
                size="large"
              >
                Create an Account
              </Button>
            </Stack>
          </CustomFormProvider>
        </Stack>
        <Stack gap={2.5}>
          <Typography variant="body2" color="textSecondary">
            Already have an account?
          </Typography>
          <StyledSignInButton endIcon={<SignInIcon />} variant="text">
            Sign in
          </StyledSignInButton>
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
    </Stack>
  );
};

export default LoginPage;
