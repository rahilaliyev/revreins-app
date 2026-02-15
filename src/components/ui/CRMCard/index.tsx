import { type ChangeEvent, type JSX, useEffect } from 'react';
import { type UseFormReturn, useWatch } from 'react-hook-form';
import { colorPalette } from 'src/theme/colorpalette';

import type { ICRMProvider } from 'src/apis/crmConnection/types';

import { Button, Chip, Stack, Typography } from '@mui/material';

import { CustomTextField } from 'src/components/form/CustomTextField';
import type { TFirstStepFormData } from 'src/pages/AccountSetupPage/components/validationSchema';

import { LoadingButton } from '../LoadingButton';

import { StyledApiKey, StyledIconWrapper, StyledImg } from './styled';

import { AddFillIcon } from 'src/assets/icons';

interface IProps {
  provider: ICRMProvider;
  form: UseFormReturn<TFirstStepFormData>;
  isSuccess?: boolean;
  isError?: boolean;
  isPending?: boolean;
  setIsSuccessConnection: (value: boolean) => void;
}

export const CRMCard = ({
  provider,
  form,
  isSuccess,
  isError,
  isPending,
  setIsSuccessConnection,
}: IProps): JSX.Element => {
  const { control, setValue, trigger } = form;

  const key = useWatch({
    control,
    name: 'key',
  });

  useEffect(() => {
    setIsSuccessConnection(isSuccess ?? false);
  }, [isSuccess, setIsSuccessConnection]);

  const handleKeyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue('key', e.target.value, { shouldValidate: true });
    trigger('name');
  };

  return (
    <StyledApiKey>
      <Stack justifyContent="space-between">
        <Stack gap={3}>
          <StyledIconWrapper>
            <StyledImg src={provider.logo} alt="Logo of provider" />
          </StyledIconWrapper>
          <Stack flexDirection="column" alignItems="flex-start">
            <Typography component="p">{`Connect Your ${provider.display_name}`}</Typography>
            <Typography component="p" variant="body2" color="textSecondary">
              Enter the API key below to connect
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Chip
            variant="outlined"
            label={
              <Typography variant="body2">
                {isSuccess ? 'Connected' : isError ? 'Error' : 'Not connected'}
              </Typography>
            }
            size="small"
            color={isSuccess ? 'success' : isError ? 'error' : 'default'}
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
        {isSuccess ? (
          <Button variant="outlined" color="error" fullWidth onClick={() => setIsSuccessConnection(false)}>
            Disconnect CRM
          </Button>
        ) : (
          <LoadingButton
            loading={isPending}
            disabled={!key}
            fullWidth
            variant="outlined"
            type="submit"
            sx={{ gap: (theme) => theme.spacing(3) }}
          >
            Connect CRM
            <AddFillIcon pathFill={key ? colorPalette.primary.main : colorPalette.other.icon} />
          </LoadingButton>
        )}
      </Stack>
    </StyledApiKey>
  );
};
