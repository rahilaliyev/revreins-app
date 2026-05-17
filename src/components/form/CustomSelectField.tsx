import type { JSX, ReactNode } from 'react';
import { type ControllerProps, useController, useFormContext } from 'react-hook-form';

import {
  Box,
  Checkbox,
  Chip,
  CircularProgress,
  FormControl,
  type FormControlProps,
  FormHelperText,
  InputLabel,
  ListItemText,
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
  const {
    name,
    defaultValue,
    rules,
    helperText,
    label,
    loading,
    placeholder,
    items = [],
    multiple = false,
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
    defaultValue: defaultValue ?? (multiple ? [] : ''),
  });

  const message = error?.message ?? helperText ?? '';

  const selectedValues: (string | number)[] = multiple
    ? Array.isArray(field.value)
      ? field.value
      : field.value
        ? [field.value]
        : []
    : field.value;

  let content: ReactNode;

  if (loading || !items.length) {
    content = (
      <Typography
        variant="body2"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          padding: (theme) => theme.spacing(2, 4),
        }}
      >
        {loading ? 'Loading...' : 'Data not available'}
      </Typography>
    );
  } else if (multiple) {
    content = items.map((item) => (
      <MenuItem key={item.value} value={item.value} disabled={item.disabled}>
        <Checkbox checked={selectedValues.includes(item.value)} size="small" sx={{ py: 0 }} />
        <ListItemText primary={item.label} />
      </MenuItem>
    ));
  } else {
    content = items.map((item) => (
      <MenuItem key={item.value} value={item.value} disabled={item.disabled}>
        {item.label}
      </MenuItem>
    ));
  }

  const renderValue = (selected: unknown): ReactNode => {
    if (multiple) {
      const values = selected as (string | number)[];

      if (!values || values.length === 0) {
        return (
          <Typography component="span" sx={{ color: (theme) => theme.palette.text.disabled }}>
            {placeholder || 'Choose'}
          </Typography>
        );
      }

      return (
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {values.map((val) => {
            const match = items.find((item) => item.value === val);
            return (
              <Chip
                key={val}
                label={match?.label ?? val}
                size="small"
                onMouseDown={(e) => e.stopPropagation()}
                onDelete={() => {
                  const next = values.filter((v) => v !== val);
                  field.onChange(next);
                }}
              />
            );
          })}
        </Box>
      );
    }

    const match = items.find((item) => item.value === selected);
    if (match) {
      return match.label;
    }

    return (
      <Typography component="span" sx={{ color: (theme) => theme.palette.text.disabled }}>
        {placeholder || 'Choose'}
      </Typography>
    );
  };

  return (
    <FormControl fullWidth error={!!error}>
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
        displayEmpty
        multiple={multiple}
        renderValue={renderValue}
        {...field}
        value={multiple ? selectedValues : field.value}
        {...rest}
        {...(loading
          ? {
              IconComponent: (): ReactNode => <CircularProgress size={20} />,
            }
          : {})}
        MenuProps={{
          PaperProps: {
            sx: {
              width: 'auto',
              ...(multiple && { pointerEvents: 'auto' }),
            },
          },
          ...(multiple && ({ disableCloseOnSelect: true } as object)),
        }}
      >
        {!multiple && (
          <MenuItem value="" disabled sx={{ color: (theme) => theme.palette.text.secondary }}>
            {placeholder || 'Choose'}
          </MenuItem>
        )}
        {content}
      </Select>
      {message && <FormHelperText>{message}</FormHelperText>}
    </FormControl>
  );
};
