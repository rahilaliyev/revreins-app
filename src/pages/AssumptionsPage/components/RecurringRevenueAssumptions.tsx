import type { JSX } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import {
  Box,
  Switch,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

import { StyledAssumptionTable, StyledComponentWrapper } from '../styled';

const RecurringRevenueAssumptions = (): JSX.Element => (
  <StyledComponentWrapper>
    <Typography fontWeight={500} variant="subtitle1">
      Forecast Assumptions - Recurring Revenue
    </Typography>
    <Typography fontWeight={500} color="text.secondary" mb={8}>
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
                <Typography fontWeight={600}>Enable Recurring Revenue</Typography>
              </TableCell>
              <TableCell align="right" width={150}>
                <Switch />
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledAssumptionTable>
      </TableContainer>
    </Box>
    <Box>
      <Typography fontWeight={700} mb={4} mt={8}>
        Recurring revenue
      </Typography>
      <TableContainer
        sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
      >
        <StyledAssumptionTable aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight={600}>Data type</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>Enterprise</Typography>
              </TableCell>

              <TableCell>
                <Typography fontWeight={600}>Mid-Market</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>Starting Customers</Typography>
              </TableCell>
              <TableCell align="right" width={150}>
                <TextField size="small" name="startingEnterprise" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={150}>
                <TextField size="small" name="startingMidMarket" placeholder="35%" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Churn Rate</Typography>
              </TableCell>
              <TableCell align="right" width={150}>
                <TextField size="small" name="churnEnterprise" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={150}>
                <TextField size="small" name="churnMidMarket" placeholder="35%" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>% of Customers Ordering</Typography>
              </TableCell>
              <TableCell align="right" width={150}>
                <TextField size="small" name="customerEnterprise" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={150}>
                <TextField size="small" name="customerMidMarket" placeholder="35%" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Average Order Value</Typography>
              </TableCell>
              <TableCell align="right" width={150}>
                <TextField size="small" name="orderValueEnterprise" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={150}>
                <TextField size="small" name="orderValueMidMarket" placeholder="35%" />
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledAssumptionTable>
      </TableContainer>
    </Box>
  </StyledComponentWrapper>
);

export default RecurringRevenueAssumptions;
