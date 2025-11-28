import { type JSX, type ReactNode, useState } from 'react';
import { type ControllerProps, useController, useFormContext } from 'react-hook-form';
import { colorPalette } from 'src/theme/colorpalette';

import {
  Box,
  FormControl,
  type FormControlProps,
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from '@mui/material';

import { EyeLineIcon, EyeOffLineIcon } from 'src/assets/icons';

type TTextField = Omit<ControllerProps, 'render'> &
  FormControlProps &
  TextFieldProps & {
    loading?: boolean;
    helperContent?: ReactNode;
  };

export const CustomTextField = (props: TTextField): JSX.Element => {
  const { type, name, rules, helperText, defaultValue, helperContent, ...rest } = props;
  const { control } = useFormContext();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const handleTogglePassword = (): void => {
    setIsShowPassword((prev) => !prev);
  };

  const isPasswordField = type === 'password';

  return (
    <FormControl fullWidth>
      <TextField
        {...field}
        {...rest}
        type={isPasswordField && isShowPassword ? 'text' : type}
        error={!!error?.message}
        helperText={helperText ?? error?.message ?? ''}
        onWheel={(e) => {
          if (type === 'number') {
            (e.target as HTMLElement).blur();
          }
        }}
        slotProps={{
          input: {
            endAdornment: isPasswordField ? (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {isShowPassword ? (
                    <EyeOffLineIcon width={22} height={18} pathFill={colorPalette.other.icon} />
                  ) : (
                    <EyeLineIcon width={22} height={18} pathFill={colorPalette.other.icon} />
                  )}
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
      />
      {helperContent && <Box mt={3}>{helperContent}</Box>}
    </FormControl>
  );
};
