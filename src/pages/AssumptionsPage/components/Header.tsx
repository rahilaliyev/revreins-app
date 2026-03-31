import type { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Stack, Typography } from '@mui/material';

import { LoadingButton } from 'src/components';

import { StyledNavigateBackButton } from '../styled';

import { ArrowLeftSLineIcon } from 'src/assets/icons';

interface IProps {
  name: string;
  isLoading: boolean;
}

const Header = ({ name, isLoading }: IProps): JSX.Element => {
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
            <Typography variant="h5">{name} |</Typography>
            <Typography ml={1} variant="h5" color="text.secondary">
              Assumptions
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Build and analyze your sales pipeline stages
          </Typography>
        </Box>
      </Stack>
      <Stack gap={4}>
        <Button color="secondary">Save as Draft</Button>
        <LoadingButton loading={isLoading} color="inherit" type="submit">
          Generate the Project
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default Header;
