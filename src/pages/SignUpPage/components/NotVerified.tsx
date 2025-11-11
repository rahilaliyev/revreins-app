import { type JSX, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Stack, Typography } from '@mui/material';

import { CustomTextField, GoogleButton } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { type TFormData, validationSchema } from '../validationSchema';

interface IProps {
  setEmailValue: (email: string) => void;
  setIsVerify: (isVerify: boolean) => void;
}

export const NotVerified = ({ setEmailValue, setIsVerify }: IProps): JSX.Element => {
  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { email: '' },
  });

  const emailValue = useWatch({
    control: formBag.control,
    name: 'email',
  });

  useEffect(() => {
    setEmailValue(emailValue);
  }, [emailValue]);

  const handleSubmit = (data: TFormData): void => {
    console.log(data);
    setIsVerify(true);
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
  );
};
