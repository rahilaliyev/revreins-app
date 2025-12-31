import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { ROUTES } from 'src/routes/paths';
import { getAccessToken } from 'src/utils';

import Sidebar from './components/Sidebar';

export const PrivateLayout = (): JSX.Element => {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to={ROUTES.AUTH.SIGNIN.PATH} />;
  }

  return (
    <Stack height="100%" alignItems="flex-start">
      <Sidebar />
      <Box>
        <Box>Header</Box>
        <Box component="main" width="100%">
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
};
