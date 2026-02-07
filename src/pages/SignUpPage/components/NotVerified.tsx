import { type JSX, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRegisterMutation } from 'src/apis/auth';

import { Stack, Typography } from '@mui/material';

import { CustomTextField, GoogleButton, LoadingButton } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { type TSignUpFormData, validationSignUpSchema } from '../validationSchema';

interface IProps {
  setEmailValue: (email: string) => void;
  setIsVerify: (isVerify: boolean) => void;
}

export const NotVerified = ({ setEmailValue, setIsVerify }: IProps): JSX.Element => {
  const { mutate, isPending } = useRegisterMutation();
  const formBag = useForm<TSignUpFormData>({
    resolver: zodResolver(validationSignUpSchema),
    defaultValues: { email: '' },
  });

  const emailValue = useWatch({
    control: formBag.control,
    name: 'email',
  });

  useEffect(() => {
    setEmailValue(emailValue);
  }, [emailValue, setEmailValue]);

  const handleSubmit = (data: TSignUpFormData): void => {
    mutate(data, {
      onSuccess: () => {
        setIsVerify(true);
      },
    });
  };

  return (
    <Stack flexDirection="column" justifyContent="center" mb={6} gap={6}>
      <GoogleButton text="Sign up with Google" size="large" />
      <Typography variant="body1" color="textSecondary">
        or sign up with email
      </Typography>
      <Stack width="100%">
        <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
          <Stack justifyContent="center" alignItems="center" flexDirection="column" minWidth={400}>
            <CustomTextField name="email" label="Your email" placeholder="you@company.com" />
            <LoadingButton
              sx={{ marginTop: (theme) => theme.spacing(6) }}
              type="submit"
              loading={isPending}
              disabled={!emailValue}
              color="inherit"
              size="large"
            >
              Create an Account
            </LoadingButton>
          </Stack>
        </CustomFormProvider>
      </Stack>
    </Stack>
  );
};
