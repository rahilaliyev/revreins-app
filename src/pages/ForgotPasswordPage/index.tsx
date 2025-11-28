import { type JSX, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Stack, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { ROUTES } from 'src/routes/paths';

import { StyledSignInButton } from '../SignInPage/styled';

import { type TFormData, validationSchema } from './validationSchema';

import { ArrowGoBackLineIcon } from 'src/assets/icons';
import Logo from 'src/assets/images/logo.svg?react';

const ForgotPasswordPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { email: '' },
  });

  const email = useWatch({
    name: 'email',
    control: formBag.control,
  });

  const handleSubmit = (data: TFormData): void => {
    setIsSuccess(true);
  };

  const handleNavigateToLogin = (): void => {
    navigate(ROUTES.AUTH.SIGNIN.PATH);
  };

  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center">
      <Logo />
      <Stack flexDirection="column">
        <Typography mt={1.5} mb={1.5} variant="h5">
          Forgot your password?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="textSecondary"
          width={isSuccess ? '80%' : '100%'}
        >
          {isSuccess ? (
            <>
              If an account associated with <b>{email}</b> exists, you’ll receive a password reset email
              within the next few minutes. Otherwise, please ensure the email address is correct or check your
              spam folder.
            </>
          ) : (
            <>
              Please enter your email address and click “Reset Password”.
              <br />
              We will then send you a link to reset your password.
            </>
          )}
        </Typography>
      </Stack>
      <CustomFormProvider form={formBag} onSubmit={handleSubmit} novalidate>
        {!isSuccess && (
          <Stack mt={8}>
            <CustomTextField
              name="email"
              type="email"
              label="Your email"
              placeholder="Enter your account's email"
            />
          </Stack>
        )}
        <Stack gap={6} justifyContent="center" mt={8}>
          <StyledSignInButton
            color="secondary"
            endIcon={<ArrowGoBackLineIcon />}
            onClick={handleNavigateToLogin}
          >
            Back to Login
          </StyledSignInButton>
          {!isSuccess && (
            <Button color="inherit" type="submit">
              Reset Password
            </Button>
          )}
        </Stack>
      </CustomFormProvider>
    </Stack>
  );
};

export default ForgotPasswordPage;
