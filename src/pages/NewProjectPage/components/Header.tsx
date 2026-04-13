import type { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MIN_ASSUMPTIONS_STAGES_LENGTH } from 'src/contants';
import type { IStage } from 'src/types/interfaces';

import { Box, Button, Stack, Typography } from '@mui/material';

import { ROUTES } from 'src/routes/paths';

import { StyledNavigateBackButton } from '../styled';

import { ArrowLeftSLineIcon } from 'src/assets/icons';

interface IProps {
  projectName?: string;
  stages: IStage[];
  id: number;
}

const Header = ({ projectName, stages, id }: IProps): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateBack = (): void => {
    navigate(-1);
  };

  const handleNavigateAssumptions = (): void => {
    navigate(`${ROUTES.DEFAULT.PROJECTS.ASSUMPTIONS.PATH}/${id}`, {
      state: { name: location.state?.name },
    });
  };

  const minStagesLength = stages?.length < MIN_ASSUMPTIONS_STAGES_LENGTH;

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
          <Typography variant="body2" color={minStagesLength ? 'error' : 'text.secondary'}>
            {minStagesLength
              ? 'Please add 2 or more stages to generate assumptions'
              : 'Build and analyze your sales pipeline stages'}
          </Typography>
        </Box>
      </Stack>
      <Stack gap={4}>
        <Button color="secondary">Save as Draft</Button>
        <Button color="inherit" onClick={handleNavigateAssumptions} disabled={minStagesLength}>
          Generate Assumptions
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
