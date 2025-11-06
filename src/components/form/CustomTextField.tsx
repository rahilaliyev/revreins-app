import type { JSX } from 'react';
import { type ControllerProps, useController, useFormContext } from 'react-hook-form';

import { FormControl, type FormControlProps, TextField, type TextFieldProps } from '@mui/material';

type TTextField = Omit<ControllerProps, 'render'> &
  FormControlProps &
  TextFieldProps & {
    hasErrorHeight?: boolean;
    isCountShow?: boolean;
    loading?: boolean;
  };

export const CustomTextField = (props: TTextField): JSX.Element => {
  const { type, name, rules, helperText, defaultValue, ...rest } = props;
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <FormControl fullWidth>
      <TextField
        {...field}
        {...rest}
        type={type || 'text'}
        error={!!error?.message}
        helperText={error?.message ?? helperText ?? ''}
        onWheel={(e) => {
          if (type === 'number') {
            (e.target as HTMLElement).blur();
          }
        }}
      />
    </FormControl>
  );
};
