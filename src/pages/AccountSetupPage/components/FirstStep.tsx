import React, { type JSX, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Button, Chip, Stack, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { StyledApiKey, StyledCloseApiIconWrapper } from '../styled';

import { AddFillIcon, CloseComIcon } from 'src/assets/icons';

interface IProps {
  onSkip: () => void;
}

const FirstStep = ({ onSkip }: IProps): JSX.Element => {
  const [isConnected, setIsConnected] = useState(false);
  const formBag = useForm({
    defaultValues: {
      key: '',
    },
  });

  const key = useWatch({
    control: formBag.control,
    name: 'key',
  });

  const handleSubmit = (): void => {};

  const handleConnection = (): void => setIsConnected(true);

  return (
    <Box pt={2}>
      <Box>
        <Typography variant="h6" fontWeight={500}>
          Connect Your CRM
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Tell us your company name & connect a CRM to sync your sales data. You can also skip this step to
          connect it later.
          <br /> Need help? Check{' '}
          <Link to="#" style={{ color: colorPalette.text.link, textDecoration: 'underline' }}>
            Close.com API documentation.
          </Link>
        </Typography>
      </Box>
      <CustomFormProvider onSubmit={handleSubmit} form={formBag}>
        <Box my={6}>
          <CustomTextField name="name" label="Name your CRM connection" placeholder="Connection name" />
        </Box>
        <StyledApiKey>
          <Stack justifyContent="space-between">
            <Stack gap={3}>
              <StyledCloseApiIconWrapper>
                <CloseComIcon />
              </StyledCloseApiIconWrapper>
              <Stack flexDirection="column" alignItems="flex-start">
                <Typography component="p" variant="body1">
                  Connect Your Close.com CRM
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  Enter the API key below to connect
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Chip
                variant="outlined"
                label={<Typography variant="body2">{isConnected ? 'Connected' : 'Not connected'}</Typography>}
                size="small"
                color={isConnected ? 'success' : 'default'}
              />
            </Stack>
          </Stack>
          <Stack my={6}>
            <CustomTextField name="key" label="Insert your Close.com API key" type="password" />
          </Stack>
          <Stack gap={3}>
            {isConnected ? (
              <Button variant="outlined" color="error" fullWidth>
                Disconnect CRM
              </Button>
            ) : (
              <>
                <Button
                  disabled={!key}
                  fullWidth
                  variant="outlined"
                  type="button"
                  sx={{ gap: (theme) => theme.spacing(3) }}
                  onClick={handleConnection}
                >
                  Connect CRM
                  <AddFillIcon pathFill={key ? colorPalette.primary.main : colorPalette.other.icon} />
                </Button>
                <Button fullWidth variant="outlined" type="button" color="secondary" onClick={onSkip}>
                  Skip for now
                </Button>
              </>
            )}
          </Stack>
        </StyledApiKey>
      </CustomFormProvider>
    </Box>
  );
};

export default FirstStep;
