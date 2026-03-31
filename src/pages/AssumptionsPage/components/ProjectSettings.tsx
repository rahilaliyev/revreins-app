import { type JSX, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { DATE_FORMAT, MONTH_LETTER_YEAR_FORMAT } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { ELeadCustomFieldType } from 'src/types/enums';

import { useCreateProjectBreakdownMutation, useGetLeadCustomFields } from 'src/apis/breakdowns';
import type { IProjectBreakdownPayload, ISegmentResponse } from 'src/apis/breakdowns/types';
import { useGetCurrencies } from 'src/apis/currencies';
import { useGetProjectDetailById, useUpdateProjectMutation } from 'src/apis/projects';
import type { IProject, IProjectUpdatePayload } from 'src/apis/projects/types';

import { Box, Stack, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

import { CustomDatePickerField, CustomSelectField, CustomSwitchField, LoadingButton } from 'src/components';

import { StyledAssumptionTable, StyledComponentWrapper } from '../styled';
import { type TFormData, useAssumptionsFormContext } from '../validationSchema';

import SegmentTable from './SegmentTable';

interface IProps {
  setSegmentData: (data: ISegmentResponse[]) => void;
}

const ProjectSettings = ({ setSegmentData }: IProps): JSX.Element => {
  const { id } = useParams();

  const { data: projectData = {} as IProject } = useGetProjectDetailById(id ?? '');
  const { data: leadCustomFields } = useGetLeadCustomFields({ type: ELeadCustomFieldType.CHOICES });
  const { data: currencies } = useGetCurrencies();
  const { mutate: createProjectBreakdownMutation, isPending } = useCreateProjectBreakdownMutation();
  const { mutate: updateProjectMutation, isPending: isUpdateProjectPending } = useUpdateProjectMutation(
    projectData.id,
  );

  const { control, getValues } = useAssumptionsFormContext();

  const enableProjectBreakdown = useWatch({
    control,
    name: 'enableProjectBreakdown',
  });

  const currencyOptions = useMemo(() => {
    if (currencies) {
      return currencies?.map((currency) => ({
        label: currency.code,
        value: currency.id,
      }));
    }

    return [];
  }, [currencies]);

  const handleCreateBreakdowns = (): void => {
    const formData = getValues();
    const payload: IProjectBreakdownPayload = {
      project_id: Number(id),
      status: formData.enableProjectBreakdown ? 1 : 0,
      crm_lead_custom_field_id: formData.businessType,
      name: leadCustomFields?.find((el) => el.id === formData.businessType)?.name ?? '',
      segments: formData?.segments?.map((el) => ({
        name: el.name,
        crm_lead_custom_field_choice_id: el.crmLeadCustomFieldChoiceId,
      })),
    };

    const updatingProjectPayload: IProjectUpdatePayload = {
      name: projectData.name,
      start_date: formData.startingDate,
      currency_id: formData.currencyId,
    };

    createProjectBreakdownMutation(payload, {
      onSuccess: (res) => setSegmentData(res.segments),
    });

    updateProjectMutation(updatingProjectPayload);
  };

  return (
    <StyledComponentWrapper>
      <Typography fontWeight={500} variant="subtitle1">
        Project Settings
      </Typography>
      <Typography fontWeight={500} color="text.secondary" mb={8}>
        Select the settings for your project. You will be able to change them later.
      </Typography>
      <Box my={8}>
        <Typography fontWeight={700} mb={4}>
          Starting Date
        </Typography>
        <TableContainer
          sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
        >
          <StyledAssumptionTable aria-label="table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography>Project Starting Date</Typography>
                </TableCell>
                <TableCell align="right" width={150}>
                  <CustomDatePickerField
                    size="small"
                    sx={{
                      width: 150,
                      '& .MuiPickersInputBase-root': { height: (theme) => theme.spacing(10) },
                    }}
                    name="startingDate"
                    format={MONTH_LETTER_YEAR_FORMAT}
                    outputFormat={DATE_FORMAT}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </StyledAssumptionTable>
        </TableContainer>
      </Box>
      <Box>
        <Typography fontWeight={700} mb={4}>
          Project currency
        </Typography>
        <TableContainer
          sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
        >
          <StyledAssumptionTable aria-label="table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography>Project Currency for Target Quota </Typography>
                </TableCell>
                <TableCell align="right" width={150}>
                  <CustomSelectField
                    size="small"
                    sx={{ '& .MuiSelect-select': { display: 'flex' } }}
                    name="currencyId"
                    items={currencyOptions}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </StyledAssumptionTable>
        </TableContainer>
      </Box>
      <Box my={8}>
        <Typography fontWeight={700}>Project Breakdown</Typography>
        <Typography color="text.secondary" mb={4} mt={2}>
          Enable to break down your project leads by any number of fields. Select a field for each breakdown
          segment, all unselected fields will be grouped under “Other”
        </Typography>
        <TableContainer
          sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
        >
          <StyledAssumptionTable aria-label="table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography fontWeight={600}>Break down stages into segments</Typography>
                </TableCell>
                <TableCell align="right" width={270}>
                  <Stack gap={6}>
                    <Typography whiteSpace="nowrap">Enable Project Breakdown</Typography>
                    <CustomSwitchField name="enableProjectBreakdown" />
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </StyledAssumptionTable>
        </TableContainer>
      </Box>
      {enableProjectBreakdown && (
        <Box>
          <SegmentTable />
        </Box>
      )}
      <Stack justifyContent="flex-end" mt={2}>
        <LoadingButton
          onClick={handleCreateBreakdowns}
          size="large"
          color="inherit"
          loading={isPending || isUpdateProjectPending}
          disabled={!enableProjectBreakdown}
        >
          Save
        </LoadingButton>
      </Stack>
    </StyledComponentWrapper>
  );
};

export default ProjectSettings;
