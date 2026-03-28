import { type JSX, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { MONTH_LETTER_YEAR_FORMAT } from 'src/contants';
import { ELeadCustomFieldType } from 'src/types/enums';

import { useGenerateAssumptionMutation } from 'src/apis/assumptions';
import type { IAssumptionGeneratePayload } from 'src/apis/assumptions/types';
import { useCreateProjectBreakdownMutation, useGetLeadCustomFields } from 'src/apis/breakdowns';
import type { IProjectBreakdownPayload, ISegmentResponse } from 'src/apis/breakdowns/types';
import { useGetProjectDetailById } from 'src/apis/projects';
import type { IProject } from 'src/apis/projects/types';
import { useGetStageConversions } from 'src/apis/stageConversions';

import { Box } from '@mui/material';

import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { ROUTES } from 'src/routes/paths';

import Header from './components/Header';
import NewClientAssumptions from './components/NewClientAssumptions';
import ProjectSettings from './components/ProjectSettings';
import { StyledContainer } from './styled';
import { type TFormData, validationSchema } from './validationSchema';

const AssumptionsPage = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isShowNewClientSection, setIsShowNewClientSection] = useState(false);
  const [segmentData, setSegmentData] = useState<ISegmentResponse[] | null>(null);
  const { data = {} as IProject } = useGetProjectDetailById(id ?? '');
  const { data: leadCustomFields } = useGetLeadCustomFields({ type: ELeadCustomFieldType.CHOICES });
  const { data: { stage_conversions: stageConversions } = {} } = useGetStageConversions(id ?? '');

  const { mutate: createProjectBreakdownMutation, isPending } = useCreateProjectBreakdownMutation();
  const { mutate: generateAssumptionMutation, isPending: isGeneratePending } =
    useGenerateAssumptionMutation();

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      currency: 'USD',
      startingDate: dayjs().format(MONTH_LETTER_YEAR_FORMAT),
      enableProjectBreakdown: false,
      segments: [{ name: 'Segment 1', crm_lead_custom_field_choice_id: 0 }],
    },
  });

  const handleSubmit = (data: TFormData): void => {
    const payload: IProjectBreakdownPayload = {
      project_id: Number(id),
      status: data.enableProjectBreakdown ? 1 : 0,
      crm_lead_custom_field_id: data.businessType,
      name: leadCustomFields?.find((el) => el.id === data.businessType)?.name ?? '',
      segments: data?.segments,
    };

    createProjectBreakdownMutation(payload, {
      onSuccess: (res) => {
        setIsShowNewClientSection(true);
        setSegmentData(res.segments);
      },
    });
  };

  const handleGenerateAssumption = (): void => {
    if (!stageConversions?.length) {
      return;
    }

    const payload: IAssumptionGeneratePayload = {
      project_id: Number(id),
      stage_conversions: stageConversions?.map((el) => ({
        assumption_category_id: el?.assumption_category_id,
        conversion_segments: formBag.getValues('enableProjectBreakdown')
          ? segmentData?.map((sgmnt) => ({
              segment_id: sgmnt.id,
              stage_cycle_months: 2,
              rate_mode: 'last_3_months',
              manual_rate: 0.25,
            }))
          : [],
        stage_from_id: el.stage_from_id,
        stage_to_id: el.stage_to_id,
      })),
    };

    generateAssumptionMutation(payload, {
      onSuccess: (res) => navigate(`${ROUTES.DEFAULT.PROJECTS.PATH}/${res.project.id}`),
    });
  };

  return (
    <Box height="100%">
      <Header name={data.name} onGenerate={handleGenerateAssumption} isLoading={isGeneratePending} />
      <StyledContainer>
        <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
          <ProjectSettings isLoading={isPending} />
        </CustomFormProvider>
        {isShowNewClientSection && !!segmentData?.length && (
          <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
            <NewClientAssumptions segmentData={segmentData} />
          </CustomFormProvider>
        )}

        {/* <RecurringRevenueAssumptions /> */}
      </StyledContainer>
    </Box>
  );
};

export default AssumptionsPage;
