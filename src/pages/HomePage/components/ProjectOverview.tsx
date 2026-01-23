import { type JSX, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { UI_DATE_FORMAT } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';

import { useGetProjects } from 'src/apis/projects';

import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';

import { ROUTES } from 'src/routes/paths';

import {
  StyledAddIconButton,
  StyledChartIconWrapper,
  StyledCreateProject,
  StyledProjectCard,
} from '../styled';

import CreateNewProjectModal from './CreateNewProjectModal';

import { AddFillIcon, DotIcon, InsertChartIcon } from 'src/assets/icons';

const ProjectOverview = (): JSX.Element => {
  const navigate = useNavigate();
  const [isOpenNewProjectModal, setIsOpenNewProjectModal] = useState(false);
  const { data } = useGetProjects();

  const handleOpen = (): void => setIsOpenNewProjectModal(true);
  const handleClose = (): void => setIsOpenNewProjectModal(false);

  const handleNavigateToProjectPage = (): void => {
    navigate(ROUTES.DEFAULT.PROJECTS.PATH);
  };

  const projectCount = data?.pagination?.total || 0;

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
          <Button color="secondary" onClick={handleNavigateToProjectPage}>
            See all
          </Button>
          <Button color="inherit" endIcon={<AddFillIcon />} onClick={handleOpen}>
            New Project
          </Button>
        </Box>
      </Stack>
      <Grid container spacing={4} marginTop={4}>
        {projectCount === 0 ? (
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
        ) : (
          data?.data?.slice(0, 3)?.map((el) => (
            <Grid size={4} key={el?.id}>
              <StyledProjectCard>
                <Stack justifyContent="space-between">
                  <StyledChartIconWrapper>
                    <InsertChartIcon />
                  </StyledChartIconWrapper>
                  <Chip variant="filled" color="primary" label="Published" icon={<DotIcon />} />
                </Stack>
                <Typography variant="body1" fontWeight={500} mt={3.5}>
                  {el?.name}
                </Typography>
                <Stack justifyContent="space-between" my={3}>
                  <Typography variant="body1" color="text.secondary">
                    Last updated
                  </Typography>
                  <Typography variant="body1">{dayjs(el?.updated_at).format(UI_DATE_FORMAT)}</Typography>
                </Stack>
                <Stack justifyContent="space-between" my={3}>
                  <Typography variant="body1" color="text.secondary">
                    Forecasts
                  </Typography>
                  <Typography variant="body1">-</Typography>
                </Stack>
              </StyledProjectCard>
            </Grid>
          ))
        )}
      </Grid>
      <CreateNewProjectModal isOpenNewProjectModal={isOpenNewProjectModal} handleClose={handleClose} />
    </Box>
  );
};

export default ProjectOverview;
