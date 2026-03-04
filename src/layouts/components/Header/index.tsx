import type { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';

import { useGetUserInfo } from 'src/apis/user';

import { AppBar, Avatar, Button, Divider, IconButton, Stack, Typography } from '@mui/material';

import { ROUTES } from 'src/routes/paths';
import { generateRandomId, getPageTitle } from 'src/utils';

import Notifications from '../Notifications';

import { GlobalLineIcon, QuestionLineIcon, User6LineIcon } from 'src/assets/icons';

const Header = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data } = useGetUserInfo();

  const pageTitle = getPageTitle(location.pathname, data?.user?.name);
  const titleParts = pageTitle.split(' / ');

  const handleNavigateProfilePage = (): void => {
    navigate(ROUTES.DEFAULT.USER_PROFILE.PATH);
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
          <Notifications />
          <Button
            variant="text"
            color="secondary"
            sx={{ gap: 4, ml: 1.5, mr: 2.5 }}
            onClick={handleNavigateProfilePage}
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
      </Stack>
    </AppBar>
  );
};

export default Header;
