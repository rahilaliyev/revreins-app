import { type JSX, type SyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from 'src/contants';
import { ECRMObjectType, EStageAddEditMode } from 'src/types/enums';

import { useGetProjectDetailById } from 'src/apis/projects';
import type { IProject, IUiStage } from 'src/apis/projects/types';
import { useAddStageMutation, useEditStageMutation } from 'src/apis/stages';
import { useCreateStageFilterMutation } from 'src/apis/stagesFilters';

import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material';

import { CustomTabPanel } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { useLocalStorage } from 'src/hooks';
import { a11yProps } from 'src/utils';

import BasicSetupTab from './components/BasicSetupTab';
import FilterConditions from './components/FilterConditions';
import Header from './components/Header';
import InformationModal from './components/InformationModal';
import LeftSidebar from './components/LeftSidebar';
import { StyledContainer, StyledStagesSidebar } from './styled';
import { type TFormData, validationSchema } from './validationSchema';

const StagesPage = (): JSX.Element => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [value, setValue] = useState(0);
  const [isInformationModal, setIsInformationModal] = useState(false);
  const [hideNewProjectInfoModal] = useLocalStorage('hideNewProjectInfoModal', false);
  const [activeStage, setActiveStage] = useState<number>();
  const [stages, setStages] = useState<IUiStage[]>([]);

  const { data = {} as IProject } = useGetProjectDetailById(id ?? '');
  const { mutate: addStageMutation } = useAddStageMutation();
  const { mutate: editStageMutation } = useEditStageMutation();
  const { mutate: createFilters } = useCreateStageFilterMutation();

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: '', crmObject: ECRMObjectType.LEAD, dateField: 0, groups: [] },
  });

  useEffect(() => {
    if (!data.stages?.length) {
      setStages([]);
      setActiveStage(undefined);
      return;
    }

    const mappedStages = data.stages.map((el) => ({
      ...el,
      mode: EStageAddEditMode.EDIT,
      order: el.order,
    }));

    setStages(mappedStages);

    setActiveStage((current) => {
      if (!current || !data.stages.some((s) => s.id === current)) {
        return data.stages[0]?.id;
      }
      return current;
    });
  }, [data.stages]);

  useEffect(() => {
    if (!activeStage) {
      return;
    }

    const stage = data.stages?.find((el) => el.id === activeStage);

    if (stage) {
      formBag.reset({
        name: stage.name,
        crmObject: stage.crm_object,
        dateField: stage.date_field_id ?? 0,
        groups: [],
      });
    }
  }, [activeStage, data.stages, formBag]);

  useEffect(() => {
    if (!hideNewProjectInfoModal) {
      setIsInformationModal(true);
    }
  }, [hideNewProjectInfoModal]);

  const handleModalClose = (): void => setIsInformationModal(false);

  const handleChange = (_: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  const handleSubmit = (data: TFormData): void => {
    const setupPayload = {
      name: data.name,
      crm_object_id: Number(data.crmObject),
      date_field_id: data.dateField,
      project_id: Number(id),
    };

    const currentStage = stages.find((el) => el.id === activeStage);

    if (currentStage?.mode === EStageAddEditMode.EDIT && activeStage) {
      editStageMutation(
        {
          stageId: activeStage,
          ...setupPayload,
        },
        {
          onSuccess: () => handleSuccessFormSubmit(),
        },
      );
    } else if (currentStage?.mode === EStageAddEditMode.ADD && activeStage) {
      addStageMutation(setupPayload, {
        onSuccess: (res) => {
          setActiveStage(res.project_stage.id);
          createFilters({
            groups: data.groups,
            stageId: res.project_stage.id,
          });
          handleSuccessFormSubmit();
        },
      });
    }
  };

  const handleSuccessFormSubmit = (): void => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.PROJECTS, id],
    });
  };

  return (
    <Box height="100%">
      <Header projectName={data?.name} stages={data?.stages} id={data?.id} />
      <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
        <StyledContainer>
          <LeftSidebar
            stages={stages}
            activeStage={activeStage}
            setActiveStage={setActiveStage}
            projectId={data.id}
            setStages={setStages}
          />
          <StyledStagesSidebar width="69%">
            <Stack justifyContent="space-between">
              <Typography fontWeight={500}>
                Configure: {stages?.find((stage) => stage.id === activeStage)?.name}
              </Typography>
              <Button
                color="inherit"
                size="small"
                sx={{ borderRadius: (theme) => theme.spacing(2) }}
                type="submit"
              >
                Save
              </Button>
            </Stack>
            <Box width="100%" mt={6}>
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
            </Box>
          </StyledStagesSidebar>
        </StyledContainer>
      </CustomFormProvider>
      <InformationModal open={isInformationModal} onClose={handleModalClose} />
    </Box>
  );
};
export default StagesPage;
