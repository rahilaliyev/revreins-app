import { Fragment, type JSX, useMemo } from 'react';
import { USER_ROLES } from 'src/contants';
import { EUserRole } from 'src/types/enums';
import type { IInvitingMembers } from 'src/types/interfaces';

import { useGetUserInfoOnboarding } from 'src/apis/user';

import {
  Avatar,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

import { StyledIconCardWrapper, StyledReviewCard, StyledTrialBadge } from '../styled';

import { Filter2FillIcon } from 'src/assets/icons';

interface IProps {
  invitingMembers: IInvitingMembers[];
}

const FourthStep = ({ invitingMembers }: IProps): JSX.Element => {
  const token = localStorage.getItem('temporaryToken') || '';
  const { data } = useGetUserInfoOnboarding(token);

  const memberList = useMemo(() => {
    const ownerData = { email: data?.user?.email, role: EUserRole.OWNER, name: data?.user?.name };

    return [ownerData, ...invitingMembers];
  }, [invitingMembers, data?.user?.email, data?.user?.name]);

  return (
    <Box pt={2}>
      <Box>
        <Typography variant="h6" fontWeight={500}>
          Let’s review your progress so far...
        </Typography>
        <Typography color="textSecondary">
          Select a pre-made CRM template or set one up from scratch
        </Typography>
      </Box>
      <Box mt={6}>
        <Typography variant="h6" fontWeight={500}>
          {data?.tenant_user?.first_name}&apos;s SEO
        </Typography>
      </Box>
      <StyledReviewCard>
        <Stack>
          <StyledIconCardWrapper isActive={true} width={32} height={32}>
            <Filter2FillIcon width={20} height={20} />
          </StyledIconCardWrapper>
          <Stack flexDirection="column" ml={4} alignItems="flex-start">
            <Stack>
              <Typography variant="body2">SaaS Funnel</Typography>
              <Typography variant="body2" ml={1} color="textSecondary">
                | 4 stages
              </Typography>
            </Stack>
            <Typography variant="caption1" color="textSecondary">
              Default Project
            </Typography>
          </Stack>
        </Stack>
        <StyledTrialBadge>
          <Typography variant="body2">14 day free trial</Typography>
        </StyledTrialBadge>
      </StyledReviewCard>
      <Typography component="p" mt={2} mb={4} variant="caption2" color="textSecondary">
        You will be placed on a free 14-day premium plan, after 14 days you would be able to choose a
        membership that works best for your team.
      </Typography>
      <Box maxHeight={300} overflow="auto" pr={1}>
        <Stack justifyContent="space-between" alignItems="center">
          <Typography>Your Team</Typography>
          <Typography variant="body2" color="textSecondary">
            {memberList.length}/15
          </Typography>
        </Stack>
        <List>
          <Divider />
          {memberList?.map((el, key) => (
            <Fragment key={key}>
              <ListItem sx={{ py: 1, px: 3, justifyContent: 'space-between' }}>
                <Stack>
                  <ListItemAvatar sx={{ minWidth: (theme) => theme.spacing(10) }}>
                    <Avatar>
                      <Typography variant="body2" sx={{ marginLeft: '0 !important' }}>
                        {el?.name ? el.name?.[0]?.toUpperCase() : el?.email?.[0]?.toUpperCase()}
                      </Typography>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ my: 0, '& .MuiTypography-root': { fontSize: '14px', marginLeft: '12px' } }}
                    primary={el?.name ?? el.email}
                    secondary={el?.name ? el?.email : ''}
                  />
                </Stack>
                <Stack justifyContent="space-between">
                  <Chip
                    variant="outlined"
                    label={
                      <Typography variant="caption2" sx={{ marginLeft: '0 !important' }}>
                        {USER_ROLES.find((data) => data.value === el.role)?.label}
                      </Typography>
                    }
                    size="small"
                  />
                </Stack>
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FourthStep;
