import { useFormContext, type UseFormReturn } from 'react-hook-form';
import z from 'zod';

const segmentSchema = z.object({
  name: z.string().min(1, 'Segment name is required'),
  crmLeadCustomFieldChoiceId: z.number().min(1, 'Segment field is required'),
});

const conversionSegmentSchema = z.object({
  segmentId: z.number().optional(),
  stageCycleMonths: z.number().min(1).nullable().optional(),
  averageMonth: z.string().nullable(),
  manualRate: z.string().nullable().optional(),
});

const growthRateSegmentSchema = z.object({
  segmentId: z.number().optional(),
  growthRate: z.number().min(1).nullable(),
});

const stageConversionSchema = z.object({
  stageFromId: z.number(),
  stageToId: z.number(),
  assumptionCategoryId: z.number().optional().nullable(),
  conversionSegments: z.array(conversionSegmentSchema),
  conversionId: z.number(),
});

export const validationSchema = z
  .object({
    currencyId: z.number(),
    startingDate: z.string(),
    businessType: z.number().optional(),
    enableProjectBreakdown: z.boolean(),
    segments: z.array(segmentSchema).optional(),
    stageConversions: z.array(stageConversionSchema).optional(),
    growthRateValue: z.number().nullable().optional(),
    growthRateSegments: z.array(growthRateSegmentSchema).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.enableProjectBreakdown && !data.segments?.length) {
      ctx.addIssue({
        code: 'custom',
        message: 'Segment is required',
        path: ['segments'],
      });
    }

    if (data.enableProjectBreakdown && !data.businessType) {
      ctx.addIssue({
        code: 'custom',
        message: 'Business type is required',
        path: ['businessType'],
      });
    }
  });

export type TFormData = z.infer<typeof validationSchema>;
export type TStageConversionField = z.infer<typeof stageConversionSchema>;
export type TConversionSegmentField = z.infer<typeof conversionSegmentSchema>;

export function useAssumptionsFormContext(): UseFormReturn<TFormData> {
  return useFormContext<TFormData>();
}
