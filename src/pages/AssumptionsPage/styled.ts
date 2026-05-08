import { colorPalette } from 'src/theme/colorpalette';

import { Box, IconButton, Stack, styled, Table } from '@mui/material';

export const StyledNavigateBackButton = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.spacing(2),
  background: theme.palette.secondary.main,
  marginRight: theme.spacing(3),
}));

export const StyledContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: theme.spacing(6),
  padding: theme.spacing(6),
  backgroundColor: colorPalette.primary.bgSecondary,
  minHeight: `calc(100% - ${theme.spacing(25.5)})`,
}));

export const StyledComponentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'fit-content',
  padding: theme.spacing(6),
  background: 'white',
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(3.5),
  maxWidth: `calc(100vw - ${theme.spacing(75)})`,
}));

export const StyledAssumptionTable = styled(Table)(({ theme }) => ({
  minWidth: theme.spacing(160),
  '& tr': {
    padding: theme.spacing(3, 5),
  },

  '& td': {
    padding: theme.spacing(3, 5),
  },
}));

export const StyledDeleteIconWrapper = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  borderRadius: theme.spacing(1),
  background: theme.palette.secondary.main,
}));
