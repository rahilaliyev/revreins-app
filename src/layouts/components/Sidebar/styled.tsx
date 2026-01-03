import type { NavLink } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Divider, IconButton, ListItem, type ListItemProps, Stack, styled } from '@mui/material';

interface IStyledMenuListItemProps extends ListItemProps<typeof NavLink> {
  isExpanded: boolean;
}

export const StyledSidebar = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: isActive ? theme.spacing(67.5) : theme.spacing(14),
  height: '100vh',
  padding: isActive ? theme.spacing(4) : theme.spacing(0),
  transition: '.5s',
  borderRight: `1px solid ${colorPalette.other.stroke}`,
}));

export const StyledMenuListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<IStyledMenuListItemProps>(({ theme, isExpanded }) => ({
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  padding: isExpanded ? theme.spacing(2, 3) : theme.spacing(2),
  width: isExpanded ? '100%' : theme.spacing(10),
  transition: '0.5s all',
  '&:not(:last-child)': {
    marginBottom: isExpanded ? `${theme.spacing(3)} !important` : `${theme.spacing(1)} !important`,
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

export const StyledDivider = styled(Divider)<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  margin: isExpanded ? theme.spacing(6, 0) : theme.spacing(4, 0),
  borderColor: colorPalette.other.stroke,
  height: theme.spacing(0.25),
}));

export const StyledFreeTrial = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  border: `1px solid ${colorPalette.other.stroke}`,
  background: 'linear-gradient(241deg, rgba(245, 245, 245, 0.00) 0%, rgba(205, 255, 0, 0.33) 100%), #F5F5F5',
  boxShadow: `12px 12px 32px 0 rgba(255, 255, 255, 0.25) inset, -12px -12px 32px 0 rgba(255, 255, 255, 0.25) inset`,
}));

export const StyledCloseIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
}));
