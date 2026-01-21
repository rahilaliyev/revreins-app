import type { JSX } from 'react';

import { useGetProjects } from 'src/apis/projects';

const ProjectsPage = (): JSX.Element => {
  const { data: _data } = useGetProjects();
  return <div>Projects Page</div>;
};

export default ProjectsPage;
