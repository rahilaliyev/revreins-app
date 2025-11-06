import type { JSX } from 'react';
import { type ControllerProps, useController, useFormContext } from 'react-hook-form';

import {
  Box,
  FormControl,
  type FormControlProps,
  Stack,
  TextField,
  type TextFieldProps,
} from '@mui/material';

type TTextField = Omit<ControllerProps, 'render'> &
  FormControlProps &
  TextFieldProps & {
    hasErrorHeight?: boolean;
    isCountShow?: boolean;
    loading?: boolean;
  };

export const CustomTextField = (props: TTextField): JSX.Element => {
  const {
    type,
    name,
    rules,
    helperText,
    defaultValue,
    error: restError,
    hasErrorHeight = true,
    ...rest
  } = props;
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

  const message = error?.message ?? helperText ?? '';

  return (
    <FormControl fullWidth>
      <TextField
        {...field}
        {...rest}
        type={type || 'text'}
        onWheel={(e) => {
          if (type === 'number') {
            (e.target as HTMLElement).blur();
          }
        }}
      />
      <Stack justifyContent="space-between">
        <Box
          component="span"
          sx={(theme) => ({
            color: error || restError ? theme.palette.error.main : theme.palette.primary.main,
            fontSize: theme.spacing(3),
            display: 'inline-block',
            whiteSpace: 'nowrap',
            marginTop: theme.spacing(1),
            textAlign: 'left',
            height: hasErrorHeight ? theme.spacing(4.5) : 'unset',
            visibility: message ? 'visible' : 'hidden',
          })}
        >
          {message}
        </Box>
      </Stack>
    </FormControl>
  );
};
