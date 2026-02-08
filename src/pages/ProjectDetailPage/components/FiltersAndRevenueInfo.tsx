import type { JSX } from 'react';

import { Button, Stack, Switch, Typography } from '@mui/material';

import { StyledRevenueWrapper } from '../styled';

import { FilterLineIcon, ShareForward2LineIcon } from 'src/assets/icons';

const FiltersAndRevenueInfo = (): JSX.Element => (
  <Stack justifyContent="space-between" width="100%">
    <Stack>
      <Button endIcon={<FilterLineIcon />} color="secondary">
        Filters
      </Button>
      <Stack gap={3} mx={6}>
        <Typography>Forecast</Typography>
        <Switch />
        <Typography>Actual</Typography>
      </Stack>
      <Button endIcon={<ShareForward2LineIcon />} color="inherit">
        Publish a Forecast
      </Button>
    </Stack>
    <StyledRevenueWrapper>
      <Typography display="flex" gap={2} alignItems="center">
        Total Projected Revenue:
        <Typography component="span" fontWeight={700} variant="body1" color="primary">
          $2,420,000
        </Typography>
      </Typography>
      <Typography display="flex" gap={2} alignItems="center" variant="caption1" color="text.secondary">
        Total Projected Revenue:
        <Typography component="span" fontWeight={700} variant="body2" color="primary">
          $3,820,000
        </Typography>
      </Typography>
    </StyledRevenueWrapper>
  </Stack>
);

export default FiltersAndRevenueInfo;
