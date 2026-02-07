import { type ChangeEvent, type FormEvent, type JSX, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { colorPalette } from 'src/theme/colorpalette';

import { useTenantUserUpdateMutation, useUpdateInviteMutation } from 'src/apis/auth';
import type { ITenantUserUpdatePayload } from 'src/apis/auth/types';

import { Grid, Stack, Tooltip, Typography } from '@mui/material';

import { CustomTextField, GoogleButton, LoadingButton } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { TooltipTitle } from 'src/pages/SignUpPage/components';
import { StyledSignUpButton } from 'src/pages/SignUpPage/styled';
import { ROUTES } from 'src/routes/paths';
import { setAuthCookies } from 'src/utils';

import { type TFormData, validationSchema } from './validationSchema';

import { InformationLineIcon, SignInIcon } from 'src/assets/icons';
import Logo from 'src/assets/images/logo.svg?react';

interface IProps {
  temporaryToken: string;
}

const CreateAccount = ({ temporaryToken }: IProps): JSX.Element => {
  const navigate = useNavigate();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const { mutateAsync: updateTenantProfileMutate, isPending: isProfilePending } = useUpdateInviteMutation();
  const { mutateAsync: updateTenantUserMutate, isPending: isUserPending } = useTenantUserUpdateMutation();

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    setIsTooltipOpen(!!formBag.formState.errors.password?.message);
  }, [formBag.formState.errors.password?.message]);

  const handleNavigateSignIn = (): void => {
    navigate(ROUTES.AUTH.SIGNIN.PATH);
  };

  const handleSubmit = (data: TFormData): void => {
    const payload: ITenantUserUpdatePayload = {
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
      confirm_password: data.confirmPassword,
    };

    updateTenantProfileMutate({ payload, token: temporaryToken })
      .then(() => updateTenantUserMutate({ payload, token: temporaryToken }))
      .then(() => {
        setAuthCookies(temporaryToken);
        navigate(ROUTES.DEFAULT.PATH);
      });
  };

  const handlePasswordChange = (
    event: FormEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: 'password' | 'confirmPassword',
  ): void => {
    const target = event.target as HTMLInputElement;

    formBag.setValue(name, target.value, { shouldDirty: true });

    if (formBag.formState.errors.password?.message) {
      setIsTooltipOpen(true);
    }
  };

  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center">
      <Logo />
      <Stack flexDirection="column">
        <Stack mt={0.5} mb={6} flexDirection="column" gap={0.5}>
          <Typography variant="h5">Create Your Account</Typography>
          <Typography variant="body1" color="textSecondary" width="100%" textAlign="center">
            Get started with RevReins.io
          </Typography>
          <Stack flexDirection="column" justifyContent="center" my={6} gap={6}>
            <GoogleButton text="Sign in with Google" size="large" />
            <Typography variant="body1" color="textSecondary">
              or sign in with email
            </Typography>
          </Stack>
        </Stack>
        <Stack width={400} flexDirection="column" justifyContent="center" mb={6} gap={6}>
          <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
            <Grid container spacing={4}>
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
                  onChange={(e) => handlePasswordChange(e, 'password')}
                  helperText={
                    formBag.formState.errors.password?.message ? (
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Tooltip open={isTooltipOpen} placement="bottom-start" title={<TooltipTitle />}>
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
                  <LoadingButton
                    type="submit"
                    disabled={!formBag.formState.isDirty}
                    color="inherit"
                    size="large"
                    loading={isUserPending || isProfilePending}
                  >
                    Continue
                  </LoadingButton>
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
    </Stack>
  );
};

export default CreateAccount;
