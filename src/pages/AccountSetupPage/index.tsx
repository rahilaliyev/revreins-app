import { type JSX, type PropsWithChildren, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { EAccountSetup } from 'src/types/enums';

import { Box, Button, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

import { CustomStepIcon } from 'src/components';
import { useCustomSearchParams } from 'src/hooks';
import { ROUTES } from 'src/routes/paths';
import { setAuthCookies } from 'src/utils';

import FirstStep from './components/FirstStep';
import FourthStep from './components/FourthStep';
import SecontStep from './components/SecontStep';
import ThirdStep from './components/ThirdStep';
import { StyledSidebar, StyledWrapper } from './styled';

import { ArrowLeftLineIcon } from 'src/assets/icons';

const STEPPER_NAMES = ['Connect CRM', 'Set up your team', 'Chose a starting point', 'Review'];

interface IStepWrapperProps extends PropsWithChildren {
  isActive: boolean;
}

const StepWrapper = ({ isActive, children }: IStepWrapperProps): JSX.Element => (
  <Box sx={{ display: isActive ? 'block' : 'none', width: '100%' }}>{children}</Box>
);

const AccountSetup = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useCustomSearchParams();
  const [activeStep, setActiveStep] = useState(EAccountSetup.FIRST_STEP);
  const [isStepValid, setIsStepValid] = useState(false);

  const { token, email } = searchParams;

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep === EAccountSetup.FOURTH_STEP) {
      enqueueSnackbar({ message: 'Account setup completed successfully', variant: 'success' });
      const token = sessionStorage.getItem('temporaryToken');
      if (token) {
        setAuthCookies(token);
        sessionStorage.removeItem('temporaryToken');
        navigate(ROUTES.DEFAULT.PATH);
      }
    }
  };

  const handleBack = (): void => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    setIsStepValid(false);
  }, [activeStep]);

  useEffect(() => {
    if (!token || !email) {
      enqueueSnackbar({ message: 'Something went wrong', variant: 'error' });
    }
  }, [token, email]);

  const submitButtonText =
    activeStep === EAccountSetup.SECOND_STEP
      ? 'Invite'
      : activeStep === EAccountSetup.FOURTH_STEP
        ? 'Complete'
        : 'Continue';

  if (!token || !email) {
    return <Navigate to={ROUTES.AUTH.SIGNIN.PATH} />;
  }

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
            <StepWrapper isActive={activeStep === EAccountSetup.FIRST_STEP}>
              <FirstStep onValidityChange={setIsStepValid} />
            </StepWrapper>

            <StepWrapper isActive={activeStep === EAccountSetup.SECOND_STEP}>
              <SecontStep onValidityChange={setIsStepValid} />
            </StepWrapper>

            <StepWrapper isActive={activeStep === EAccountSetup.THIRD_STEP}>
              <ThirdStep onValidityChange={setIsStepValid} />
            </StepWrapper>

            <StepWrapper isActive={activeStep === EAccountSetup.FOURTH_STEP}>
              <FourthStep />
            </StepWrapper>
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
              <Button variant="outlined" color="secondary" onClick={handleNext}>
                Skip
              </Button>
              <Button color="inherit" disabled={!isStepValid} onClick={handleNext}>
                {submitButtonText}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </StyledWrapper>
    </Stack>
  );
};

export default AccountSetup;
