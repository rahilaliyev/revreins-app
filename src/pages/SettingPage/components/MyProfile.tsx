import { type JSX, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { colorPalette } from 'src/theme/colorpalette';

import { useGetUserInfo } from 'src/apis/user';

import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { StyledAvatar } from '../styled';
import { type TProfileFormData, validationProfileSchema } from '../validationSchema';

const MyProfile = (): JSX.Element => {
  const { data } = useGetUserInfo();

  const formBag = useForm<TProfileFormData>({
    resolver: zodResolver(validationProfileSchema),
    defaultValues: {
      email: data?.user?.email || '',
      name: data?.user?.name || '',
      title: '',
    },
  });

  useEffect(() => {
    if (data) {
      formBag.reset({
        email: data?.user?.email || '',
        name: data?.user?.name || '',
        title: '',
      });
    }
  }, [data, formBag]);

  const handleSubmit = (values: TProfileFormData): void => {};

  return (
    <Box p={8}>
      <Typography variant="subtitle1" fontWeight={600}>
        Public Profile
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={0.25}>
        Manage your public profile information.
      </Typography>
      <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
        <Box my={8}>
          <Stack pb={6}>
            <StyledAvatar sx={{ bgcolor: colorPalette.primary.bg }}>
              {data?.tenant_user?.avatar ?? data?.user?.name?.[0]}
            </StyledAvatar>
            <Box>
              <Typography fontWeight={500}>Profile Picture</Typography>
              <Typography variant="body2" mt={0.625} mb={3} color="text.secondary">
                We support PNGs, JPGs, and GIFs under 10MB.
              </Typography>
              <Button variant="text" color="primary" sx={{ padding: 0, height: 'inherit' }}>
                Remove photo
              </Button>
            </Box>
          </Stack>
          <Divider />
        </Box>
        <Grid container spacing={4} maxWidth={672} mb={8}>
          <Grid size={12}>
            <CustomTextField name="name" label="Full Name" />
          </Grid>
          <Grid size={12}>
            <CustomTextField name="title" label="Job Title" />
          </Grid>
          <Grid size={12}>
            <CustomTextField
              name="email"
              label="Email address"
              disabled
              helperText={
                <Typography variant="caption2">
                  Email address cannot be changed here. To change your email address, contact{' '}
                  <Link to="mailto:support@revreins.com">
                    <Typography color="info" variant="caption2">
                      support@revreins.com.
                    </Typography>
                  </Link>
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Button type="submit" color="inherit">
          Save Changes
        </Button>
      </CustomFormProvider>
    </Box>
  );
};

export default MyProfile;
