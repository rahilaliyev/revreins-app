import React, { type ChangeEvent, type JSX, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Button, Chip, Stack, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { StyledApiKey, StyledCloseApiIconWrapper } from '../styled';

import { type TFirstStepFormData, validationFirstStepSchema } from './validationSchema';

import { AddFillIcon, CloseComIcon } from 'src/assets/icons';

interface IProps {
  onValidityChange: (isValid: boolean) => void;
}

const FirstStep = ({ onValidityChange }: IProps): JSX.Element => {
  const [isConnected, setIsConnected] = useState(false);
  const formBag = useForm<TFirstStepFormData>({
    resolver: zodResolver(validationFirstStepSchema),
    mode: 'onTouched',
    defaultValues: {
      key: '',
      name: '',
    },
  });

  const [key, name] = useWatch({
    control: formBag.control,
    name: ['key', 'name'],
  });

  useEffect(() => {
    const isValid = !!key && !!name && isConnected;
    onValidityChange(isValid);
  }, [key, name, isConnected]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    formBag.setValue('name', e.target.value, { shouldValidate: true });
    formBag.trigger();
  };

  const handleKeyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    formBag.setValue('key', e.target.value, { shouldValidate: true });
    formBag.trigger();
  };

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
          <CustomTextField
            name="name"
            label="Name your CRM connection"
            placeholder="Connection name"
            onChange={handleNameChange}
          />
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
            <CustomTextField
              name="key"
              label="Insert your Close.com API key"
              type="password"
              onChange={handleKeyChange}
            />
          </Stack>
          <Stack gap={3}>
            {isConnected ? (
              <Button variant="outlined" color="error" fullWidth>
                Disconnect CRM
              </Button>
            ) : (
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
            )}
          </Stack>
        </StyledApiKey>
      </CustomFormProvider>
    </Box>
  );
};

export default FirstStep;
