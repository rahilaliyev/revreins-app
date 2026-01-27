import type { JSX } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProjectDetailById } from 'src/apis/projects';

import Header from './components/Header';

const ProjectDetailPage = (): JSX.Element => {
  const { id } = useParams();

  const { data } = useGetProjectDetailById(Number(id));

  return <Header name={data?.name} />;
};

export default ProjectDetailPage;
