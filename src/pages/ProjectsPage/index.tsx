import type { JSX } from 'react';

import DeleteLists from './components/DeleteLists';
import ProjectLists from './components/ProjectLists';
import { StyledPageContainer } from './styled';

const ProjectsPage = (): JSX.Element => (
  <StyledPageContainer>
    <ProjectLists />
    <DeleteLists />
  </StyledPageContainer>
);

export default ProjectsPage;
