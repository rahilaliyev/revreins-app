import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

import { Stack } from '@mui/material';

import { ROUTES } from 'src/routes/paths';
import { getAccessToken } from 'src/utils';

const PrivateLayout = (): JSX.Element => {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to={ROUTES.AUTH.SIGNIN.PATH} />;
  }

  return <Stack height="100%" alignItems="flex-start" />;
};

export default PrivateLayout;
