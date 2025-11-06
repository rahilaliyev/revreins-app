import type { JSX } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';

import { Stack } from '@mui/material';

import { ROUTES } from 'src/routes/paths';
import { getAccessToken } from 'src/utils';

import { StyledPublicLayout, StyledTypography } from './styled';

export const PublicLayout = (): JSX.Element => {
  const token = getAccessToken();
  return !token ? (
    <Stack minHeight="100vh">
      <Stack
        width="55vw"
        position="relative"
        flexDirection="column"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Outlet />
        <StyledTypography variant="caption1">
          Have a problem? <Link to="#">Email Support</Link>
        </StyledTypography>
      </Stack>
      <Stack width="45vw">
        <StyledPublicLayout />
      </Stack>
    </Stack>
  ) : (
    <Navigate to={ROUTES.DEFAULT.PATH} />
  );
};
