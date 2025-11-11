import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Grid, Stack } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { type TCreateAccountFormData, validationCreateAccountSchema } from '../validationSchema';

export const CreateAccount = (): JSX.Element => {
  const formBag = useForm<TCreateAccountFormData>({
    resolver: zodResolver(validationCreateAccountSchema),
    defaultValues: {
      companyName: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = (data: TCreateAccountFormData): void => {
    console.log(data);
  };

  return (
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
  );
};
