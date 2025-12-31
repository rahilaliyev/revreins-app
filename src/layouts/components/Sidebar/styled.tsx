import type { NavLink } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Divider, ListItem, type ListItemProps, styled } from '@mui/material';

export const StyledSidebar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: isActive ? theme.spacing(67.5) : theme.spacing(14),
  height: '100vh',
  padding: isActive ? theme.spacing(4) : theme.spacing(0),
  transition: '.5s',
  borderRight: `1px solid ${colorPalette.other.stroke}`,
}));

export const StyledMenuListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<ListItemProps<typeof NavLink>>(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2, 3),
  transition: '0.5s',
  '&:not(:last-child)': {
    marginBottom: `${theme.spacing(3)} !important`,
  },
  '& svg path': {
    fill: colorPalette.other.icon,
    transition: '0.5s',
  },
  '&.active': {
    backgroundColor: colorPalette.secondary.main,
    color: theme.palette.text.primary,
    '& svg path': {
      fill: colorPalette.other.black,
    },
  },
  '& .MuiListItemIcon-root': {
    minWidth: theme.spacing(6),
  },
  '&:hover': {
    backgroundColor: colorPalette.secondary.hover,
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(6, 0),
  borderColor: colorPalette.other.stroke,
  height: theme.spacing(0.25),
}));
