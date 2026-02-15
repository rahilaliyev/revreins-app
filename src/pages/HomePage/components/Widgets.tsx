import { type JSX, useState } from 'react';
import { CRM_STATUS_COLOR_MAP } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { ECRMStatus } from 'src/types/enums';

import { Avatar, AvatarGroup, Box, Button, Chip, Stack, Typography } from '@mui/material';

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
  const [crmStatus] = useState(ECRMStatus.NOT_CONFIGURATED);

  const chipColor = CRM_STATUS_COLOR_MAP[crmStatus];

  return (
    <Stack gap={6}>
      <StyledWidgetWrapper>
        <Stack justifyContent="space-between" alignItems="flex-start" width="100%">
          <Box>
            <Typography marginBottom={1}>
              {crmStatus === ECRMStatus.CONNECTED ? 'CRM Connection' : 'CRM Not Connected'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {crmStatus === ECRMStatus.CONNECTED
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
                  {crmStatus === ECRMStatus.CONNECTED ? (
                    <CheckboxCircleLineIcon width={16} height={16} pathFill={colorPalette.success.main} />
                  ) : (
                    <AlertLineIcon width={16} height={16} pathFill={colorPalette.other.black} />
                  )}
                  <Typography variant="body2">
                    {crmStatus === ECRMStatus.CONNECTED ? 'Connected' : 'Not Configured'}
                  </Typography>
                </Stack>
              }
              size="small"
            />
          </Box>
        </Stack>
        <Stack mt={4} width="100%">
          {crmStatus === ECRMStatus.CONNECTED && (
            <Stack width="100%" justifyContent="space-between">
              <Box>
                <Typography>Close.com CRM</Typography>
                <Typography>Last synced: 10 mins ago</Typography>
              </Box>
              <Stack gap={2}>
                <Button endIcon={<ReloadArrowFillIcon pathFill={colorPalette.inverted.invertedBg} />}>
                  Re-sync
                </Button>
                <Button color="secondary">Manage CRM</Button>
              </Stack>
            </Stack>
          )}
          {crmStatus !== ECRMStatus.CONNECTED && (
            <Button endIcon={<GitBranchLineIcon pathFill={colorPalette.inverted.invertedBg} />}>
              Connect CRM
            </Button>
          )}
        </Stack>
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
