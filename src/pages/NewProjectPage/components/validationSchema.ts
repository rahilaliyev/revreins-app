import { useFormContext, type UseFormReturn } from 'react-hook-form';
import z from 'zod';

export const validationSchema = z.object({
  name: z.string(),
  crmObject: z.string(),
});

export type TFormData = z.infer<typeof validationSchema>;

export function useStageFormContext(): UseFormReturn<TFormData> {
  return useFormContext<TFormData>();
}
