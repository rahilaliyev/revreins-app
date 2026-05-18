import { type ChangeEvent, type JSX, useState } from 'react';

import { Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';

import { CustomModal } from 'src/components';
import { useLocalStorage } from 'src/hooks';

import { StyledInfoCard, StyledNumberWrapper } from '../styled';

import FirstImg from 'src/assets/images/configure-states.svg';
import SecondImg from 'src/assets/images/see-insights.svg';
import ThirdImg from 'src/assets/images/set-assumptions.svg';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const InformationModal = ({ open, onClose }: IProps): JSX.Element => {
  const [checked, setChecked] = useState(true);
  const [_, setHideNewProjectInfoModal] = useLocalStorage('hideNewProjectInfoModal', false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
    setHideNewProjectInfoModal(e.target.checked);
  };

  return (
    <CustomModal
      open={open}
      maxWidth="md"
      onClose={onClose}
      title="Let’s set up your project!"
      customDialogAction={
        <Stack justifyContent="space-between" width="100%">
          <FormControlLabel
            control={<Checkbox value={checked} onChange={handleChange} />}
            label="Don’t show again"
            sx={{ ml: 0 }}
          />
          <Button color="inherit" onClick={onClose}>
            Close
          </Button>
        </Stack>
      }
    >
      <Stack gap={6}>
        <StyledInfoCard>
          <img src={FirstImg} alt="Configure Stages" />
          <Typography display="flex" alignItems="center" mt={4} mb={2}>
            <StyledNumberWrapper>1</StyledNumberWrapper> Configure Stages
          </Typography>
          <Typography component="p" variant="caption2" color="text.secondary">
            <Typography variant="caption2" fontWeight={700}>
              Start by mapping CRM Objects and create stages.
            </Typography>
            Assign filters groups to refine the data to create the live Insight view.
          </Typography>
        </StyledInfoCard>
        <StyledInfoCard>
          <img src={SecondImg} alt="Set Assumptions" />
          <Typography display="flex" alignItems="center" mt={4} mb={2}>
            <StyledNumberWrapper>2</StyledNumberWrapper> Set Assumptions
          </Typography>
          <Typography component="p" variant="caption2" color="text.secondary">
            <Typography variant="caption2" fontWeight={700}>
              Configure default assumptions to see how your data changes over time.
            </Typography>
            You can always change the assumption values down the line to adjust your forecasts.
          </Typography>
        </StyledInfoCard>
        <StyledInfoCard>
          <img src={ThirdImg} alt="See Live Data" />
          <Typography display="flex" alignItems="center" mt={4} mb={2}>
            <StyledNumberWrapper>3</StyledNumberWrapper> See Live Data
          </Typography>
          <Typography component="p" variant="caption2" color="text.secondary">
            <Typography variant="caption2" fontWeight={700}>
              Publish your project to get the insight view into your data.
            </Typography>
            You can also invite other team members to collaborate and create forecasts together.
          </Typography>
        </StyledInfoCard>
      </Stack>
    </CustomModal>
  );
};

export default InformationModal;
