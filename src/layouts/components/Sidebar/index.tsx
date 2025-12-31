import { type JSX, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';
import type { IMenuItem } from 'src/types/interfaces';

import { IconButton, List, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

import { ROUTES } from 'src/routes/paths';

import { StyledDivider, StyledMenuListItem, StyledSidebar } from './styled';

import {
  ContractLeftLineIcon,
  CurrencyLineIcon,
  Database2LineIcon,
  FundsFillIcon,
  Home5LineIcon,
  Setting5LineIcon,
} from 'src/assets/icons';
import Logo from 'src/assets/images/logo-dashboard.svg?react';

interface IMenuItemsProps {
  items: IMenuItem[];
  isExpanded: boolean;
}

const MAIN_MENU_ITEMS = [
  {
    text: 'Dashboard',
    icon: <Home5LineIcon />,
    path: ROUTES.DEFAULT.PATH,
  },
  {
    text: 'Projects',
    icon: <FundsFillIcon />,
    path: ROUTES.DEFAULT.PROJECTS.PATH,
  },
  {
    text: 'CRM Data',
    icon: <Database2LineIcon />,
    path: ROUTES.DEFAULT.CRM_DATA.PATH,
  },
];

const ACCOUNT_MENU_ITEMS = [
  {
    text: 'Setting',
    icon: <Setting5LineIcon />,
    path: ROUTES.DEFAULT.SETTING.PATH,
  },
  {
    text: 'Team & Billing',
    icon: <CurrencyLineIcon />,
    path: ROUTES.DEFAULT.TEAM_BILLING.PATH,
  },
];

const MenuItems = ({ items, isExpanded }: IMenuItemsProps): JSX.Element => (
  <>
    {items.map((item) => (
      <StyledMenuListItem key={item.text} component={NavLink} to={item.path}>
        <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
        {isExpanded && (
          <ListItemText
            primary={item.text}
            slotProps={{
              primary: {
                variant: 'body1',
              },
            }}
          />
        )}
      </StyledMenuListItem>
    ))}
  </>
);

const Sidebar = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <StyledSidebar isActive={isExpanded}>
      <Stack flexDirection="column">
        <Stack width="100%" justifyContent="space-between" alignItems="center" mb={4}>
          <Link to={ROUTES.DEFAULT.PATH}>
            <Logo />
          </Link>
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            <ContractLeftLineIcon pathFill={colorPalette.other.icon} />
          </IconButton>
        </Stack>
        <List sx={{ width: '100%', flex: 1 }}>
          <MenuItems items={MAIN_MENU_ITEMS} isExpanded={isExpanded} />
          <StyledDivider />
          <Typography variant="body1" mb={2} sx={{ opacity: isExpanded ? 1 : 0, marginLeft: '0 !important' }}>
            Account
          </Typography>
          <MenuItems items={ACCOUNT_MENU_ITEMS} isExpanded={isExpanded} />
        </List>
      </Stack>
    </StyledSidebar>
  );
};

export default Sidebar;
