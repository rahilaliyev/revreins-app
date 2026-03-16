import { colorPalette } from 'src/theme/colorpalette';

import { Box, styled, Tab, Tabs } from '@mui/material';

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  padding: 0,
  background: 'none',
  minHeight: theme.spacing(10),
  borderRadius: 0,
  '& .MuiTabs-list': {
    gap: theme.spacing(2),
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  border: `1px solid ${colorPalette.primary.bg}`,
  borderRadius: theme.spacing(2),
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
  color: theme.palette.primary.main,
  '&.Mui-selected': {
    backgroundColor: colorPalette.primary.bg,
    color: colorPalette.primary.main,
    borderRadius: theme.spacing(2),
  },
}));

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  background: 'white',
  borderRadius: theme.spacing(4),
  border: `1px solid ${colorPalette.other.stroke}`,
}));
