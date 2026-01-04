import type { JSX } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';

import {
  StyledCompanyIconWrapper,
  StyledCompanyTeamInfo,
  StyledIconWrapper,
  StyledPublicLayout,
  StyledUserDetailWrapper,
} from '../styled';

import { MagicFillIcon } from 'src/assets/icons';

const Logo = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1249 0.00574224C15.0855 0.00462661 15.0715 0.0566464 15.1061 0.0755208C16.3412 0.808634 17.3236 1.79834 18.0285 3.03646C18.846 4.44287 19.2308 6.06144 19.2309 7.84375C19.2309 9.62549 18.8466 11.2398 18.0233 12.6302C17.4142 13.6585 16.6005 14.4991 15.6069 15.1589C15.5488 15.1975 15.529 15.2738 15.5622 15.335L20.2193 23.93C20.2427 23.9731 20.2879 24 20.3371 24H23.866C23.9673 24 24.0319 23.8922 23.9838 23.8033L19.1155 14.8167C19.0782 14.7479 19.1081 14.6622 19.1795 14.6298C19.2059 14.6177 19.2323 14.6056 19.2586 14.5933C20.5555 13.9812 21.5442 13.1007 22.2246 11.9517C22.9049 10.8027 23.2451 9.43355 23.2451 7.84428C23.2451 6.25505 22.9049 4.87516 22.2246 3.70471C21.5548 2.52348 20.5821 1.61076 19.3064 0.966431C18.1389 0.371837 16.7451 0.0515949 15.1249 0.00574224ZM7.79257 16.8281C7.8422 16.8281 7.88776 16.8555 7.91093 16.8992L10.345 21.4932C10.3552 21.5124 10.3605 21.5338 10.3605 21.5555V23.8667C10.3605 23.9403 10.3006 24 10.2267 24H6.48054C6.40662 24 6.3467 23.9403 6.3467 23.8667V16.9615C6.3467 16.8878 6.40662 16.8281 6.48054 16.8281H7.79257Z"
      fill="#66BB6A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9693 10.1953L12.2308 9.8255C12.154 9.95654 12.0666 10.0803 11.9693 10.1953ZM17.8917 7.84429L17.8779 8.38985C17.8871 8.21099 17.8917 8.02914 17.8917 7.84429Z"
      fill="#66BB6A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8917 7.84429L17.8779 8.38985C17.8871 8.21099 17.8917 8.02914 17.8917 7.84429Z"
      fill="#0A180B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8917 7.84429L17.8779 8.38985C17.8871 8.21099 17.8917 8.02914 17.8917 7.84429Z"
      fill="#E5E5E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2308 9.8255C12.154 9.95654 12.0666 10.0803 11.9693 10.1953L12.2308 9.8255Z"
      fill="#66BB6A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8769 8.42969C17.8773 8.42291 17.8773 8.41612 17.8774 8.40932C17.8774 8.40966 17.8774 8.40898 17.8774 8.40932L17.8769 8.42969Z"
      fill="#0A180B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.728 6.03713C17.7354 6.07563 17.7426 6.11428 17.7494 6.1531C17.8247 6.5775 17.8702 7.0203 17.8857 7.48156C17.8879 7.54746 17.8895 7.61373 17.8905 7.68038C17.8913 7.73477 17.8917 7.7894 17.8917 7.84429L17.8779 8.38985C17.8776 8.39633 17.8775 8.40283 17.8774 8.40932L17.8769 8.42969C17.8732 8.49573 17.8689 8.56136 17.8639 8.62658C17.8411 8.92467 17.8046 9.21418 17.7558 9.4952C17.6479 10.1152 17.4759 10.6936 17.2398 11.2307C17.1304 11.4795 17.0073 11.7195 16.8705 11.9505C16.1903 13.0993 15.2029 13.9817 13.9063 14.5938C13.8361 14.6266 13.765 14.6585 13.6932 14.6895L18.3108 23.2134C18.5032 23.5687 18.2449 24 17.8396 24H13.5103C13.3118 24 13.1296 23.8906 13.0369 23.7157L8.67972 15.4953H5.00713V23.4667C5.00713 23.7612 4.76746 24 4.4718 24H0.535339C0.239679 24 0 23.7612 0 23.4667V0.533333C0 0.238781 0.23968 0 0.53534 0H9.3606C11.1572 0 12.6883 0.321851 13.9533 0.966146C15.229 1.61044 16.2008 2.52452 16.8705 3.70573C17.2786 4.40776 17.5645 5.18474 17.728 6.03713ZM11.9693 10.1953C12.0666 10.0803 12.154 9.95654 12.2308 9.8255C12.5497 9.29933 12.7092 8.63893 12.7092 7.84429C12.7092 7.03893 12.5497 6.36779 12.2308 5.83087C11.9225 5.28322 11.4494 4.8698 10.8116 4.5906C10.6694 4.52598 10.5191 4.46856 10.3605 4.41834C9.82363 4.24828 9.19284 4.1608 8.46818 4.15592L8.4037 4.1557H5.54248L5.51872 4.15622C5.46074 4.15874 5.40516 4.17045 5.3534 4.18992C5.34226 4.19411 5.33129 4.19867 5.32052 4.20356C5.14609 4.28284 5.02184 4.45268 5.00835 4.65276L5.00713 4.68904L5.00835 11.4201L5.3534 11.4193L8.41964 11.4201L8.50179 11.4198C9.21594 11.4141 9.83552 11.3338 10.3605 11.1788C10.5196 11.1319 10.6699 11.0781 10.8116 11.0174C10.9312 10.9671 11.045 10.9122 11.153 10.8529C11.4773 10.6745 11.7495 10.4554 11.9693 10.1953Z"
      fill="#0A180B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3605 5.85295C10.3322 5.83918 10.303 5.82569 10.2729 5.8125C9.86244 5.62594 9.24788 5.48958 8.40389 5.48958H6.3467V10.0859H8.41958C9.27557 10.0859 9.87727 9.96545 10.2833 9.79167C10.3098 9.78054 10.3355 9.76921 10.3605 9.75767C10.7221 9.5911 10.9412 9.38266 11.0754 9.15365C11.2361 8.88798 11.3707 8.46448 11.3707 7.84375C11.3707 7.20951 11.2441 6.79004 11.078 6.51042L11.0623 6.48438C10.9225 6.2361 10.7093 6.02263 10.3605 5.85295Z"
      fill="#66BB6A"
    />
  </svg>
);

