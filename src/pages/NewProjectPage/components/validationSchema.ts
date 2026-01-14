import { useFormContext, type UseFormReturn } from 'react-hook-form';
import { ELogicalOperator } from 'src/types/enums';
import z from 'zod';

const conditionSchema = z.object({
  field: z.string(),
  operator: z.string(),
  value: z.string(),
  nextOperator: z.enum([ELogicalOperator.AND, ELogicalOperator.OR, ELogicalOperator.AND_OR]).optional(),
});

const groupSchema = z.object({
  conditions: z.array(conditionSchema).min(1),
});

export const validationSchema = z.object({
  name: z.string(),
  crmObject: z.string(),
  dateField: z.string(),
  groups: z.array(groupSchema),
});

export type TFormData = z.infer<typeof validationSchema>;

export function useStageFormContext(): UseFormReturn<TFormData> {
  return useFormContext<TFormData>();
}
