import type { JSX, ReactNode } from 'react';
import { type FieldValues, FormProvider, type UseFormReturn } from 'react-hook-form';

import { Box } from '@mui/material';

export interface ICustomFormProvider<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: ReactNode;
  novalidate?: boolean;
  isDisabled?: boolean;
  id?: string;
}

export const CustomFormProvider = <T extends FieldValues>(props: ICustomFormProvider<T>): JSX.Element => {
  const { form, onSubmit, isDisabled = false, children, novalidate = false, id } = props;

  const isDev = import.meta.env.DEV;
  const errors = form.formState.errors;

  if (isDev && Object.keys(errors).length > 0) {
    console.warn('ERRORS', form.formState.errors);
  }

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={form.handleSubmit(onSubmit)}
        sx={{
          pointerEvents: isDisabled ? 'none' : 'auto',
          minHeight: 'inherit',
          width: '100%',
        }}
        noValidate={novalidate}
        id={id}
      >
        <Box
          component="fieldset"
          disabled={isDisabled}
          sx={{
            width: '100%',
            minHeight: 'inherit',
            border: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {children}
        </Box>
      </Box>
    </FormProvider>
  );
};
