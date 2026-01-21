import type { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Button, Stack, Typography } from '@mui/material';

import { ROUTES } from 'src/routes/paths';

import { StyledNavigateBackButton } from '../styled';

import { ArrowLeftSLineIcon } from 'src/assets/icons';

interface IProps {
  projectName?: string;
}

const Header = ({ projectName }: IProps): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateBack = (): void => {
    navigate(-1);
  };

  const handleNavigateAssumptions = (): void => {
    navigate(ROUTES.DEFAULT.PROJECTS.NEW_PROJECT.ASSUMPTIONS.PATH, { state: { name: location.state?.name } });
  };

  return (
    <Stack padding={[4, 6]} justifyContent="space-between">
      <Stack>
        <StyledNavigateBackButton onClick={handleNavigateBack}>
          <ArrowLeftSLineIcon />
        </StyledNavigateBackButton>
        <Box>
          <Stack>
            <Typography variant="h5">{projectName} |</Typography>
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
        <Button color="inherit" onClick={handleNavigateAssumptions}>
          Generate Assumptions
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
