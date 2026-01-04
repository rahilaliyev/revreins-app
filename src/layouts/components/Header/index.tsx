import type { JSX } from 'react';
import { useLocation } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';

import { Avatar, Badge, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';

import { getPageTitle } from 'src/utils';

import { GlobalLineIcon, Notification3LineIcon, QuestionLineIcon, User6LineIcon } from 'src/assets/icons';

const Header = (): JSX.Element => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <Stack py={2} px={4} justifyContent="space-between">
      <Typography variant="body2" color="text.secondary">
        {pageTitle}
      </Typography>
      <Stack>
        <IconButton>
          <Badge color="error" variant="dot">
            <Notification3LineIcon />
          </Badge>
        </IconButton>
        <Button variant="text" color="secondary" sx={{ gap: 4, ml: 1.5, mr: 2.5 }}>
          <Typography variant="subtitle1">John Doe</Typography>
          <Avatar sx={{ bgcolor: colorPalette.primary.bg }}>
            <User6LineIcon pathFill={colorPalette.primary.main} />
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
  );
};

export default Header;
