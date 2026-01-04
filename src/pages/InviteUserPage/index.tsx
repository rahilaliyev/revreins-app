import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

import { Stack } from '@mui/material';

import { ROUTES } from 'src/routes/paths';
import { getAccessToken } from 'src/utils';

import CompanyInformation from './components/CompanyInformation';
import CreateAccount from './components/CreateAccount';

const InviteUserPage = (): JSX.Element => {
  const token = getAccessToken();

  if (token) {
    return <Navigate to={ROUTES.DEFAULT.PATH} />;
  }

  return (
    <Stack minHeight="100vh">
      <Stack width="45vw">
        <CompanyInformation />
      </Stack>
      <Stack
        width="55vw"
        position="relative"
        flexDirection="column"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <CreateAccount />
      </Stack>
    </Stack>
  );
};

export default InviteUserPage;
