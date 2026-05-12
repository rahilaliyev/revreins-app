import { type JSX, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { DATE_FORMAT } from 'src/contants';

import { useGenerateAssumptionMutation } from 'src/apis/assumptions';
import type { IAssumptionGeneratePayload } from 'src/apis/assumptions/types';
import { useGetProjectBreakdowns } from 'src/apis/breakdowns';
import type { ISegmentResponse } from 'src/apis/breakdowns/types';
import { useGetProjectDetailById } from 'src/apis/projects';
import type { IProject, IProjectResponse } from 'src/apis/projects/types';
import { useGetStageConversions } from 'src/apis/stageConversions';

import { Box } from '@mui/material';

import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { ROUTES } from 'src/routes/paths';

import Header from './components/Header';
import ProjectSettings from './components/ProjectSettings';
import RecurringRevenueAssumptions from './components/RecurringRevenueAssumptions';
import StageConversions from './components/StageConversions';
import { StyledContainer } from './styled';
import { type TFormData, type TStageConversionField, validationSchema } from './validationSchema';

const AssumptionsPage = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [segmentData, setSegmentData] = useState<ISegmentResponse[] | null>(null);
  const { data = {} as IProject } = useGetProjectDetailById(id ?? '');
  const { data: { stage_conversions: stageConversions } = {} } = useGetStageConversions(id ?? '');
  const { data: { data: segments } = {} } = useGetProjectBreakdowns(id ?? '');
  const { mutate: generateAssumptionMutation, isPending: isGeneratePending } =
    useGenerateAssumptionMutation();

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
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
      assumptionCategoryId: sc.assumption_category_id ?? null,
      conversionId: sc.id,
      conversionSegments: (segmentData ?? []).map((sgmnt) => ({
        segmentId: sgmnt.id,
        stageCycleMonths: null,
        averageMonth: null,
        manualRate: null,
        calculatedRate: null,
      })),
    }));

    const growthRateSegments = (segmentData ?? []).map((sgmnt) => ({
      segmentId: sgmnt.id,
      growthRate: sgmnt.growth_rate,
    }));

    const averageOrderValueSegments = (segmentData ?? []).map((sgmnt) => ({
      segmentId: sgmnt.id,
      value: sgmnt.order_value,
    }));

    formBag.setValue('stageConversions', seededConversions, { shouldDirty: false });
    formBag.setValue('growthRateSegments', growthRateSegments, { shouldDirty: false });
    formBag.setValue('averageOrderValueSegments', averageOrderValueSegments, { shouldDirty: false });
  }, [stageConversions, segmentData, formBag]);

  useEffect(() => {
    if (segments?.length) {
      formBag.setValue('enableProjectBreakdown', true, { shouldDirty: false });
      const lastSegment = segments.at(-1);
      setSegmentData(lastSegment?.segments ?? []);
      formBag.setValue('businessType', Number(lastSegment?.crm_lead_custom_field_id) || 0, {
        shouldDirty: false,
      });
      const withoutOtherSegments = lastSegment?.segments.filter((el) => el.name !== 'Others');

      formBag.setValue(
        'segments',
        withoutOtherSegments?.map((sgmnt) => ({
          name: sgmnt.name,
          crmLeadCustomFieldChoiceId: sgmnt.crm_lead_custom_field_choices?.[0]?.id ?? 0,
        })) ?? [],
      );
    }
  }, [formBag, segments]);

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
        assumption_category_id: sc.assumptionCategoryId ?? null,
        stage_from_id: sc.stageFromId,
        stage_to_id: sc.stageToId,
        conversion_id: sc.conversionId,
        conversion_segments: enableBreakdown
          ? sc.conversionSegments.map((seg) => ({
              segment_id: seg.segmentId ?? 0,
              stage_cycle_months: seg.stageCycleMonths ?? 0,
              average_month: seg.averageMonth === 'manual_rate' ? null : Number(seg.averageMonth),
              manual_rate: Number(seg.manualRate),
              calculated_rate: Number(seg.calculatedRate),
            }))
          : [],
      })),
      growth_rate_value: enableBreakdown ? null : formData.growthRateValue,
      average_order_value: enableBreakdown ? null : formData.averageOrderValue,
      growth_rate_segments: enableBreakdown
        ? formData.growthRateSegments?.map((seg) => ({
            segment_id: seg.segmentId ?? 0,
            growth_rate: seg.growthRate,
          }))
        : [],
      average_order_segments: enableBreakdown
        ? formData.averageOrderValueSegments?.map((seg) => ({
            segment_id: seg.segmentId ?? 0,
            value: seg.value,
          }))
        : [],
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
          <StageConversions segmentData={segmentData ?? []} />

          <RecurringRevenueAssumptions />
        </StyledContainer>
      </CustomFormProvider>
    </Box>
  );
};

export default AssumptionsPage;
