import { type JSX, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { useLocalStorage } from 'src/hooks';

import Header from './components/Header';
import InformationModal from './components/InformationModal';
import { StyledContainer } from './styled';

const NewProjectPage = (): JSX.Element => {
  const [isInformationModal, setIsInformationModal] = useState(true);
  const [hideNewProjectInfoModal] = useLocalStorage('hideNewProjectInfoModal', false);

  useEffect(() => {
    if (hideNewProjectInfoModal) {
      setIsInformationModal(false);
    }
  }, [hideNewProjectInfoModal]);

  const handleModalClose = (): void => setIsInformationModal(false);

  return (
    <Box height="100%">
      <Header />
      <StyledContainer>test</StyledContainer>
      <InformationModal open={isInformationModal} onClose={handleModalClose} />
    </Box>
  );
};
export default NewProjectPage;
