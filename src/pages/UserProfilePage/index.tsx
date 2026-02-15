import type { JSX } from 'react';

import ActivitySection from './components/ActivitySection';
import MainInfoSection from './components/MainInfoSection';
import { StyledContainer } from './styled';

const UserProfilePage = (): JSX.Element => (
  <StyledContainer>
    <MainInfoSection />
    <ActivitySection />
  </StyledContainer>
);

export default UserProfilePage;
