import type { JSX } from 'react';

import ProjectOverview from './components/ProjectOverview';
import Widgets from './components/Widgets';
import { StyledHomePageContainer } from './styled';

const HomePage = (): JSX.Element => (
  <StyledHomePageContainer>
    <Widgets />
    <ProjectOverview />
  </StyledHomePageContainer>
);

export default HomePage;
