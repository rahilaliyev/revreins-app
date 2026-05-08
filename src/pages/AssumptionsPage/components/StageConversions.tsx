import { type ChangeEvent, Fragment, type JSX } from 'react';
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
import { useAssumptionsFormContext } from '../validationSchema';

import ConversionSegmentCell from './ConversionSegmentCell';

import { ArrowRightLineIcon, InformationLineIcon } from 'src/assets/icons';

interface IProps {
  segmentData: ISegmentResponse[];
}

const StageConversions = ({ segmentData }: IProps): JSX.Element => {
  const { id } = useParams();
  const { setValue } = useAssumptionsFormContext();

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
                      <Typography fontWeight={600}>Average</Typography>
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
                      <ConversionSegmentCell
                        key={el.id}
                        stageIdx={stageIdx}
                        segmentIndex={segmentIdx}
                        conversionId={stage?.id}
                        segmentId={el.id}
                      />
                    ))
                  ) : (
                    <ConversionSegmentCell stageIdx={stageIdx} segmentIndex={0} conversionId={stage?.id} />
                  )}
                </TableRow>
              ))}
            </TableBody>
          </StyledAssumptionTable>
        </TableContainer>
      </Box>
      <Box mt={8}>
        <TableContainer
          sx={{ border: `1px solid ${colorPalette.other.stroke}`, borderRadius: (theme) => theme.spacing(4) }}
        >
          <StyledAssumptionTable aria-label="table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography fontWeight={600}>Growth Rate</Typography>
                </TableCell>
                {segmentData.length ? (
                  segmentData.map((el) => (
                    <TableCell key={el?.id}>
                      <Typography fontWeight={600}>{el.name}</Typography>
                    </TableCell>
                  ))
                ) : (
                  <TableCell>
                    <Typography fontWeight={600}>Percent</Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography>{stageConversions?.[0]?.stage_from?.name}</Typography>
                </TableCell>
                {segmentData.length ? (
                  segmentData.map((el, segmentIdx) => (
                    <TableCell key={el?.id} width={200}>
                      <CustomTextField
                        size="small"
                        name={`growthRateSegments.${segmentIdx}.growthRate`}
                        placeholder="35"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setValue(`growthRateSegments.${segmentIdx}.growthRate`, Number(e.target.value), {
                            shouldDirty: true,
                            shouldValidate: true,
                          })
                        }
                      />
                    </TableCell>
                  ))
                ) : (
                  <TableCell align="right" width={200}>
                    <CustomTextField
                      size="small"
                      name="growthRateValue"
                      placeholder="35"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setValue('growthRateValue', Number(e.target.value), {
                          shouldDirty: true,
                          shouldValidate: true,
                        })
                      }
                    />
                  </TableCell>
                )}
              </TableRow>
            </TableBody>
          </StyledAssumptionTable>
        </TableContainer>
      </Box>
    </StyledComponentWrapper>
  );
};

export default StageConversions;
