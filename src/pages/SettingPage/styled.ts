import { colorPalette } from 'src/theme/colorpalette';

import { Avatar, Box, styled, Tab, Tabs } from '@mui/material';

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

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  background: colorPalette.primary.bg,
  color: colorPalette.primary.main,
  width: theme.spacing(32),
  height: theme.spacing(32),
  fontSize: theme.typography.h4.fontSize,
  fontWeight: 500,
  lineHeight: theme.typography.h4.lineHeight,
  marginRight: theme.spacing(8),
}));

export const StyledDangerZone = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: colorPalette.error.bg,
}));
