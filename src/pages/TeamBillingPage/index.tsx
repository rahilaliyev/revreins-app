import { type JSX, type SyntheticEvent, useState } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import { Box } from '@mui/material';

import { CustomTabPanel } from 'src/components';
import { a11yProps } from 'src/utils';

import Billing from './components/Billing';
import TeamSetup from './components/TeamSetup';
import { StyledTab, StyledTabs } from './styled';

import { GroupsIcon, PaymentIcon } from 'src/assets/icons';

const TeamBillingPage = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box height="100%">
      <Box p={[2, 3]} borderBottom={`1px solid ${colorPalette.other.stroke}`}>
        <StyledTabs value={value} onChange={handleChange} aria-label="tabs">
          <StyledTab
            icon={<GroupsIcon pathFill={colorPalette.primary.main} />}
            iconPosition="end"
            label="Team Setup"
            {...a11yProps(0)}
          />
          <StyledTab
            icon={<PaymentIcon pathFill={colorPalette.primary.main} />}
            iconPosition="end"
            label="Billing"
            {...a11yProps(1)}
          />
        </StyledTabs>
      </Box>
      <Box
        bgcolor={colorPalette.primary.bgSecondary}
        sx={{ minHeight: (theme) => `calc(100% - ${theme.spacing(17)})` }}
        p={6}
      >
        <CustomTabPanel value={value} index={0}>
          <TeamSetup />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Billing />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default TeamBillingPage;
