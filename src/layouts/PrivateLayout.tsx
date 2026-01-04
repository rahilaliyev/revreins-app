import type { JSX } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { ROUTES } from 'src/routes/paths';
import { getAccessToken } from 'src/utils';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { StyledMainSection } from './styled';

export const PrivateLayout = (): JSX.Element => {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to={ROUTES.AUTH.SIGNIN.PATH} />;
  }

  return (
    <Stack direction="row" height="100vh" alignItems="flex-start">
      <Sidebar />
      <Box width="100%" height="100vh" overflow="hidden">
        <Header />
        <StyledMainSection component="main">
          <Outlet />
        </StyledMainSection>
      </Box>
    </Stack>
  );
};
