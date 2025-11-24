import z from 'zod';

export const validationSecondStepSchema = z.object({
  email: z.string().refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: 'Please enter a valid email address',
  }),
  type: z.string(),
});

export const validationThirdStepSchema = z.object({
  name: z.string().min(1, 'Please name your project'),
  type: z.string(),
  stages: z.array(
    z.object({
      value: z.string().min(1),
    }),
  ),
});

export type TSecondStepFormData = z.infer<typeof validationSecondStepSchema>;
export type TThirdStepFormData = z.infer<typeof validationThirdStepSchema>;
