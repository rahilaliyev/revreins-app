import type { JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { MONTH_LETTER_YEAR_WITHOUT_DASH_FORMAT, USER_ROLES } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';

import { useGetUserInfo } from 'src/apis/user';

import { Box, Button, Stack, Typography } from '@mui/material';

import { LoadingWrapper } from 'src/components';
import { ROUTES } from 'src/routes/paths';
import { removeAuthCookies } from 'src/utils';

import { StyledAvatar, StyledMainInfoSectionWrapper } from '../styled';

import { ClockIcon, EmailIcon, LogoutBoxRLineIcon, PersonPinIcon } from 'src/assets/icons';

const MainInfoSection = (): JSX.Element => {
  const { data, isLoading } = useGetUserInfo();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    removeAuthCookies();
    navigate(ROUTES.AUTH.SIGNIN.PATH);
  };

  const handleNavigateSetting = (): void => {
    navigate(ROUTES.DEFAULT.SETTING.PATH);
  };

  return (
    <StyledMainInfoSectionWrapper>
      <LoadingWrapper isLoading={isLoading}>
        <StyledAvatar>{data?.tenant_user?.avatar ?? data?.user?.name?.[0]}</StyledAvatar>
        <Box>
          <Typography variant="h5">{data?.user?.name}</Typography>
          <Typography color="text.secondary" my={2} fontWeight={500}>
            {USER_ROLES?.find((el) => el.value === data?.tenant_user?.role)?.label ?? ''}
          </Typography>
          <Stack gap={6}>
            <Stack gap={2}>
              <EmailIcon />
              <Typography variant="body2">{data?.user?.email} </Typography>
            </Stack>
            <Stack gap={2}>
              <PersonPinIcon />
              <Typography variant="body2">
                {USER_ROLES?.find((el) => el.value === data?.tenant_user?.role)?.label ?? ''}
              </Typography>
            </Stack>
            <Stack gap={2}>
              <ClockIcon />
              <Typography variant="body2">
                Joined {dayjs(data?.user?.created_at).format(MONTH_LETTER_YEAR_WITHOUT_DASH_FORMAT)}
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={4} mt={4}>
            <Button size="small" color="secondary" onClick={handleNavigateSetting}>
              Change Information
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={handleLogout}
              endIcon={<LogoutBoxRLineIcon width={16} height={16} pathFill={colorPalette.error.main} />}
            >
              Logout
            </Button>
          </Stack>
        </Box>
      </LoadingWrapper>
    </StyledMainInfoSectionWrapper>
  );
};

export default MainInfoSection;
