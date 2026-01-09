import type { JSX, ReactNode } from 'react';
import { type ControllerProps, useController, useFormContext } from 'react-hook-form';

import {
  Box,
  CircularProgress,
  FormControl,
  type FormControlProps,
  InputLabel,
  MenuItem,
  Select,
  type SelectProps,
  Typography,
} from '@mui/material';

interface ISelectItem {
  value: string | number;
  label: string;
  disabled?: boolean;
}

type TSelectField = Omit<ControllerProps, 'render'> &
  FormControlProps &
  SelectProps & {
    hasErrorHeight?: boolean;
    items: ISelectItem[];
    helperText?: ReactNode;
    loading?: boolean;
    placeholder?: string;
  };

export const CustomSelectField = (props: TSelectField): JSX.Element => {
  const { name, defaultValue, rules, helperText, label, loading, placeholder, items = [], ...rest } = props;
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

  let content = null;
  const message = error?.message ?? helperText ?? '';

  if (loading || !items.length) {
    content = (
      <Typography
        variant="body2"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          padding: (theme) => theme.spacing(2, 4),
        }}
      >
        {loading ? 'Loading' + '...' : 'Data not available'}
      </Typography>
    );
  } else {
    content = items.map((item) => (
      <MenuItem key={item.value} value={item.value} disabled={item.disabled}>
        {item.label}
      </MenuItem>
    ));
  }

  return (
    <FormControl fullWidth>
      {label && (
        <InputLabel
          sx={{
            '&.Mui-error': {
              color: (theme) => theme.palette.text.secondary,
            },
          }}
        >
          {label}
        </InputLabel>
      )}
      <Select
        {...field}
        {...rest}
        {...(loading
          ? {
              IconComponent: (): ReactNode => <CircularProgress />,
            }
          : {})}
        MenuProps={{
          PaperProps: {
            sx: {
              width: 'auto',
            },
          },
        }}
      >
        <MenuItem value="" disabled>
          {placeholder || 'Choose'}
        </MenuItem>
        {content}
      </Select>
      {message && <Box mt={3}>{message}</Box>}
    </FormControl>
  );
};
