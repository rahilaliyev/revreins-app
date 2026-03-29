import { type ChangeEvent, type JSX, useState } from 'react';

import { Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';

import { CustomModal } from 'src/components';
import { useLocalStorage } from 'src/hooks';

import { StyledInfoCard, StyledNumberWrapper } from '../styled';

import FirstImg from 'src/assets/images/onboarding-wizard1.png';
import SecondImg from 'src/assets/images/onboarding-wizard2.png';
import ThirdImg from 'src/assets/images/onboarding-wizard3.png';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const InformationModal = ({ open, onClose }: IProps): JSX.Element => {
  const [checked, setChecked] = useState(true);
  const [_, setHideProjectDetailInfoModal] = useLocalStorage('hideProjectDetailInfoModal', false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
    setHideProjectDetailInfoModal(e.target.checked);
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
          <Typography display="flex" alignItems="center" mt={4} mb={2} fontWeight={500}>
            <StyledNumberWrapper>1</StyledNumberWrapper> Edit
          </Typography>
          <Typography component="p" variant="caption2" color="text.secondary">
            <Typography variant="caption2" fontWeight={700}>
              Start editing your future data directly in the table.{' '}
            </Typography>
            All changes are saved automatically. Invite team members to collaborate on a project.
          </Typography>
        </StyledInfoCard>
        <StyledInfoCard>
          <img src={SecondImg} alt="Set Assumptions" />
          <Typography display="flex" alignItems="center" mt={4} mb={2} fontWeight={500}>
            <StyledNumberWrapper>2</StyledNumberWrapper> Publish
          </Typography>
          <Typography component="p" variant="caption2" color="text.secondary" fontWeight={700}>
            <Typography variant="caption2" fontWeight={400}>
              When you&apos;re ready, press &quot;Publish Forecast&quot; to generate your forecast.
            </Typography>
            <br />
            Note: Published forecasts can’t be edited.
          </Typography>
        </StyledInfoCard>
        <StyledInfoCard>
          <img src={ThirdImg} alt="See Live Data" />
          <Typography display="flex" alignItems="center" mt={4} mb={2} fontWeight={500}>
            <StyledNumberWrapper>3</StyledNumberWrapper> Forecasts
          </Typography>
          <Typography component="p" variant="caption2" color="text.secondary" fontWeight={700}>
            <Typography variant="caption2" fontWeight={400}>
              To create a new forecast, return to Insight View, update your future data as needed, and publish
              again.
            </Typography>
            Each publication creates a new forecast snapshot.
          </Typography>
        </StyledInfoCard>
      </Stack>
    </CustomModal>
  );
};

export default InformationModal;
