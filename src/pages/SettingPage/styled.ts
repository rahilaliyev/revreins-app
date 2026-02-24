import { colorPalette } from 'src/theme/colorpalette';

import { alpha, Avatar, Box, styled, Tab, Tabs } from '@mui/material';

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
  cursor: 'pointer',
  position: 'relative',
  transition: '0.5s',
  '&::after': {
    content: '"Change image"',
    transition: '0.5s',
    position: 'absolute',
    inset: 0,
    opacity: 0,
    background: `linear-gradient(0deg, ${alpha('#000', 0.25)} 0%, ${alpha('#000', 0.25)} 100%), ${colorPalette.primary.bg}`,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 500,
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

export const StyledDangerZone = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: colorPalette.error.bg,
}));
