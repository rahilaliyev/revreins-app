import type { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Button, Stack, Typography } from '@mui/material';

import { StyledNavigateBackButton } from '../styled';

import { ArrowLeftSLineIcon } from 'src/assets/icons';

const Header = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateBack = (): void => {
    navigate(-1);
  };

  return (
    <Stack padding={[4, 6]} justifyContent="space-between">
      <Stack>
        <StyledNavigateBackButton onClick={handleNavigateBack}>
          <ArrowLeftSLineIcon />
        </StyledNavigateBackButton>
        <Box>
          <Stack>
            <Typography variant="h5">{location.state?.name} |</Typography>
            <Typography ml={1} variant="h5" color="text.secondary">
              Stages
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Build and analyze your sales pipeline stages
          </Typography>
        </Box>
      </Stack>
      <Stack gap={4}>
        <Button color="secondary">Save as Draft</Button>
        <Button color="inherit">Generate Assumptions</Button>
      </Stack>
    </Stack>
  );
};

export default Header;
