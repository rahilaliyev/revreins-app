import type { JSX } from 'react';
import dayjs from 'dayjs';
import { MONTH_LETTER_YEAR_WITHOUT_DASH_FORMAT, USER_ROLES } from 'src/contants';

import { useGetUserInfo } from 'src/apis/user';

import { Box, Stack, Typography } from '@mui/material';

import { LoadingWrapper } from 'src/components';

import { StyledAvatar, StyledMainInfoSectionWrapper } from '../styled';

import { ClockIcon, EmailIcon, PersonPinIcon } from 'src/assets/icons';

const MainInfoSection = (): JSX.Element => {
  const { data, isLoading } = useGetUserInfo();

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
        </Box>
      </LoadingWrapper>
    </StyledMainInfoSectionWrapper>
  );
};

export default MainInfoSection;
