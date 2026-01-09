import { type JSX, type SyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { IStage } from 'src/types/interfaces';

import { Box, Tab, Tabs, Typography } from '@mui/material';

import { CustomTabPanel } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { useLocalStorage } from 'src/hooks';
import { a11yProps, generateRandomId } from 'src/utils';

import BasicSetupTab from './components/BasicSetupTab';
import Header from './components/Header';
import InformationModal from './components/InformationModal';
import LeftSidebar from './components/LeftSidebar';
import { type TFormData, validationSchema } from './components/validationSchema';
import { StyledContainer, StyledStagesSidebar } from './styled';

const NewProjectPage = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const [isInformationModal, setIsInformationModal] = useState(false);
  const [hideNewProjectInfoModal] = useLocalStorage('hideNewProjectInfoModal', false);
  const [stages, setStages] = useState<IStage[]>([
    {
      id: generateRandomId(),
      name: 'Lead Created',
      creator: 'Lead',
    },
  ]);
  const [activeStage, setActiveStage] = useState('');

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: 'Lead Created', crmObject: 'Lead' },
  });

  useEffect(() => {
    if (!activeStage && !!stages.length) {
      setActiveStage(stages[0].id);
    }
  }, [stages, activeStage]);

  useEffect(() => {
    if (!hideNewProjectInfoModal) {
      setIsInformationModal(true);
    }
  }, [hideNewProjectInfoModal]);

  const handleModalClose = (): void => setIsInformationModal(false);

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  const handleSubmit = (data: TFormData): void => {
    console.log(data);
  };

  return (
    <Box height="100%">
      <Header />
      <StyledContainer>
        <LeftSidebar
          stages={stages}
          setStages={setStages}
          activeStage={activeStage}
          setActiveStage={setActiveStage}
        />
        <StyledStagesSidebar width="69%">
          <Typography variant="body1" fontWeight={500}>
            Configure: {stages.find((stage) => stage.id === activeStage)?.name}
          </Typography>
          <Box width="100%" mt={6}>
            <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
              <Tabs value={value} onChange={handleChange} aria-label="tabs">
                <Tab
                  sx={{ width: (theme) => theme.spacing(36), p: 0 }}
                  label="Basic Setup"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ width: (theme) => theme.spacing(36), p: 0 }}
                  label="Filter Conditions"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ width: (theme) => theme.spacing(36), p: 0 }}
                  label="Preview Query"
                  {...a11yProps(2)}
                />
              </Tabs>
              <CustomTabPanel value={value} index={0}>
                <BasicSetupTab />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </CustomFormProvider>
          </Box>
        </StyledStagesSidebar>
      </StyledContainer>
      <InformationModal open={isInformationModal} onClose={handleModalClose} />
    </Box>
  );
};
export default NewProjectPage;
