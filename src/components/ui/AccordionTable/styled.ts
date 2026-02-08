import { colorPalette } from 'src/theme/colorpalette';

import { Box, styled, Table, TextField, Typography } from '@mui/material';

export const StyledAccordionTable = styled(Table)(({ theme }) => ({
  position: 'relative',
  '& thead': {
    background: colorPalette.secondary.main,
  },
  '& thead th': {
    padding: theme.spacing(1.25, 1),
    '&:first-of-type': {
      padding: theme.spacing(1.25, 2),
    },
  },
  '& tbody td': {
    padding: theme.spacing(1.5, 0.5),
    '&:first-of-type': {
      padding: theme.spacing(1.25, 2),
    },
  },
  '& tbody tr.root-row td': {
    background: colorPalette.warning.bg,
    '&.future-month': {
      background: colorPalette.primary.bg,
    },
  },
}));

export const StyledCurrentMonthIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  pointerEvents: 'none',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: theme.spacing(-0.6),
    width: theme.spacing(0.5),
    height: '100%',
    background: colorPalette.primary.hover,
    zIndex: theme.zIndex.appBar,
  },
}));

export const StyledCurrentMonthText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(-7.5),
  whiteSpace: 'nowrap',
  left: theme.spacing(-10),
  fontWeight: 600,
}));

export const StyledPolygonIconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(-1.5),
  top: theme.spacing(-3.5),
}));

export const StyledEditableCell = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    padding: 0,
    height: 'auto',

    '& input': {
      textAlign: 'right',
    },
  },
}));
