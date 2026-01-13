import type { JSX } from 'react';
import { USER_ROLES } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';

import { Avatar, Box, CircularProgress, Divider, Stack, Typography } from '@mui/material';

import type { IInvitingMember } from '../index';
import {
  StyledCompanyIconWrapper,
  StyledCompanyTeamInfo,
  StyledIconWrapper,
  StyledPublicLayout,
  StyledUserDetailWrapper,
} from '../styled';

import { MagicFillIcon } from 'src/assets/icons';

interface IProps {
  invitingMemberData?: IInvitingMember;
  isLoading: boolean;
}

const CompanyInformation = ({ invitingMemberData, isLoading }: IProps): JSX.Element => (
  <StyledPublicLayout>
    {isLoading ? (
      <CircularProgress />
    ) : (
      <StyledUserDetailWrapper>
        <Stack padding={6} sx={{ bgcolor: colorPalette.primary.bgSecondary }}>
          <StyledIconWrapper>
            <MagicFillIcon pathFill={colorPalette.background.main} />
          </StyledIconWrapper>
          <Box ml={6}>
            <Typography variant="h5" fontWeight={500}>
              You&apos;re Invited!
            </Typography>
            <Typography variant="body2">Join {invitingMemberData?.tenantName} team</Typography>
          </Box>
        </Stack>
        <Box padding={6} paddingTop={4}>
          <StyledCompanyTeamInfo>
            <Stack marginBottom={3}>
              <StyledCompanyIconWrapper>
                <img src={invitingMemberData?.tenantLogo} alt={invitingMemberData?.tenantName} />
              </StyledCompanyIconWrapper>
              <Typography variant="body1">{invitingMemberData?.tenantName}</Typography>
            </Stack>
            <Stack>
              <Box width="50%">
                <Typography variant="body1" color="text.secondary">
                  Team Size
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {invitingMemberData?.teamSize} members
                </Typography>
              </Box>
              <Box width="50%">
                <Typography variant="body1" color="text.secondary">
                  Your Role
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {USER_ROLES?.find((el) => el?.value === invitingMemberData?.role)?.label}
                </Typography>
              </Box>
            </Stack>
          </StyledCompanyTeamInfo>
          <Divider />
          <Box width="100%" mt={4}>
            <Typography variant="body1" color="text.secondary">
              Invited by
            </Typography>
            <Stack mt={2.5}>
              <Avatar src={invitingMemberData?.avatar ?? ''} />
              <Box ml={3}>
                <Typography variant="body2">{invitingMemberData?.name}</Typography>
                <Typography variant="caption1" color="text.secondary">
                  {invitingMemberData?.email}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </StyledUserDetailWrapper>
    )}
  </StyledPublicLayout>
);

export default CompanyInformation;
