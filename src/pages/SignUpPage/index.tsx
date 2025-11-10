import { type JSX, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Stack, Typography } from '@mui/material';

import { CustomTextField, GoogleButton } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { ROUTES } from 'src/routes/paths';

import { StyledSignUpButton } from './styled';
import { type TFormData, validationSchema } from './validationSchema';

import { SignInIcon } from 'src/assets/icons';
import Logo from 'src/assets/images/logo.svg?react';

const SignUpPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isVerify, setIsVerify] = useState(false);
  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { email: '' },
  });

  const handleNavigateSignIn = (): void => {
    navigate(ROUTES.AUTH.SIGNIN.PATH);
  };

  const handleSubmit = (data: TFormData): void => {
    console.log(data);
    setIsVerify(true);
  };

  const emailValue = useWatch({
    control: formBag.control,
    name: 'email',
  });

  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center">
      <Logo />
      {isVerify ? (
        <Stack flexDirection="column">
          <Typography variant="h5" textAlign="center" my={1.5}>
            Let’s verify your email
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={0.5} mb={6} width="90%" textAlign="center">
            Check {emailValue} to verify your account and get started
          </Typography>
        </Stack>
      ) : (
        <Stack flexDirection="column">
          <Stack mt={0.5} mb={6} flexDirection="column" gap={0.5}>
            <Typography variant="h5">Create Your Account</Typography>
            <Typography variant="body1" color="textSecondary">
              Get started with RevReins.io
            </Typography>
          </Stack>
          <Stack flexDirection="column" justifyContent="center" mb={6} gap={6}>
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
          </Stack>
        </Stack>
      )}
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
