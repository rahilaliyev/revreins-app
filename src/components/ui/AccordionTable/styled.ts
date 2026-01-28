import { colorPalette } from 'src/theme/colorpalette';

import { styled, Table } from '@mui/material';

export const StyledAccordionTable = styled(Table)(({ theme }) => ({
  '& thead': {
    background: colorPalette.secondary.main,
  },
  '& thead th': {
    padding: theme.spacing(1.25, 1),
    '&:first-child': {
      padding: theme.spacing(1.25, 2),
    },
  },
  '& tbody td': {
    padding: theme.spacing(1.5, 0.5),
    '&:first-child': {
      padding: theme.spacing(1.25, 2),
    },
  },
  '& tbody tr.root-row td': {
    background: colorPalette.warning.bg,
  },
}));
