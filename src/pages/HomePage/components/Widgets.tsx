import type { JSX } from 'react';
import { CRM_STATUS_COLOR_MAP } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { ECRMStatus } from 'src/types/enums';

import { useGetCrmIntegrationStatus } from 'src/apis/crmConnection';

import { Avatar, AvatarGroup, Box, Button, Chip, Stack, Typography } from '@mui/material';

import { LoadingWrapper } from 'src/components';

import { StyledWidgetWrapper } from '../styled';

import {
  AlertLineIcon,
  CheckboxCircleLineIcon,
  GitBranchLineIcon,
  GroupLineIcon,
  ReloadArrowFillIcon,
  User6LineIcon,
} from 'src/assets/icons';

const Widgets = (): JSX.Element => {
  const { data, isLoading } = useGetCrmIntegrationStatus();

  const firstElement = data?.[0];
  const chipColor = CRM_STATUS_COLOR_MAP[firstElement?.sync_status as ECRMStatus] || 'default';

  return (
    <Stack gap={6}>
      <StyledWidgetWrapper>
        <LoadingWrapper isLoading={isLoading}>
          <Stack justifyContent="space-between" alignItems="flex-start" width="100%">
            <Box>
              <Typography marginBottom={1}>
                {firstElement?.sync_status === ECRMStatus.ACTIVE ? 'CRM Connection' : 'CRM Not Connected'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {firstElement?.sync_status === ECRMStatus.ACTIVE
                  ? 'Salesforce Integration'
                  : 'CRM Connection was not configured'}
              </Typography>
            </Box>
            <Box>
              <Chip
                variant="outlined"
                color={chipColor}
                label={
                  <Stack alignItems="center" gap={1}>
                    {firstElement?.sync_status === ECRMStatus.ACTIVE ? (
                      <CheckboxCircleLineIcon width={16} height={16} pathFill={colorPalette.success.main} />
                    ) : (
                      <AlertLineIcon width={16} height={16} pathFill={colorPalette.other.black} />
                    )}
                    <Typography variant="body2">
                      {firstElement?.sync_status === ECRMStatus.ACTIVE ? 'Connected' : 'Not Configured'}
                    </Typography>
                  </Stack>
                }
                size="small"
              />
            </Box>
          </Stack>

          <Stack mt={4} width="100%">
            {firstElement?.sync_status === ECRMStatus.ACTIVE && (
              <Stack width="100%" justifyContent="space-between">
                <Box>
                  <Typography>{firstElement?.integration_name}</Typography>
                  <Typography>Last synced: {firstElement?.last_sync_at}</Typography>
                </Box>
                <Stack gap={2}>
                  <Button endIcon={<ReloadArrowFillIcon pathFill={colorPalette.inverted.invertedBg} />}>
                    Re-sync
                  </Button>
                  <Button color="secondary">Manage CRM</Button>
                </Stack>
              </Stack>
            )}
            {firstElement?.sync_status !== ECRMStatus.ACTIVE && (
              <Button endIcon={<GitBranchLineIcon pathFill={colorPalette.inverted.invertedBg} />}>
                Connect CRM
              </Button>
            )}
          </Stack>
        </LoadingWrapper>
      </StyledWidgetWrapper>
      <StyledWidgetWrapper>
        <Stack justifyContent="space-between" alignItems="flex-start" width="100%">
          <Box>
            <Stack alignItems="center" gap={2}>
              <GroupLineIcon width={20} height={20} pathFill={colorPalette.other.bgOverlay} />
              <Typography>Team Overview</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              3 days left in trial
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              1 Active Member
            </Typography>
          </Box>
        </Stack>
        <Stack mt={4} width="100%" justifyContent="space-between">
          <AvatarGroup>
            <Avatar sx={{ bgcolor: colorPalette.primary.bg }}>
              <User6LineIcon pathFill={colorPalette.primary.main} />
            </Avatar>
          </AvatarGroup>
          <Button color="secondary">Manage Team and Subscription</Button>
        </Stack>
      </StyledWidgetWrapper>
    </Stack>
  );
};

export default Widgets;
