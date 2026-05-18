import type { JSX } from 'react';
import { useWatch } from 'react-hook-form';
import { CRM_OBJECT_FIELDS_OPTIONS } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { ECRMObjectType, EDataType } from 'src/types/enums';

import { useGetCrmObjectFields } from 'src/apis/crmObjectFields';

import { Alert, Box, Divider, Stack, Typography } from '@mui/material';

import { CustomSelectField, CustomTextField } from 'src/components';

import { useStageFormContext } from '../validationSchema';

import { InformationLineIcon } from 'src/assets/icons';

const BasicSetupTab = (): JSX.Element => {
  const { control } = useStageFormContext();

  const crmObject = useWatch({
    name: 'crmObject',
    control,
  });

  const { data } = useGetCrmObjectFields({
    object_type: crmObject ?? ECRMObjectType.LEAD,
    types: [EDataType.DATE, EDataType.DATETIME],
  });

  return (
    <Box mt={4}>
      <CustomTextField
        name="name"
        label="Stage name"
        helperText="Give this stage a descriptive name"
        size="small"
        sx={{
          '& .MuiInputBase-root': {
            height: (theme) => theme.spacing(9),
          },
          '& .MuiFormHelperText-root': { mt: 2 },
        }}
      />
      <Divider sx={{ my: 6 }} />
      <Stack gap={6}>
        <CustomSelectField
          name="crmObject"
          items={CRM_OBJECT_FIELDS_OPTIONS}
          label="CRM Object"
          helperText="Select the Salesforce object to query"
          size="small"
          sx={{
            height: (theme) => theme.spacing(9),
            background: '#F3F3F5',
          }}
        />
        <CustomSelectField
          name="dateField"
          items={(data || [])?.map((el) => ({
            value: el.id,
            label: el.name,
          }))}
          label="Date Field"
          helperText="Date field to use for time-based filtering"
          size="small"
          sx={{
            height: (theme) => theme.spacing(9),
            background: '#F3F3F5',
          }}
        />
      </Stack>
      <Divider sx={{ my: 6 }} />
      <Alert icon={<InformationLineIcon pathFill={colorPalette.info.main} />} severity="info">
        <Typography fontWeight={500}>Quick Tip</Typography>
        <Typography>
          After setting up the basic configuration, switch to the &quot;Filter Conditions&quot; tab to add
          advanced filtering logic.
        </Typography>
      </Alert>
    </Box>
  );
};

export default BasicSetupTab;
