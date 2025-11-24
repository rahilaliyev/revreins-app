import { type JSX, useState } from 'react';
import { EAccountSetup } from 'src/types/enums';

import { Box, Button, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

import { CustomStepIcon } from 'src/components';

import FirstStep from './components/FirstStep';
import FourthStep from './components/FourthStep';
import SecontStep from './components/SecontStep';
import ThirdStep from './components/ThirdStep';
import { StyledSidebar, StyledWrapper } from './styled';

import { ArrowLeftLineIcon } from 'src/assets/icons';

const STEPPER_NAMES = ['Connect CRM', 'Set up your team', 'Chose a starting point', 'Review'];

const AccountSetup = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(EAccountSetup.FIRST_STEP);

  const handleNext = (): void => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = (): void => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const submitButtonText =
    activeStep === EAccountSetup.SECOND_STEP
      ? 'Invite'
      : activeStep === EAccountSetup.FOURTH_STEP
        ? 'Complete'
        : 'Continue';

  return (
    <Stack width="100vw" height="100vh" justifyContent="center" alignItems="center" bgcolor="primary.hover">
      <StyledWrapper>
        <StyledSidebar>
          <Typography mb={3} variant="h6" fontWeight={600}>
            Account Setup
          </Typography>
          <Stepper activeStep={activeStep} orientation="vertical">
            {STEPPER_NAMES.map((label) => (
              <Step key={label}>
                <StepLabel
                  slots={{
                    stepIcon: CustomStepIcon,
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </StyledSidebar>
        <Stack
          flexDirection="column"
          justifyContent="space-between"
          width="calc(100% - 245px)"
          height="100%"
          p={6}
        >
          <Box width="100%">
            {activeStep === EAccountSetup.FIRST_STEP && <FirstStep onSkip={handleNext} />}
            {activeStep === EAccountSetup.SECOND_STEP && <SecontStep />}
            {activeStep === EAccountSetup.THIRD_STEP && <ThirdStep />}
            {activeStep === EAccountSetup.FOURTH_STEP && <FourthStep />}
          </Box>
          <Stack width="100%">
            <Stack width="100%">
              {activeStep !== EAccountSetup.FIRST_STEP && (
                <Button startIcon={<ArrowLeftLineIcon />} color="secondary" onClick={handleBack}>
                  Back
                </Button>
              )}
            </Stack>
            <Stack width="100%" justifyContent="flex-end" gap={4}>
              {activeStep !== EAccountSetup.FIRST_STEP && (
                <Button variant="outlined" color="secondary" onClick={handleNext}>
                  Skip
                </Button>
              )}
              <Button color="inherit">{submitButtonText}</Button>
            </Stack>
          </Stack>
        </Stack>
      </StyledWrapper>
    </Stack>
  );
};

export default AccountSetup;
