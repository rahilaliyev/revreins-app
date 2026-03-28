import { type JSX, useEffect, useState } from 'react';
import { type ControllerProps, useController, useFormContext } from 'react-hook-form';
import dayjs, { type Dayjs } from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

import {
  Button,
  FormControl,
  type FormControlProps,
  FormHelperText,
  IconButton,
  InputLabel,
  Stack,
  styled,
} from '@mui/material';
import {
  DesktopDatePicker,
  type DesktopDatePickerProps,
  LocalizationProvider,
  type PickersCalendarHeaderProps,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { PickersActionBarProps } from '@mui/x-date-pickers/PickersActionBar';

import { ArrowLeftSLineIcon, ArrowRightSLineIcon } from 'src/assets/icons';

dayjs.extend(updateLocale);

type TDesktopDatePickerField = Omit<ControllerProps, 'render'> &
  FormControlProps &
  DesktopDatePickerProps & {
    hasErrorHeight?: boolean;
    helperText?: string;
    outputFormat?: string;
    onBlur?: () => void;
    onFocus?: () => void;
  };

dayjs.updateLocale('en', {
  weekStart: 1,
});

interface ICustomActionBarProps extends PickersActionBarProps {
  onAccept?: () => void;
  onCancel?: () => void;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  backgroundColor: 'white',
  borderRadius: theme.spacing(1),
}));

const CustomActionBar = (props: ICustomActionBarProps): JSX.Element => {
  const { onAccept, onCancel } = props;

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ p: 3 }}>
      <Button color="secondary" onClick={onCancel}>
        Cancel
      </Button>
      <Button onClick={onAccept} variant="contained">
        Apply
      </Button>
    </Stack>
  );
};

const CustomCalendarHeader = (props: PickersCalendarHeaderProps): JSX.Element => {
  const { currentMonth, onMonthChange, onViewChange, view } = props;

  const handleViewChange = (): void => {
    if (view === 'day') {
      onViewChange?.('year');
    } else {
      onViewChange?.('day');
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        p: 1,
        bgcolor: (theme) => theme.palette.secondary.main,
        borderRadius: (theme) => theme.spacing(2),
      }}
    >
      <StyledIconButton onClick={() => onMonthChange(currentMonth.subtract(1, 'month'))}>
        <ArrowLeftSLineIcon width={16} height={16} />
      </StyledIconButton>

      <Button
        variant="text"
        color="secondary"
        onClick={handleViewChange}
        sx={{ padding: 0, height: 'inherit' }}
      >
        {currentMonth.format('MMMM YYYY')}
      </Button>

      <StyledIconButton onClick={() => onMonthChange(currentMonth.add(1, 'month'))}>
        <ArrowRightSLineIcon width={16} height={16} />
      </StyledIconButton>
    </Stack>
  );
};

export const CustomDatePickerField = (props: TDesktopDatePickerField): JSX.Element => {
  const { name, label, defaultValue, rules, helperText, onBlur, onFocus, outputFormat, ...rest } = props;

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

  const [open, setOpen] = useState(false);
  const [tempValue, setTempValue] = useState<Dayjs | null>(field.value ? dayjs(field.value) : null);

  const message = error?.message ?? helperText ?? '';

  useEffect(() => {
    setTempValue(field.value ? dayjs(field.value) : null);
  }, [field.value]);

  const handleAccept = (): void => {
    const value = outputFormat && tempValue ? tempValue.format(outputFormat) : tempValue;
    field.onChange(value);
    setOpen(false);
  };

  const handleCancel = (): void => {
    setTempValue(field.value ? dayjs(field.value) : null);
    setOpen(false);
  };

  const ActionBarWithHandlers = (actionBarProps: ICustomActionBarProps): JSX.Element => (
    <CustomActionBar {...actionBarProps} onAccept={handleAccept} onCancel={handleCancel} />
  );

  return (
    <LocalizationProvider key="en" dateAdapter={AdapterDayjs} adapterLocale="en">
      <FormControl onBlur={onBlur} onFocus={onFocus} fullWidth>
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
        <DesktopDatePicker
          {...rest}
          open={open}
          onOpen={() => {
            setTempValue(field.value ? dayjs(field.value) : null);
            setOpen(true);
          }}
          onClose={() => setOpen(false)}
          value={tempValue}
          onChange={(newValue) => setTempValue(newValue)}
          closeOnSelect={false}
          dayOfWeekFormatter={(dayOfWeek) => dayOfWeek.format('dd')}
          showDaysOutsideCurrentMonth={true}
          slots={{
            actionBar: ActionBarWithHandlers,
            calendarHeader: CustomCalendarHeader,
          }}
          slotProps={{
            textField: {
              placeholder: 'Select',
              InputLabelProps: {
                shrink: true,
              },
            },
            actionBar: {
              actions: ['cancel', 'accept'],
            },
          }}
        />

        {message && <FormHelperText>{message}</FormHelperText>}
      </FormControl>
    </LocalizationProvider>
  );
};
