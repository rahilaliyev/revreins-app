import { type JSX, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProjectForecast } from 'src/apis/assumptions';
import type { IConversionForecast } from 'src/apis/assumptions/types';
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

  const formatConversion = (conv: IConversionForecast): IRow => ({
    id: conv?.conversion_id,
    label: `Moved to ${conv?.stage_to_name}`,
    values: [...Object.values(conv.actual_data ?? {}), ...Object.values(conv.calculated_data ?? {})].map(
      (v) => v.total,
    ),
  });

  const formatForecastData = useCallback(
    (forecast: typeof projectForecast): IRow[] =>
      forecast?.stages?.map((stg) => ({
        id: stg.stage_id,
        label: stg.stage_name,
        values: [...Object.values(stg.actual_data ?? {}), ...Object.values(stg.calculated_data ?? {})].map(
          (v) => v.total,
        ),
        children: Object.values(forecast?.conversions ?? {})
          .filter((conv) => conv.stage_from_id === stg.stage_id)
          .map(formatConversion),
      })) ?? [],
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
