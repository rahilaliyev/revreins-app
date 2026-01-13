import { type JSX, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import type { EUserRole } from 'src/types/enums';

import { useAcceptTeamInvite, useGetTenantTeamInviteDetails } from 'src/apis/auth';

import { Stack } from '@mui/material';

import { useCustomSearchParams } from 'src/hooks';
import { ROUTES } from 'src/routes/paths';
import { getAccessToken } from 'src/utils';

import CompanyInformation from './components/CompanyInformation';
import CreateAccount from './components/CreateAccount';

export interface IInvitingMember {
  name: string;
  email: string;
  avatar: string;
  role: EUserRole;
  teamSize: number;
  tenantName: string;
  tenantLogo: string;
}

const InviteUserPage = (): JSX.Element => {
  const [searchParams] = useCustomSearchParams();

  const accessToken = getAccessToken();
  const { token, email } = searchParams;
  const [invitingMemberData, setInvitingMemberData] = useState<IInvitingMember>();
  const [temporaryToken, setTemporaryToken] = useState('');

  const { mutate, isPending } = useGetTenantTeamInviteDetails();
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
          setInvitingMemberData({
            name: res?.invited_user?.name,
            email: res?.invited_user?.email,
            avatar: res?.invited_user?.avatar,
            role: res?.role,
            teamSize: res?.team_size,
            tenantName: res?.tenant?.name,
            tenantLogo: res?.tenant?.logo,
          });
          mutateAccept(
            { email, token },
            {
              onSuccess: (res) => setTemporaryToken(res.access_token),
            },
          );
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
        <CompanyInformation invitingMemberData={invitingMemberData} isLoading={isPending} />
      </Stack>
      <Stack
        width="55vw"
        position="relative"
        flexDirection="column"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <CreateAccount temporaryToken={temporaryToken ?? ''} />
      </Stack>
    </Stack>
  );
};

export default InviteUserPage;
