import { useFormContext, type UseFormReturn } from 'react-hook-form';
import z from 'zod';

const segmentSchema = z.object({
  name: z.string(),
  crm_lead_custom_field_choice_id: z.number(),
});

export const validationSchema = z.object({
  currency: z.string(),
  startingDate: z.string(),
  businessType: z.number(),
  enableProjectBreakdown: z.boolean(),
  segments: z.array(segmentSchema),
});

export type TFormData = z.infer<typeof validationSchema>;

export function useAssumptionsFormContext(): UseFormReturn<TFormData> {
  return useFormContext<TFormData>();
}
