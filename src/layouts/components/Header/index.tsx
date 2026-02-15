import { type JSX, type MouseEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';

import { useGetUserInfo } from 'src/apis/user';

import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

import { ROUTES } from 'src/routes/paths';
import { generateRandomId, getPageTitle, removeAuthCookies } from 'src/utils';

import { GlobalLineIcon, Notification3LineIcon, QuestionLineIcon, User6LineIcon } from 'src/assets/icons';

const Header = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { data } = useGetUserInfo();

  const pageTitle = getPageTitle(location.pathname, data?.user?.name);
  const titleParts = pageTitle.split(' / ');

  const handleMenu = (event: MouseEvent<HTMLElement>): void => setAnchorEl(event.currentTarget);

  const handleLogout = (): void => {
    handleClose();
    removeAuthCookies();
    navigate(ROUTES.AUTH.SIGNIN.PATH);
  };

  const handleNavigateProfilePage = (): void => {
    navigate(ROUTES.DEFAULT.USER_PROFILE.PATH);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Stack py={2} px={4} justifyContent="space-between">
        <Typography variant="body2" component="div">
          {titleParts.map((part, index) => (
            <Typography
              key={generateRandomId()}
              component="span"
              variant="body2"
              color={index === titleParts.length - 1 ? 'text.primary' : 'text.secondary'}
            >
              {part}
              {index < titleParts.length - 1 && ' / '}
            </Typography>
          ))}
        </Typography>

        <Stack>
          <IconButton>
            <Badge color="error" variant="dot">
              <Notification3LineIcon />
            </Badge>
          </IconButton>
          <Button
            variant="text"
            color="secondary"
            sx={{ gap: 4, ml: 1.5, mr: 2.5 }}
            onClick={handleMenu}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <Typography variant="subtitle1">{data?.user?.name}</Typography>
            <Avatar sx={{ bgcolor: colorPalette.primary.bg }}>
              {data?.tenant_user?.avatar ?? <User6LineIcon pathFill={colorPalette.primary.main} />}
            </Avatar>
          </Button>
          <Divider orientation="vertical" flexItem />
          <IconButton sx={{ ml: 6, mr: 3 }}>
            <GlobalLineIcon />
          </IconButton>
          <IconButton>
            <QuestionLineIcon />
          </IconButton>
        </Stack>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleNavigateProfilePage}>My Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Stack>
    </AppBar>
  );
};

export default Header;
