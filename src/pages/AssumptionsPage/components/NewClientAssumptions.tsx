import { Fragment, type JSX } from 'react';
import { useParams } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';

import type { ISegmentResponse } from 'src/apis/breakdowns/types';
import { useGetStageConversions } from 'src/apis/stageConversions';

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

import ConversionSegmentCell from './ConversionSegmentCell';

import { ArrowRightLineIcon, InformationLineIcon } from 'src/assets/icons';

interface IProps {
  segmentData: ISegmentResponse[];
}

const NewClientAssumptions = ({ segmentData }: IProps): JSX.Element => {
  const { id } = useParams();

  const { data: { stage_conversions: stageConversions } = {} } = useGetStageConversions(id ?? '');

  return (
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
                {segmentData.length ? (
                  segmentData.map((el) => (
                    <Fragment key={el.id}>
                      <TableCell>
                        <Typography fontWeight={600}>{el.name}</Typography>
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
                    </Fragment>
                  ))
                ) : (
                  <>
                    <TableCell>
                      <Typography fontWeight={600} />
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
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {stageConversions?.map((stage, stageIdx) => (
                <TableRow key={stage?.id}>
                  <TableCell>
                    <Stack gap={2}>
                      <Typography>{stage?.stage_from?.name}</Typography>
                      <ArrowRightLineIcon />
                      <Typography>{stage?.stage_to?.name}</Typography>
                    </Stack>
                  </TableCell>
                  {segmentData.length ? (
                    segmentData.map((el, segmentIdx) => (
                      <ConversionSegmentCell key={el.id} stageIdx={stageIdx} segmentIdx={segmentIdx} />
                    ))
                  ) : (
                    <ConversionSegmentCell stageIdx={stageIdx} segmentIdx={0} />
                  )}
                </TableRow>
              ))}
            </TableBody>
          </StyledAssumptionTable>
        </TableContainer>
      </Box>
      {/* <Box mt={8}>
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
      </Box> */}
    </StyledComponentWrapper>
  );
};

export default NewClientAssumptions;
