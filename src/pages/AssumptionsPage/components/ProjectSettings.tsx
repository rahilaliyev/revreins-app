import { type JSX, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import { DATE_FORMAT, MONTH_LETTER_YEAR_FORMAT } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';

import { useGetCurrencies } from 'src/apis/currencies';

import { Box, Stack, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

import { CustomDatePickerField, CustomSelectField, CustomSwitchField, LoadingButton } from 'src/components';

import { StyledAssumptionTable, StyledComponentWrapper } from '../styled';
import { useAssumptionsFormContext } from '../validationSchema';

import SegmentTable from './SegmentTable';

interface IProps {
  isLoading: boolean;
}

const ProjectSettings = ({ isLoading }: IProps): JSX.Element => {
  const { data: currencies } = useGetCurrencies();
  const { control } = useAssumptionsFormContext();

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
        <LoadingButton type="submit" size="large" color="inherit" loading={isLoading}>
          Save
        </LoadingButton>
      </Stack>
    </StyledComponentWrapper>
  );
};

export default ProjectSettings;
