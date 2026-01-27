import { type JSX, type SyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { useGetProjectDetailById } from 'src/apis/projects';
import type { IProject } from 'src/apis/projects/types';

import { Box, Tab, Tabs, Typography } from '@mui/material';

import { CustomTabPanel } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { useLocalStorage } from 'src/hooks';
import { ROUTES } from 'src/routes/paths';
import { a11yProps } from 'src/utils';

import BasicSetupTab from './components/BasicSetupTab';
import FilterConditions from './components/FilterConditions';
import Header from './components/Header';
import InformationModal from './components/InformationModal';
import LeftSidebar from './components/LeftSidebar';
import { StyledContainer, StyledStagesSidebar } from './styled';
import { type TFormData, validationSchema } from './validationSchema';

const NewProjectPage = (): JSX.Element => {
  const location = useLocation();

  const [value, setValue] = useState(0);
  const [isInformationModal, setIsInformationModal] = useState(false);
  const [hideNewProjectInfoModal] = useLocalStorage('hideNewProjectInfoModal', false);
  const [activeStage, setActiveStage] = useState<number>();

  const { data = {} as IProject } = useGetProjectDetailById(location.state);

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: 'Lead Created', crmObject: 'Lead', dateField: 'value', groups: [] },
  });

  useEffect(() => {
    if (!data.stages?.length) {
      setActiveStage(undefined);
      return;
    }

    const activeStageExists = data.stages.some((stage) => stage.id === activeStage);

    if (!activeStageExists) {
      setActiveStage(data.stages[0].id);
      return;
    }

    const stage = data.stages.find((el) => el.id === activeStage);
    if (stage) {
      formBag.setValue('name', stage.name);
    }
  }, [data.stages, activeStage]);

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

  if (!location.state) {
    return <Navigate to={ROUTES.DEFAULT.PROJECTS.PATH} />;
  }

  return (
    <Box height="100%">
      <Header projectName={data?.name} stages={data?.stages} />
      <StyledContainer>
        <LeftSidebar
          stages={data.stages}
          activeStage={activeStage}
          setActiveStage={setActiveStage}
          projectId={data.id}
        />
        <StyledStagesSidebar width="69%">
          <Typography variant="body1" fontWeight={500}>
            Configure: {data.stages?.find((stage) => stage.id === activeStage)?.name}
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
              </Tabs>
              <CustomTabPanel value={value} index={0}>
                <BasicSetupTab />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <FilterConditions />
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
