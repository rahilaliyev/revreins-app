import type { JSX } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Switch, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

import { StyledAssumptionTable, StyledComponentWrapper } from '../styled';

const RecurringRevenueAssumptions = (): JSX.Element => (
  <StyledComponentWrapper>
    <Typography fontWeight={500} variant="subtitle1">
      Forecast Assumptions - Recurring Revenue
    </Typography>
    <Typography fontWeight={500} variant="body1" color="text.secondary" mb={8}>
      Configure the key assumptions that drive your forecast model
    </Typography>
    <Box>
      <TableContainer
        sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
      >
        <StyledAssumptionTable aria-label="table">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight={600}>
                  Enable Recurring Revenue
                </Typography>
              </TableCell>
              <TableCell align="right" width={150}>
                <Switch />
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledAssumptionTable>
      </TableContainer>
    </Box>
  </StyledComponentWrapper>
);

export default RecurringRevenueAssumptions;
