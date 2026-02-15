import type { JSX } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import {
  Box,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';

import { CustomTextField } from 'src/components';

import { StyledAssumptionTable, StyledComponentWrapper } from '../styled';

import { ArrowRightLineIcon, InformationLineIcon } from 'src/assets/icons';

const NewClientAssumptions = (): JSX.Element => (
  <StyledComponentWrapper>
    <Typography fontWeight={500} variant="subtitle1">
      Forecast Assumptions - New Clients
    </Typography>
    <Typography fontWeight={500} color="text.secondary" mb={8}>
      Configure the key assumptions about leads transitioning to another stage, as well as the time it takes
      to transition.
    </Typography>
    <Box>
      <Typography fontWeight={700} mb={4}>
        Stage-to-stage Conversion
      </Typography>
      <TableContainer
        sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
      >
        <StyledAssumptionTable aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight={600}>Stage Name</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>Enterprise</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  fontWeight={600}
                  display="flex"
                  justifyContent="center"
                  gap={1}
                  color="text.secondary"
                >
                  CTT
                  <Tooltip
                    placement="top-start"
                    title={
                      <Box>
                        <Typography variant="caption2" fontWeight={700}>
                          Cycle Transition Time
                        </Typography>
                        <br />
                        <Typography variant="caption2" fontWeight={500}>
                          The time it takes for a lead to transition from one stage to another
                        </Typography>
                      </Box>
                    }
                  >
                    <InformationLineIcon pathFill={colorPalette.other.icon} />
                  </Tooltip>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>Mid-Market</Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontWeight={600}
                  display="flex"
                  justifyContent="center"
                  gap={1}
                  color="text.secondary"
                >
                  CTT
                  <Tooltip
                    placement="top-start"
                    title={
                      <Box>
                        <Typography variant="caption2" fontWeight={700}>
                          Cycle Transition Time
                        </Typography>
                        <br />
                        <Typography variant="caption2" fontWeight={500}>
                          The time it takes for a lead to transition from one stage to another
                        </Typography>
                      </Box>
                    }
                  >
                    <InformationLineIcon pathFill={colorPalette.other.icon} />
                  </Tooltip>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Stack gap={2}>
                  <Typography>Marketing Qualified Leads</Typography>
                  <ArrowRightLineIcon />
                  <Typography>Sales Qualified Leads</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right" width={150}>
                <CustomTextField size="small" name="salesEnterprise" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={130}>
                <Stack gap={1}>
                  <CustomTextField size="small" name="salesEnterpriseCtt" placeholder="35" />
                  <Typography fontWeight={500}>days</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right" width={150}>
                <CustomTextField size="small" name="salesMidMarket" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={130}>
                <Stack gap={1}>
                  <CustomTextField size="small" name="salesMidMarketCtt" placeholder="35" />
                  <Typography fontWeight={500}>days</Typography>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Stack gap={2}>
                  <Typography>Sales Qualified Leads</Typography>
                  <ArrowRightLineIcon />
                  <Typography>Opportunities</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right" width={150}>
                <CustomTextField size="small" name="opportunityEnterprise" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={130}>
                <Stack gap={1}>
                  <CustomTextField size="small" name="opportunityEnterpriseCtt" placeholder="35" />
                  <Typography fontWeight={500}>days</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right" width={150}>
                <CustomTextField size="small" name="opportunityMidMarket" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={130}>
                <Stack gap={1}>
                  <CustomTextField size="small" name="opportunityMidMarketCtt" placeholder="35" />
                  <Typography fontWeight={500}>days</Typography>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Stack gap={2}>
                  <Typography>Opportunities</Typography>
                  <ArrowRightLineIcon />
                  <Typography>Closed Won</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right" width={150}>
                <CustomTextField size="small" name="closedWonEnterprise" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={130}>
                <Stack gap={1}>
                  <CustomTextField size="small" name="closedWonEnterpriseCtt" placeholder="35" />
                  <Typography fontWeight={500}>days</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right" width={150}>
                <CustomTextField size="small" name="closedWonMidMarket" placeholder="35%" />
              </TableCell>
              <TableCell align="right" width={130}>
                <Stack gap={1}>
                  <CustomTextField size="small" name="closedWonMidMarketCtt" placeholder="35" />
                  <Typography fontWeight={500}>days</Typography>
                </Stack>
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledAssumptionTable>
      </TableContainer>
    </Box>
    <Box mt={8}>
      <Typography fontWeight={700} mb={4}>
        Revenue Quota
      </Typography>
      <TableContainer
        sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
      >
        <StyledAssumptionTable aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight={600}>Monthly Target</Typography>
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
                <Typography>Bookings Achieved</Typography>
              </TableCell>
              <TableCell align="center" width={150}>
                <CustomTextField size="small" name="bookingEnterprise" placeholder="35" />
              </TableCell>
              <TableCell align="center" width={150}>
                <CustomTextField size="small" name="bookingMidMarket" placeholder="35" />
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledAssumptionTable>
      </TableContainer>
    </Box>
  </StyledComponentWrapper>
);

export default NewClientAssumptions;
