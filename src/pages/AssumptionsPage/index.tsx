import { type JSX, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { DATE_FORMAT } from 'src/contants';

import { useGenerateAssumptionMutation } from 'src/apis/assumptions';
import type { IAssumptionGeneratePayload } from 'src/apis/assumptions/types';
import type { ISegmentResponse } from 'src/apis/breakdowns/types';
import { useGetProjectDetailById } from 'src/apis/projects';
import type { IProject, IProjectResponse } from 'src/apis/projects/types';
import { useGetStageConversions } from 'src/apis/stageConversions';

import { Box } from '@mui/material';

import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { ROUTES } from 'src/routes/paths';

import Header from './components/Header';
import NewClientAssumptions from './components/NewClientAssumptions';
import ProjectSettings from './components/ProjectSettings';
import RecurringRevenueAssumptions from './components/RecurringRevenueAssumptions';
import { StyledContainer } from './styled';
import { type TFormData, type TStageConversionField, validationSchema } from './validationSchema';

const AssumptionsPage = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [segmentData, setSegmentData] = useState<ISegmentResponse[] | null>(null);
  const { data = {} as IProject } = useGetProjectDetailById(id ?? '');
  const { data: { stage_conversions: stageConversions } = {} } = useGetStageConversions(id ?? '');

  const { mutate: generateAssumptionMutation, isPending: isGeneratePending } =
    useGenerateAssumptionMutation();

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      currencyId: 1,
      startingDate: '',
      enableProjectBreakdown: false,
      segments: [{ name: 'Segment 1', crmLeadCustomFieldChoiceId: 0 }],
    },
  });

  useEffect(() => {
    if (data) {
      formBag.reset({
        currencyId: data.currency_id,
        startingDate: dayjs(data.start_date).format(DATE_FORMAT),
      });
    }
  }, [data, formBag]);

  useEffect(() => {
    if (!stageConversions?.length) {
      return;
    }

    const seededConversions: TStageConversionField[] = stageConversions.map((sc) => ({
      stageFromId: sc.stage_from_id,
      stageToId: sc.stage_to_id,
      assumptionCategoryId: sc.assumption_category_id,
      conversionSegments: (segmentData ?? []).map((sgmnt) => ({
        segmentId: sgmnt.id,
        stageCycleMonths: null,
        rateMode: null,
        manualRate: null,
      })),
    }));

    formBag.setValue('stageConversions', seededConversions, { shouldDirty: false });
  }, [stageConversions, segmentData, formBag]);

  const handleSuccessResponseGenerate = (res: IProjectResponse): void => {
    navigate(`${ROUTES.DEFAULT.PROJECTS.PATH}/${res.project.id}`);
  };

  const handleGenerateAssumption = (formData: TFormData): void => {
    if (!stageConversions?.length) {
      return;
    }

    const stageConversionValues = formData.stageConversions ?? [];
    const enableBreakdown = formData.enableProjectBreakdown;

    const payload: IAssumptionGeneratePayload = {
      project_id: Number(id),
      stage_conversions: stageConversionValues.map((sc) => ({
        assumption_category_id: sc.assumptionCategoryId ?? 0,
        stage_from_id: sc.stageFromId,
        stage_to_id: sc.stageToId,
        conversion_segments: enableBreakdown
          ? sc.conversionSegments.map((seg) => ({
              segment_id: seg.segmentId,
              stage_cycle_months: seg.stageCycleMonths ?? 0,
              rate_mode: seg.rateMode ?? '',
              manual_rate: seg.manualRate ?? 0,
            }))
          : [],
      })),
    };

    generateAssumptionMutation(payload, {
      onSuccess: handleSuccessResponseGenerate,
    });
  };

  return (
    <Box height="100%">
      <CustomFormProvider form={formBag} onSubmit={handleGenerateAssumption}>
        <Header name={data.name} isLoading={isGeneratePending} />
        <StyledContainer>
          <ProjectSettings setSegmentData={setSegmentData} />
          <NewClientAssumptions segmentData={segmentData ?? []} />

          <RecurringRevenueAssumptions />
        </StyledContainer>
      </CustomFormProvider>
    </Box>
  );
};

export default AssumptionsPage;
