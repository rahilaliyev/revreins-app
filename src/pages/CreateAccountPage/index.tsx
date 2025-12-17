import { type JSX, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { enqueueSnackbar } from 'notistack';
import { colorPalette } from 'src/theme/colorpalette';

import {
  useTenantProfileUpdateMutation,
  useTenantUserUpdateMutation,
  useVerifyEmailMutation,
} from 'src/apis/auth';
import type { ITenantUserUpdatePayload } from 'src/apis/auth/types';

import { Button, CircularProgress, Grid, Stack, Tooltip, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { useCustomSearchParams } from 'src/hooks';
import { ROUTES } from 'src/routes/paths';

import { TooltipTitle } from '../SignUpPage/components';
import { StyledSignUpButton } from '../SignUpPage/styled';

import { type TFormData, validationSchema } from './validationSchema';

import { InformationLineIcon, SignInIcon } from 'src/assets/icons';
import Logo from 'src/assets/images/logo.svg?react';

const CreateAccountPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useCustomSearchParams();
  const { token, email } = searchParams;
  const { mutate, isPending } = useVerifyEmailMutation();
  const { mutateAsync: updateTenantProfileMutate } = useTenantProfileUpdateMutation();
  const { mutateAsync: updateTenantUserMutate } = useTenantUserUpdateMutation();

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      companyName: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (token && email) {
      mutate(
        { token, email },
        {
          onSuccess: () => enqueueSnackbar({ message: 'Email verified', variant: 'success' }),
          onError: handleNavigateSignIn,
        },
      );
    }

    if (!token || !email) {
      enqueueSnackbar({ message: 'Something went wrong', variant: 'error' });
    }
  }, [token, email]);

  const handleNavigateSignIn = (): void => {
    navigate(ROUTES.AUTH.SIGNIN.PATH);
  };

  const handleSubmit = (data: TFormData): void => {
    const payload: ITenantUserUpdatePayload = {
      first_name: data.firstName,
      last_name: data.lastName,
      company_name: data.companyName,
      password: data.password,
      confirm_password: data.confirmPassword,
    };

    updateTenantProfileMutate(payload)
      .then(() => updateTenantUserMutate(payload))
      .then(() => navigate(ROUTES.AUTH.ACCOUNT_SETUP.PATH));
  };

  if (isPending) {
    return <CircularProgress />;
  }

  if (!token || !email) {
    return <Navigate to={ROUTES.AUTH.SIGNIN.PATH} />;
  }

  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center">
      <Logo />
      <Stack flexDirection="column">
        <Stack mt={0.5} mb={6} flexDirection="column" gap={0.5}>
          <Typography variant="h5">Create Your Account</Typography>
          <Typography variant="body1" color="textSecondary" width="100%" textAlign="center">
            Get started with RevReins.io
          </Typography>
        </Stack>
        <Stack width={400} flexDirection="column" justifyContent="center" mb={6} gap={6}>
          <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, sm: 12 }}>
                <CustomTextField name="companyName" label="Company Name" placeholder="SEO Example" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <CustomTextField name="firstName" label="First Name" placeholder="Your Name" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <CustomTextField name="lastName" label="Last Name" placeholder="Your Last Name" />
              </Grid>
              <Grid size={{ xs: 12, sm: 12 }}>
                <CustomTextField
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Create a strong password"
                  helperText={
                    formBag.formState.errors.password?.message ? (
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Tooltip open placement="bottom-start" title={<TooltipTitle />}>
                          <InformationLineIcon width={18} height={18} pathFill={colorPalette.error.main} />
                        </Tooltip>
                        <Typography variant="caption2" color="error">
                          Password does not meet security requirements
                        </Typography>
                      </Stack>
                    ) : (
                      ''
                    )
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12 }}>
                <CustomTextField
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12 }}>
                <Stack justifyContent="center">
                  <Button type="submit" disabled={!formBag.formState.isDirty} color="inherit" size="large">
                    Continue
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </CustomFormProvider>
        </Stack>
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

export default CreateAccountPage;
