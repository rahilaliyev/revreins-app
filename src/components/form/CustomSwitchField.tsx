import type { JSX } from 'react';
import { type ControllerProps, useController, useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormControlLabel,
  type FormControlProps,
  FormHelperText,
  Switch,
  type SwitchProps,
} from '@mui/material';

type TCustomSwitch = Omit<ControllerProps, 'render'> &
  FormControlProps &
  SwitchProps & {
    label?: string;
  };

export const CustomSwitchField = (props: TCustomSwitch): JSX.Element => {
  const { name, rules, defaultValue = false, label, ...rest } = props;

  const { control } = useFormContext();

  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <FormControl error={!!error}>
      <FormControlLabel
        label={label}
        control={
          <Switch
            {...field}
            {...rest}
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
          />
        }
      />

      {error?.message && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};
