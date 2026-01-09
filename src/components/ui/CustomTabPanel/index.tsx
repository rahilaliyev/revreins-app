import type { JSX, PropsWithChildren } from 'react';

import { Box } from '@mui/material';

interface IProps extends PropsWithChildren {
  index: number;
  value: number;
}

export const CustomTabPanel = ({ children, value, index, ...other }: IProps): JSX.Element => (
  <Box
    role="tabpanel"
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    sx={{
      display: value === index ? 'block' : 'none',
      width: '100%',
    }}
    {...other}
  >
    <Box mb={4}>{children}</Box>
  </Box>
);
