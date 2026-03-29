import { type JSX, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProjectForecast } from 'src/apis/assumptions';
import type { IConversion } from 'src/apis/assumptions/types';
import { useGetProjectDetailById } from 'src/apis/projects';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import { AccordionTable, LoadingWrapper } from 'src/components';

import FiltersAndRevenueInfo from './components/FiltersAndRevenueInfo';
import Header from './components/Header';
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

  const formatConversion = (conv: IConversion): IRow => ({
    id: conv.conversion_id,
    label: `Moved to ${conv.stage_to_name}`,
    values: Object.values(conv.data).map((v) => v.count),
  });

  const formatForecastData = useCallback((forecast: typeof projectForecast): IRow[] => {
    const segment = forecast?.segments?.[0];

    return (
      segment?.stages?.map((stg) => ({
        id: stg.stage_id,
        label: stg.stage_name,
        values: stg.data ? Object.values(stg.data).map((v) => v.count) : [],
        children: segment.conversions
          ?.filter((conv) => conv.stage_from_id === stg.stage_id)
          ?.map(formatConversion),
      })) ?? []
    );
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const months = projectForecast?.segments?.[0]?.stages?.[0]?.data;
      setRowData(formatForecastData(projectForecast));

      setColumns(Object.keys(months));
    }
  }, [projectForecast, isSuccess, formatForecastData]);

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
    </Box>
  );
};

export default ProjectDetailPage;
