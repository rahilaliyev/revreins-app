import { type JSX, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

import { useAcceptTeamInvite, useGetTenantTeamInviteDetails } from 'src/apis/auth';

import { Stack } from '@mui/material';

import { useCustomSearchParams } from 'src/hooks';
import { ROUTES } from 'src/routes/paths';
import { getAccessToken } from 'src/utils';

import CompanyInformation from './components/CompanyInformation';
import CreateAccount from './components/CreateAccount';

const InviteUserPage = (): JSX.Element => {
  const [searchParams] = useCustomSearchParams();

  const accessToken = getAccessToken();
  const { token, email } = searchParams;

  const { mutate } = useGetTenantTeamInviteDetails();
  const { mutate: mutateAccept } = useAcceptTeamInvite();

  useEffect(() => {
    if (!token || !email) {
      enqueueSnackbar({ message: 'Something went wrong', variant: 'error' });
      return;
    }

    mutate(
      { email, token },
      {
        onSuccess: (res) => {
          console.log(res);
        },
      },
    );
  }, [token, email]);

  if (accessToken || !token || !email) {
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
