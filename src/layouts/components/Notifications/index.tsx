import { type JSX, type MouseEvent, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import {
  StyledNotification,
  StyledNotificationHeader,
  StyledNotificationIconWrapper,
  StyledNotificationUnread,
  StyledNotificationWrapper,
} from 'src/layouts/styled';
import { colorPalette } from 'src/theme/colorpalette';
import { ENotificationActionType, ENotificationType } from 'src/types/enums';
import type { INotificationActionMapColor } from 'src/types/interfaces';

import { Badge, Box, Button, Chip, IconButton, Popover, Stack, Typography } from '@mui/material';

import { generateRandomId } from 'src/utils';

import {
  ChartIcon,
  DraftIcon,
  Notification3LineIcon,
  PaymentIcon,
  PieChartIcon,
  TimeLineIcon,
  UserFillIcon,
} from 'src/assets/icons';

const NOTIFICATION_MOCK_DATA = [
  {
    title: 'You were invited to a project',
    description: 'Jason Combe invited you to collaborate on the 2026 Toronto Market project.',
    created: '2026-03-03T00:00:00.000000Z',
    type: 'INVITE',
    actionType: 'CREATE',
    hasButton: true,
    unread: true,
  },
  {
    title: 'Q1 2026 Marketing Project Deleted',
    description: 'A Q1 2026 has been deleted. You can still restore if from the ‘Deleted projects’ section.',
    created: '2026-03-03T00:00:00.000000Z',
    type: 'PROJECT',
    actionType: 'DELETE',
    hasButton: true,
    unread: true,
  },
  {
    title: 'Q1 2026 Marketing Project Created',
    description: 'A Q1 2026 has been created successfully.',
    created: '2026-03-03T00:00:00.000000Z',
    type: 'PROJECT',
    actionType: 'CREATE',
    hasButton: false,
    unread: false,
  },
  {
    title: 'New Team Member',
    description: 'Sarah Miller has joined the team.',
    created: '2026-03-03T00:00:00.000000Z',
    type: 'TEAM',
    actionType: 'INFO',
    hasButton: false,
    unread: false,
  },
  {
    title: 'Subscription Renewal',
    description: 'Your subscription will renew automatically in 3 days.',
    created: '2026-03-03T00:00:00.000000Z',
    type: 'PAYMENT',
    actionType: 'INFO',
    hasButton: false,
    unread: false,
  },
  {
    title: 'CRM connected',
    description: 'Close.com CRM connection was established successfully.',
    created: '2026-03-03T00:00:00.000000Z',
    type: 'CRM',
    actionType: 'CREATE',
    hasButton: false,
    unread: false,
  },
];

const getNotificationIcon = (type: ENotificationType, actionType: ENotificationActionType): JSX.Element => {
  const notificationActionMap: Record<ENotificationActionType, INotificationActionMapColor> = {
    [ENotificationActionType.CREATE]: { color: colorPalette.success.main, bg: colorPalette.success.bg },
    [ENotificationActionType.DELETE]: { color: colorPalette.error.main, bg: colorPalette.error.bg },
    [ENotificationActionType.INFO]: { color: colorPalette.info.main, bg: colorPalette.info.bg },
  };

  const notificationMap: Record<ENotificationType, JSX.Element> = {
    [ENotificationType.INVITE]: <DraftIcon pathFill={notificationActionMap[actionType].color} />,
    [ENotificationType.PROJECT]: <ChartIcon pathFill={notificationActionMap[actionType].color} />,
    [ENotificationType.PAYMENT]: <PaymentIcon pathFill={notificationActionMap[actionType].color} />,
    [ENotificationType.TEAM]: <UserFillIcon pathFill={notificationActionMap[actionType].color} />,
    [ENotificationType.CRM]: <PieChartIcon pathFill={notificationActionMap[actionType].color} />,
  };

  return (
    <StyledNotificationIconWrapper type={actionType}> {notificationMap[type]}</StyledNotificationIconWrapper>
  );
};

const Notifications = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isShowDot, setIsShowDot] = useState(false);

  useEffect(() => {
    const hasUnread = NOTIFICATION_MOCK_DATA.some((el) => el.unread);
    setIsShowDot(hasUnread);
  }, []);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
    setIsShowDot(false);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Badge color="error" variant="dot" invisible={!isShowDot}>
          <Notification3LineIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        elevation={0}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            sx: { mt: (theme) => theme.spacing(10) },
          },
        }}
      >
        <StyledNotificationWrapper>
          <StyledNotificationHeader>
            <Typography fontWeight={500} mr={2}>
              Notifications
            </Typography>
            <Chip
              size="small"
              variant="outlined"
              label={
                <Typography variant="caption2">
                  {`${NOTIFICATION_MOCK_DATA.filter((el) => el.unread)?.length} new`}{' '}
                </Typography>
              }
            />
          </StyledNotificationHeader>
          <Box>
            {NOTIFICATION_MOCK_DATA?.map((el) => (
              <StyledNotification
                unread={el.unread}
                type={el.actionType as ENotificationActionType}
                key={generateRandomId()}
              >
                {el.unread && (
                  <StyledNotificationUnread
                    unread={el.unread}
                    type={el.actionType as ENotificationActionType}
                  />
                )}
                <Box>
                  {getNotificationIcon(
                    el.type as ENotificationType,
                    el.actionType as ENotificationActionType,
                  )}
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    {el.title}
                  </Typography>
                  <Typography variant="caption1" mt={0.5} color="text.secondary">
                    {el.description}
                  </Typography>
                  <Stack my={3}>
                    <TimeLineIcon width={12} height={12} pathFill={colorPalette.other.icon} />
                    <Typography color="text.secondary" ml={2} variant="caption3">
                      {dayjs().diff(el.created, 'hours')} hours ago
                    </Typography>
                  </Stack>
                  {el.hasButton && (
                    <Button color="secondary" size="small">
                      Learn more
                    </Button>
                  )}
                </Box>
              </StyledNotification>
            ))}
          </Box>
        </StyledNotificationWrapper>
      </Popover>
    </>
  );
};

export default Notifications;
