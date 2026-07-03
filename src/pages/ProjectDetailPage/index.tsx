import { type JSX, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProjectForecast } from 'src/apis/assumptions';
import type { ISegmentForecast } from 'src/apis/assumptions/types';
import { useGetProjectDetailById } from 'src/apis/projects';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import { AccordionTable, LoadingWrapper } from 'src/components';
import { useLocalStorage } from 'src/hooks';

import FiltersAndRevenueInfo from './components/FiltersAndRevenueInfo';
import Header from './components/Header';
import InformationModal from './components/InformationModal';
import { StyledContainer } from './styled';

import { ArrowDownSLineIcon } from 'src/assets/icons';

interface IRow {
  id: number;
  label: string;
  values: (number | string)[];
  children?: IRow[];
  isConversion?: boolean;
}

const ProjectDetailPage = (): JSX.Element => {
  const { id } = useParams();

  const [rowData, setRowData] = useState<IRow[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [isInformationModal, setIsInformationModal] = useState(false);
  const [hideProjectDetailInfoModal] = useLocalStorage('hideProjectDetailInfoModal', false);

  const { data: projectDetail } = useGetProjectDetailById(id ?? '');
  const {
    data: projectForecast,
    isSuccess,
    isLoading,
  } = useGetProjectForecast({
    project_id: projectDetail?.id ?? '',
    horizon_months: 9,
  });

  const handleCellValueChange = (rowId: string, monthIndex: number, value: string | number): void => {
    setRowData((prevData) =>
      prevData.map((row) => {
        if (row.id === Number(rowId)) {
          const updatedValues = [...row.values];
          updatedValues[monthIndex] =
            typeof row.values[0] === 'number' && value !== '' ? Number(value) : value;
          return { ...row, values: updatedValues };
        }
        return row;
      }),
    );
  };

  const formatSegmentData = (combinedData: ReturnType<typeof Object.values>): IRow[] => {
    const segmentMap = new Map<number, IRow>();

    combinedData.forEach((dataPoint) => {
      dataPoint.segments?.forEach((sgm: ISegmentForecast) => {
        if (!segmentMap.has(sgm.segment_id) && sgm.segment_id !== null) {
          segmentMap.set(sgm.segment_id, {
            id: sgm.segment_id,
            label: sgm.segment_name,
            values: [],
          });
        }
        segmentMap.get(sgm.segment_id)?.values.push(sgm.count);
      });
    });

    return Array.from(segmentMap.values());
  };

  const formatForecastData = useCallback(
    (forecast: typeof projectForecast): IRow[] =>
      forecast?.stages?.flatMap((stg, index) => {
        const combinedStageData = [
          ...Object.values(stg.actual_data ?? {}),
          ...Object.values(stg.calculated_data ?? {}),
        ];

        const conversionRows = Object.values(forecast?.conversions ?? {})[index];

        const combinedConversionData = [
          ...Object.values(conversionRows?.actual_data ?? {}),
          ...Object.values(conversionRows?.calculated_data ?? {}),
        ];

        const stageRow: IRow = {
          id: stg.stage_id,
          label: stg.stage_name,
          values: combinedStageData.map((v) => v.total),
          children: formatSegmentData(combinedStageData),
        };

        const conversionRow: IRow = {
          id: conversionRows?.conversion_id,
          label: 'Conversion Rate',
          values: combinedConversionData.map((v) => v?.conversion_rate),
          children: formatSegmentData(combinedConversionData) || [],
          isConversion: true,
        };

        return conversionRows ? [stageRow, conversionRow] : [stageRow];
      }) ?? [],

    [],
  );

  const handleModalClose = (): void => setIsInformationModal(false);

  useEffect(() => {
    if (isSuccess) {
      const stage = projectForecast?.stages?.[0];
      const months = [...Object.keys(stage?.actual_data ?? {}), ...Object.keys(stage?.calculated_data ?? {})];

      setRowData(formatForecastData(projectForecast));
      setColumns(months);
    }
  }, [projectForecast, isSuccess, formatForecastData]);

  useEffect(() => {
    if (!hideProjectDetailInfoModal) {
      setIsInformationModal(true);
    }
  }, [hideProjectDetailInfoModal]);

  return (
    <Box height="100%">
      <Header name={projectDetail?.name} />
      <StyledContainer>
        <FiltersAndRevenueInfo />
        <Box p={6} bgcolor="white" borderRadius={3.5} mb={4}>
          <LoadingWrapper isLoading={isLoading}>
            <Accordion defaultExpanded disableGutters>
              <AccordionSummary expandIcon={<ArrowDownSLineIcon />}>
                <Typography variant="h6" mb={11}>
                  New Clients
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionTable data={rowData} onChange={handleCellValueChange} columns={columns} />
              </AccordionDetails>
            </Accordion>
          </LoadingWrapper>
        </Box>
        <Box p={6} bgcolor="white" borderRadius={3.5}>
          <Accordion defaultExpanded disableGutters>
            <AccordionSummary expandIcon={<ArrowDownSLineIcon />}>
              <Typography variant="h6" mb={11}>
                Recurring Revenue
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionTable data={[]} columns={columns} />
            </AccordionDetails>
          </Accordion>
        </Box>
      </StyledContainer>
      <InformationModal open={isInformationModal} onClose={handleModalClose} />
    </Box>
  );
};

export default ProjectDetailPage;
