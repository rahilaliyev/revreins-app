import { type JSX, useState } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';

import { StyledAddIconButton, StyledCreateProject } from '../styled';

import { AddFillIcon } from 'src/assets/icons';

const ProjectOverview = (): JSX.Element => {
  const [projectCount] = useState(0);
  const [isOpenNewProjectModal, setIsOpenNewProjectModal] = useState(false);

  const handleOpen = (): void => setIsOpenNewProjectModal(true);

  return (
    <Box component="section" my={6}>
      <Stack justifyContent="space-between">
        <Box>
          <Typography variant="subtitle1">Project Overview</Typography>
          <Typography variant="caption1" color="text.secondary" marginTop={0.5}>
            {projectCount === 0 ? 'No Projects' : `${projectCount} projects total`}
          </Typography>
        </Box>
        <Box display="flex" gap={4}>
          <Button color="secondary">See all</Button>
          <Button color="inherit" endIcon={<AddFillIcon />} onClick={handleOpen}>
            New Project
          </Button>
        </Box>
      </Stack>
      <Grid container spacing={2} marginTop={4}>
        <Grid size={4}>
          <StyledCreateProject
            variant="text"
            color="inherit"
            sx={{ whiteSpace: 'initial' }}
            onClick={handleOpen}
          >
            <StyledAddIconButton>
              <AddFillIcon pathFill={colorPalette.inverted.invertedBlack} />
            </StyledAddIconButton>
            <Typography variant="body1" color="text.primary" mt={3} mb={6} fontWeight={600}>
              Create New Project
            </Typography>
            <Typography variant="body1" color="text.secondary" width="60%" textAlign="center">
              Start a new sales forecast for a region or market.
            </Typography>
          </StyledCreateProject>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectOverview;
