import type { JSX } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProjectDetailById } from 'src/apis/projects';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import { AccordionTable } from 'src/components';

import FiltersAndRevenueInfo from './components/FiltersAndRevenueInfo';
import Header from './components/Header';
import { StyledContainer } from './styled';

import { ArrowDownSLineIcon } from 'src/assets/icons';

export const FUNNEL_MOCK_DATA = [
  {
    id: 'mql',
    label: 'Marketing Qualified Leads',
    values: {
      jan: 5,
      feb: 6,
      mar: 9,
      apr: 11,
      may: 9,
      jun: 14,
      jul: 8,
      aug: 7,
      sep: 6,
      oct: 5,
      nov: 5,
      dec: 5,
    },
    children: [
      {
        id: 'mql-moved',
        label: 'Moved to stage 2',
        values: {
          jan: '51.6%',
          feb: '51.6%',
          mar: '51.6%',
          apr: '51.6%',
          may: '51.6%',
          jun: '51.6%',
          jul: '51.6%',
          aug: '51.6%',
          sep: '51.6%',
          oct: '51.6%',
          nov: '51.6%',
          dec: '51.6%',
        },
      },
    ],
  },

  {
    id: 'sql',
    label: 'Sales Qualified Leads',
    values: {
      jan: 4,
      feb: 5,
      mar: 8,
      apr: 5,
      may: 5,
      jun: 7,
      jul: 3,
      aug: 4,
      sep: 2,
      oct: 5,
      nov: 5,
      dec: 5,
    },
    children: [
      {
        id: 'sql-moved',
        label: 'Moved to stage 3',
        values: {
          jan: '51.6%',
          feb: '51.6%',
          mar: '51.6%',
          apr: '51.6%',
          may: '51.6%',
          jun: '51.6%',
          jul: '51.6%',
          aug: '51.6%',
          sep: '51.6%',
          oct: '51.6%',
          nov: '51.6%',
          dec: '51.6%',
        },
      },
    ],
  },

  {
    id: 'opportunities',
    label: 'Opportunities',
    values: {
      jan: 2,
      feb: 3,
      mar: 4,
      apr: 3,
      may: 2,
      jun: 4,
      jul: 2,
      aug: 2,
      sep: 1,
      oct: 5,
      nov: 5,
      dec: 5,
    },
    children: [
      {
        id: 'opp-moved',
        label: 'Moved to stage 4',
        values: {
          jan: '51.6%',
          feb: '51.6%',
          mar: '51.6%',
          apr: '51.6%',
          may: '51.6%',
          jun: '51.6%',
          jul: '51.6%',
          aug: '51.6%',
          sep: '51.6%',
          oct: '51.6%',
          nov: '51.6%',
          dec: '51.6%',
        },
      },
    ],
  },

  {
    id: 'closed-won',
    label: 'Closed Won',
    values: {
      jan: 1,
      feb: 2,
      mar: 1,
      apr: 1,
      may: 1,
      jun: 3,
      jul: 1,
      aug: 2,
      sep: 1,
      oct: 5,
      nov: 5,
      dec: 5,
    },
    children: [
      {
        id: 'enterprise',
        label: 'Enterprise',
        values: {
          jan: '5',
          feb: '5',
          mar: '5',
          apr: '5',
          may: '6',
          jun: '6',
          jul: '6',
          aug: '6',
          sep: '7',
          oct: '7',
          nov: '7',
          dec: '7',
        },
      },
      {
        id: 'mid-market',
        label: 'Mid-market',
        values: {
          jan: '5',
          feb: '5',
          mar: '5',
          apr: '5',
          may: '6',
          jun: '6',
          jul: '6',
          aug: '6',
          sep: '7',
          oct: '7',
          nov: '7',
          dec: '7',
        },
      },
      {
        id: 'opp-moved',
        label: 'Moved to stage 5',
        values: {
          jan: '51.6%',
          feb: '51.6%',
          mar: '51.6%',
          apr: '51.6%',
          may: '51.6%',
          jun: '51.6%',
          jul: '51.6%',
          aug: '51.6%',
          sep: '51.6%',
          oct: '51.6%',
          nov: '51.6%',
          dec: '51.6%',
        },
      },
    ],
  },

  {
    id: 'bookings',
    label: 'Bookings Achieved',
    values: {
      jan: '$25,000',
      feb: '$50,000',
      mar: '$25,000',
      apr: '$25,000',
      may: '$25,000',
      jun: '$75,000',
      jul: '$125,000',
      aug: '$50,000',
      sep: '$25,000',
      oct: '$75,000',
      nov: '$50,000',
      dec: '$250,000',
    },
  },
];

export const RECURRING_REVENUE_MOCK_DATA = [
  {
    id: 'starting-customer',
    label: 'Starting Customers',
    values: {
      jan: 5,
      feb: 6,
      mar: 9,
      apr: 11,
      may: 9,
      jun: 14,
      jul: 8,
      aug: 7,
      sep: 6,
      oct: 5,
      nov: 5,
      dec: 5,
    },
  },

  {
    id: 'new-customer',
    label: 'New Customers',
    values: {
      jan: 4,
      feb: 5,
      mar: 8,
      apr: 5,
      may: 5,
      jun: 7,
      jul: 3,
      aug: 4,
      sep: 2,
      oct: 5,
      nov: 5,
      dec: 5,
    },
  },

  {
    id: 'churned-customer',
    label: 'Churned Customers',
    values: {
      jan: 2,
      feb: 3,
      mar: 4,
      apr: 3,
      may: 2,
      jun: 4,
      jul: 2,
      aug: 2,
      sep: 1,
      oct: 5,
      nov: 5,
      dec: 5,
    },
  },

  {
    id: 'ending-customer',
    label: 'Ending Customers',
    values: {
      jan: 1,
      feb: 2,
      mar: 1,
      apr: 1,
      may: 1,
      jun: 3,
      jul: 1,
      aug: 2,
      sep: 1,
      oct: 5,
      nov: 5,
      dec: 5,
    },
  },

  {
    id: 'revenue',
    label: 'Revenue',
    values: {
      jan: '$25,000',
      feb: '$50,000',
      mar: '$25,000',
      apr: '$25,000',
      may: '$25,000',
      jun: '$75,000',
      jul: '$125,000',
      aug: '$50,000',
      sep: '$25,000',
      oct: '$75,000',
      nov: '$50,000',
      dec: '$250,000',
    },
  },
];

const ProjectDetailPage = (): JSX.Element => {
  const { id } = useParams();

  const { data } = useGetProjectDetailById(Number(id));

  return (
    <Box height="100%">
      <Header name={data?.name} />
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
              <AccordionTable data={FUNNEL_MOCK_DATA} />
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
