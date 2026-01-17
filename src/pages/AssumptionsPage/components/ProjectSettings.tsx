import React, { type JSX } from 'react';

import { Typography } from '@mui/material';

import { StyledComponentWrapper } from '../styled';

const ProjectSettings = (): JSX.Element => (
  <StyledComponentWrapper>
    <Typography fontWeight={500} variant="subtitle1">
      Project Settings
    </Typography>
    <Typography fontWeight={500} variant="body1" color="text.secondary" mb={8}>
      Select the settings for your project. You will be able to change them later.
    </Typography>
  </StyledComponentWrapper>
);

export default ProjectSettings;