const CompanyInformation = (): JSX.Element => {
  console.log();

  return (
    <StyledPublicLayout>
      <StyledUserDetailWrapper>
        <Stack padding={6} sx={{ bgcolor: colorPalette.primary.bgSecondary }}>
          <StyledIconWrapper>
            <MagicFillIcon pathFill={colorPalette.background.main} />
          </StyledIconWrapper>
          <Box ml={6}>
            <Typography variant="h5" fontWeight={500}>
              You&apos;re Invited!
            </Typography>
            <Typography variant="body2">Join Rob’s CEO team</Typography>
          </Box>
        </Stack>
        <Box padding={6} paddingTop={4}>
          <StyledCompanyTeamInfo>
            <Stack marginBottom={3}>
              <StyledCompanyIconWrapper>
                <Logo />
              </StyledCompanyIconWrapper>
              <Typography variant="body1">Rob’s SEO</Typography>
            </Stack>
            <Stack>
              <Box width="50%">
                <Typography variant="body1" color="text.secondary">
                  Team Size
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  12 members
                </Typography>
              </Box>
              <Box width="50%">
                <Typography variant="body1" color="text.secondary">
                  Team Size
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  Admin
                </Typography>
              </Box>
            </Stack>
          </StyledCompanyTeamInfo>
          <Divider />
          <Box width="100%" mt={4}>
            <Typography variant="body1" color="text.secondary">
              Invited by
            </Typography>
            <Stack mt={2.5}>
              <Avatar />
              <Box ml={3}>
                <Typography variant="body2">Rob Bobbin</Typography>
                <Typography variant="caption1" color="text.secondary">
                  robbobbin@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </StyledUserDetailWrapper>
    </StyledPublicLayout>
  );
};

export default CompanyInformation;
