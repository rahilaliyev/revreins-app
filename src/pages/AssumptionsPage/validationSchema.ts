import { useFormContext, type UseFormReturn } from 'react-hook-form';
import z from 'zod';

const segmentSchema = z.object({
  name: z.string(),
  field: z.string(),
});

export const validationSchema = z.object({
  salesEnterprise: z.string(),
  salesEnterpriseCtt: z.string(),
  salesMidMarket: z.string(),
  salesMidMarketCtt: z.string(),
  opportunityEnterprise: z.string(),
  opportunityEnterpriseCtt: z.string(),
  opportunityMidMarket: z.string(),
  opportunityMidMarketCtt: z.string(),
  closedWonEnterprise: z.string(),
  closedWonEnterpriseCtt: z.string(),
  closedWonMidMarket: z.string(),
  closedWonMidMarketCtt: z.string(),
  bookingEnterprise: z.string(),
  bookingMidMarket: z.string(),
  startingEnterprise: z.string(),
  startingMidMarket: z.string(),
  churnEnterprise: z.string(),
  churnMidMarket: z.string(),
  customerEnterprise: z.string(),
  customerMidMarket: z.string(),
  orderValueEnterprise: z.string(),
  orderValueMidMarket: z.string(),
  currency: z.string(),
  startingDate: z.string(),
  businessType: z.string(),
  enableProjectBreakdown: z.boolean(),
  segments: z.array(segmentSchema),
});

export type TFormData = z.infer<typeof validationSchema>;

export function useAssumptionsFormContext(): UseFormReturn<TFormData> {
  return useFormContext<TFormData>();
}
