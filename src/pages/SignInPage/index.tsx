import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Stack, Typography } from '@mui/material';

import { CustomTextField, GoogleButton } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { type TFormData, validationSchema } from './validationSchema';

import Logo from 'src/assets/images/logo.svg?react';

const SignInPage = (): JSX.Element => {
  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { email: '', password: '' },
  });

  const handleSubmit = (data: TFormData): void => {
    console.log(data);
  };

  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center">
      <Logo />
      <Stack flexDirection="column">
        <Typography mt={0.5} mb={6} variant="h5">
          Sign in
        </Typography>
        <Stack flexDirection="column" justifyContent="center" mb={6} gap={6}>
          <GoogleButton text="Sign in with Google" size="large" />
          <Typography variant="body1" color="textSecondary">
            or sign in with email
          </Typography>
          <Stack width="100%">
            <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
              <Stack justifyContent="center" alignItems="center" flexDirection="column" minWidth={400}>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  width="100%"
                  gap={4}
                >
                  <CustomTextField name="email" label="Your email" placeholder="Enter your account’s email" />
                  <CustomTextField
                    name="password"
                    label="Your password"
                    placeholder="Enter your password"
                    type="password"
                  />
                </Stack>
                <Button
                  sx={{ marginTop: (theme) => theme.spacing(6) }}
                  type="submit"
                  disabled={!formBag.formState.isDirty}
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
    </Stack>
  );
};

export default SignInPage;
