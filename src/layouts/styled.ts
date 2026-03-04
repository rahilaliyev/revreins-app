import { colorPalette } from 'src/theme/colorpalette';
import { ENotificationActionType } from 'src/types/enums';

import { alpha, Box, type BoxProps, Stack, styled, Typography } from '@mui/material';

import BgImage from 'src/assets/images/login-bg-image.webp';

interface INotificationColors {
  background: string;
  iconBg: string;
  unreadIndicator: string;
}

const NOTIFICATION_COLOR_MAP: Record<ENotificationActionType, INotificationColors> = {
  [ENotificationActionType.CREATE]: {
    background: colorPalette.primary.bgSecondary,
    iconBg: colorPalette.primary.bg,
    unreadIndicator: colorPalette.primary.main,
  },
  [ENotificationActionType.DELETE]: {
    background: colorPalette.error.bg,
    iconBg: colorPalette.error.bgHover,
    unreadIndicator: colorPalette.error.main,
  },
  [ENotificationActionType.INFO]: {
    background: colorPalette.info.bg,
    iconBg: colorPalette.info.bgHover,
    unreadIndicator: colorPalette.info.main,
  },
};

const getNotificationColors = (type: ENotificationActionType): INotificationColors =>
  NOTIFICATION_COLOR_MAP[type] ?? { background: '', iconBg: '', unreadIndicator: '' };

export const StyledPublicLayout = styled(Box)(() => ({
  backgroundImage: `url(${BgImage})`,
  height: '100vh',
  width: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: theme.spacing(5),

  '& a': {
    color: colorPalette.text.link,
    textDecoration: 'underline',
    transition: 'color 0.2s ease',

    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));

export const StyledMainSection = styled(Box)<BoxProps>(() => ({
  width: '100%',
  height: `calc(100vh - 56px)`,
  overflowY: 'auto',
  overflowX: 'hidden',
}));

export const StyledNotificationWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  border: `1px solid ${alpha('#000', 0.1)}`,
  background: 'white',
  backdropFilter: `blur(${theme.spacing(1.5)})`,
  width: theme.spacing(100),
}));

export const StyledNotificationHeader = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  borderBottom: `1px solid ${alpha('#000', 0.1)}`,
}));

export const StyledNotification = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'unread' && prop !== 'type',
})<{ unread: boolean; type: ENotificationActionType }>(({ theme, unread, type }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  paddingLeft: theme.spacing(5),
  background: unread ? getNotificationColors(type).background : 'none',
  borderBottom: `1px solid ${alpha('#000', 0.1)}`,
}));

export const StyledNotificationIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'type',
})<{ type: ENotificationActionType }>(({ theme, type }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: getNotificationColors(type).iconBg,
  marginRight: theme.spacing(4),
}));

export const StyledNotificationUnread = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'unread' && prop !== 'type',
})<{ unread: boolean; type: ENotificationActionType }>(({ theme, type }) => ({
  width: theme.spacing(1),
  height: theme.spacing(10),
  background: getNotificationColors(type).unreadIndicator,
  position: 'absolute',
  left: 0,
  top: theme.spacing(4),
  borderRadius: '0 50% 50% 0',
}));
