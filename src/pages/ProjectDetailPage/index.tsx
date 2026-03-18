import { type JSX, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProjectDetailById } from 'src/apis/projects';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import { AccordionTable } from 'src/components';

import FiltersAndRevenueInfo from './components/FiltersAndRevenueInfo';
import Header from './components/Header';
import { StyledContainer } from './styled';

import { ArrowDownSLineIcon } from 'src/assets/icons';

interface IRow {
  id: string;
  label: string;
  values: (number | string)[];
  children?: IRow[];
}

export const FUNNEL_MOCK_DATA: IRow[] = [
  {
    id: 'mql',
    label: 'Marketing Qualified Leads',
    values: [5, 6, 9, 11, 9, 14, 8, 7, 6, 5, 5, 5],
    children: [
      {
        id: 'mql-moved',
        label: 'Moved to stage 2',
        values: [
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
        ],
      },
    ],
  },

  {
    id: 'sql',
    label: 'Sales Qualified Leads',
    values: [4, 5, 8, 5, 5, 7, 3, 4, 2, 5, 5, 5],
    children: [
      {
        id: 'sql-moved',
        label: 'Moved to stage 3',
        values: [
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
        ],
      },
    ],
  },

  {
    id: 'opportunities',
    label: 'Opportunities',
    values: [2, 3, 4, 3, 2, 4, 2, 2, 1, 5, 5, 5],
    children: [
      {
        id: 'opp-moved',
        label: 'Moved to stage 4',
        values: [
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
        ],
      },
    ],
  },

  {
    id: 'closed-won',
    label: 'Closed Won',
    values: [1, 2, 1, 1, 1, 3, 1, 2, 1, 5, 5, 5],
    children: [
      {
        id: 'enterprise',
        label: 'Enterprise',
        values: ['5', '5', '5', '5', '6', '6', '6', '6', '7', '7', '7', '7'],
      },
      {
        id: 'mid-market',
        label: 'Mid-market',
        values: ['5', '5', '5', '5', '6', '6', '6', '6', '7', '7', '7', '7'],
      },
      {
        id: 'opp-moved',
        label: 'Moved to stage 5',
        values: [
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
          '51.6%',
        ],
      },
    ],
  },

  {
    id: 'bookings',
    label: 'Bookings Achieved',
    values: [
      '$25,000',
      '$50,000',
      '$25,000',
      '$25,000',
      '$25,000',
      '$75,000',
      '$125,000',
      '$50,000',
      '$25,000',
      '$75,000',
      '$50,000',
      '$250,000',
    ],
  },
];

export const RECURRING_REVENUE_MOCK_DATA = [
  {
    id: 'starting-customer',
    label: 'Starting Customers',
    values: [5, 6, 9, 11, 9, 14, 8, 7, 6, 5, 5, 5],
  },

  {
    id: 'new-customer',
    label: 'New Customers',
    values: [4, 5, 8, 5, 5, 7, 3, 4, 2, 5, 5, 5],
  },

  {
    id: 'churned-customer',
    label: 'Churned Customers',
    values: [2, 3, 4, 3, 2, 4, 2, 2, 1, 5, 5, 5],
  },
  {
    id: 'ending-customer',
    label: 'Ending Customers',
    values: [1, 2, 1, 1, 1, 3, 1, 2, 1, 5, 5, 5],
  },

  {
    id: 'revenue',
    label: 'Revenue',
    values: [
      '$25,000',
      '$50,000',
      '$25,000',
      '$25,000',
      '$25,000',
      '$75,000',
      '$125,000',
      '$50,000',
      '$25,000',
      '$75,000',
      '$50,000',
      '$250,000',
    ],
  },
];

const ProjectDetailPage = (): JSX.Element => {
  const { id } = useParams();

  const [rowData, setRowData] = useState(FUNNEL_MOCK_DATA);

  const { data: projectDetail } = useGetProjectDetailById(Number(id));

  const handleCellValueChange = (rowId: string, monthIndex: number, value: string | number): void => {
    setRowData((prevData) =>
      prevData.map((row) => {
        if (row.id === rowId) {
          const updatedValues = [...row.values];
          updatedValues[monthIndex] =
            typeof row.values[0] === 'number' && value !== '' ? Number(value) : value;
          return { ...row, values: updatedValues };
        }
        return row;
      }),
    );
  };

  return (
    <Box height="100%">
      <Header name={projectDetail?.name} />
      <StyledContainer>
        <FiltersAndRevenueInfo />
        <Box p={6} bgcolor="white" borderRadius={3.5} mb={4}>
          <Accordion defaultExpanded disableGutters>
            <AccordionSummary expandIcon={<ArrowDownSLineIcon />}>
              <Typography variant="h6" mb={11}>
                New Clients
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionTable data={rowData} onChange={handleCellValueChange} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box p={6} bgcolor="white" borderRadius={3.5}>
          <Accordion defaultExpanded disableGutters>
            <AccordionSummary expandIcon={<ArrowDownSLineIcon />}>
              <Typography variant="h6" mb={11}>
                Recurring Revenue
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionTable data={RECURRING_REVENUE_MOCK_DATA} />
            </AccordionDetails>
          </Accordion>
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default ProjectDetailPage;
