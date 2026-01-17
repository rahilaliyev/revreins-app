import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box } from '@mui/material';

import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import Header from './components/Header';
import NewClientAssumptions from './components/NewClientAssumptions';
import ProjectSettings from './components/ProjectSettings';
import RecurringRevenueAssumptions from './components/RecurringRevenueAssumptions';
import { StyledContainer } from './styled';
import { type TFormData, validationSchema } from './validationSchema';

const AssumptionsPage = (): JSX.Element => {
  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {},
  });

  const handleSubmit = (data: TFormData): void => {};

  return (
    <Box height="100%">
      <Header />
      <StyledContainer>
        <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
          <ProjectSettings />
          <NewClientAssumptions />
          <RecurringRevenueAssumptions />
        </CustomFormProvider>
      </StyledContainer>
    </Box>
  );
};

export default AssumptionsPage;
