import React, { type JSX } from 'react';
import { MONTH_LETTER_YEAR_FORMAT } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';

import {
  Box,
  Stack,
  Switch,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

import { CustomDatePickerField, CustomSelectField } from 'src/components';

import { StyledAssumptionTable, StyledComponentWrapper } from '../styled';

const ProjectSettings = (): JSX.Element => (
  <StyledComponentWrapper>
    <Typography fontWeight={500} variant="subtitle1">
      Project Settings
    </Typography>
    <Typography fontWeight={500} variant="body1" color="text.secondary" mb={8}>
      Select the settings for your project. You will be able to change them later.
    </Typography>
    <Box my={8}>
      <Typography variant="body1" fontWeight={700} mb={4}>
        Starting Date
      </Typography>
      <TableContainer
        sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
      >
        <StyledAssumptionTable aria-label="table">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Project Starting Date</Typography>
              </TableCell>
              <TableCell align="right" width={150}>
                <CustomDatePickerField
                  size="small"
                  sx={{ width: 150, '& .MuiPickersInputBase-root': { height: (theme) => theme.spacing(10) } }}
                  name="startingDate"
                  format={MONTH_LETTER_YEAR_FORMAT}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledAssumptionTable>
      </TableContainer>
    </Box>
    <Box>
      <Typography variant="body1" fontWeight={700} mb={4}>
        Project currency
      </Typography>
      <TableContainer
        sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
      >
        <StyledAssumptionTable aria-label="table">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Project Currency for Target Quota </Typography>
              </TableCell>
              <TableCell align="right" width={150}>
                <CustomSelectField
                  size="small"
                  sx={{ '& .MuiSelect-select': { display: 'flex' } }}
                  name="currency"
                  items={[{ value: 'USD', label: 'USD' }]}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledAssumptionTable>
      </TableContainer>
    </Box>
    <Box mt={8}>
      <Typography variant="body1" fontWeight={700} mb={4}>
        Project Breakdown
      </Typography>
      <TableContainer
        sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
      >
        <StyledAssumptionTable aria-label="table">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Break down stages into segments</Typography>
              </TableCell>
              <TableCell align="right" width={270}>
                <Stack gap={3}>
                  <Typography variant="body2">Enable Project Breakdown</Typography>
                  <Switch size="small" />
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Breakdown source field</Typography>
              </TableCell>
              <TableCell align="right" width={100}>
                <CustomSelectField name="businessType" items={[]} placeholder="Business Type" />
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledAssumptionTable>
      </TableContainer>
    </Box>
  </StyledComponentWrapper>
);

export default ProjectSettings;
