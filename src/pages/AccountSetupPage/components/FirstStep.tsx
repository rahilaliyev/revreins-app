import { type ChangeEvent, type JSX, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { colorPalette } from 'src/theme/colorpalette';

import { useGetCrmProviders, useTenantCRMIntegrationMutation } from 'src/apis/crmConnection';
import type { ICRMIntegrationPayload } from 'src/apis/crmConnection/types';

import { Box, Typography } from '@mui/material';

import { CRMCard, CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { type TFirstStepFormData, validationFirstStepSchema } from './validationSchema';

interface IProps {
  onValidityChange: (isValid: boolean) => void;
}

const FirstStep = ({ onValidityChange }: IProps): JSX.Element => {
  const token = sessionStorage.getItem('temporaryToken') || '';
  const { data } = useGetCrmProviders(token);
  const { mutate, isSuccess, isError } = useTenantCRMIntegrationMutation();

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
    const isValid = !!key && !!name;
    onValidityChange(isValid);
  }, [key, name]);

  useEffect(() => {
    if (data && data?.length > 0) {
      formBag.setValue('id', data[0].id.toString());
    }
  }, [data]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    formBag.setValue('name', e.target.value, { shouldValidate: true });
    formBag.trigger('key');
  };

  const handleSubmit = (values: TFirstStepFormData): void => {
    const payload: ICRMIntegrationPayload = {
      crm_provider_id: Number(values.id),
      name: values.name,
      api_key: values.key,
      is_primary: true,
    };

    mutate({ payload, token });
  };

  const firstData = data && data.length > 0 ? data[0] : null;

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
        <Box maxHeight="40vh" overflow="auto">
          {firstData &&
            [firstData].map((provider) => (
              <CRMCard
                key={provider.id}
                provider={provider}
                form={formBag}
                isSuccess={isSuccess}
                isError={isError}
              />
            ))}
        </Box>
      </CustomFormProvider>
    </Box>
  );
};

export default FirstStep;
