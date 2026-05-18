import { useFormContext, type UseFormReturn } from 'react-hook-form';
import { ECRMObjectType, ELogicalOperator } from 'src/types/enums';
import z from 'zod';

const conditionSchema = z.object({
  crm_object_field_id: z.number().min(1, 'Required field'),
  operator: z.string().min(1, 'Required field'),
  value: z.string().min(1, 'Required field'),
  nextOperator: z.enum([ELogicalOperator.AND, ELogicalOperator.OR, ELogicalOperator.AND_OR]).optional(),
});

const groupSchema = z.object({
  conditions: z.array(conditionSchema).min(1),
});

export const validationSchema = z.object({
  name: z.string().min(1, 'Required field'),
  crmObject: z.enum(ECRMObjectType),
  dateField: z.number(),
  groups: z.array(groupSchema),
});

export type TFormData = z.infer<typeof validationSchema>;

export function useStageFormContext(): UseFormReturn<TFormData> {
  return useFormContext<TFormData>();
}
