import { useFormContext, type UseFormReturn } from 'react-hook-form';
import z from 'zod';

const segmentSchema = z.object({
  name: z.string(),
  crm_lead_custom_field_choice_id: z.number(),
});

export const validationSchema = z
  .object({
    currency_id: z.number(),
    startingDate: z.string(),
    businessType: z.number().optional(),
    enableProjectBreakdown: z.boolean(),
    segments: z.array(segmentSchema),
  })
  .superRefine((data, ctx) => {
    if (data.enableProjectBreakdown && !data.businessType) {
      ctx.addIssue({
        code: 'custom',
        message: 'Business type is required',
        path: ['businessType'],
      });
    }
  });

export type TFormData = z.infer<typeof validationSchema>;

export function useAssumptionsFormContext(): UseFormReturn<TFormData> {
  return useFormContext<TFormData>();
}
