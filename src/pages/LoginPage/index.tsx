import type { JSX } from 'react';

import { Button, Stack, Typography } from '@mui/material';

import { GoogleButton } from 'src/components';

import Logo from 'src/assets/images/logo.svg?react';

const LoginPage = (): JSX.Element => (
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
    </Stack>
    <Button>Login</Button>
  </Stack>
);

export default LoginPage;
