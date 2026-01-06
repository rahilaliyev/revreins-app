import type { JSX } from 'react';

import { Box } from '@mui/material';

import Header from './components/Header';
import { StyledContainer } from './styled';

const NewProjectPage = (): JSX.Element => (
  <Box>
    <Header />
    <StyledContainer>test</StyledContainer>
  </Box>
);
export default NewProjectPage;
