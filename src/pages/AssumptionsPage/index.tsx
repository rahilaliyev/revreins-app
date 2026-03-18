import { type JSX, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { MONTH_LETTER_YEAR_FORMAT } from 'src/contants';
import { ELeadCustomFieldType } from 'src/types/enums';

import { useCreateProjectBreakdownMutation, useGetLeadCustomFields } from 'src/apis/breakdowns';
import type { IProjectBreakdownPayload, ISegmentResponse } from 'src/apis/breakdowns/types';

import { Box } from '@mui/material';

import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import Header from './components/Header';
import NewClientAssumptions from './components/NewClientAssumptions';
import ProjectSettings from './components/ProjectSettings';
import RecurringRevenueAssumptions from './components/RecurringRevenueAssumptions';
import { StyledContainer } from './styled';
import { type TFormData, validationSchema } from './validationSchema';

const AssumptionsPage = (): JSX.Element => {
  const { id } = useParams();
  const [isShowNewClientSection, setIsShowNewClientSection] = useState(false);
  const [segmentData, setSegmentData] = useState<ISegmentResponse[] | null>(null);
  const { data: leadCustomFields } = useGetLeadCustomFields({ type: ELeadCustomFieldType.CHOICES });
  const { mutate: createProjectBreakdownMutation } = useCreateProjectBreakdownMutation();
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

  return (
    <Box height="100%">
      <Header />
      <StyledContainer>
        <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
          <ProjectSettings />
        </CustomFormProvider>
        {isShowNewClientSection && !!segmentData?.length && (
          <NewClientAssumptions segmentData={segmentData} />
        )}

        {/* <RecurringRevenueAssumptions /> */}
      </StyledContainer>
    </Box>
  );
};

export default AssumptionsPage;
