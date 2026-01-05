import z from 'zod';

export const validationSchema = z.object({
  name: z.string().min(1, 'Please name your project'),
  type: z.string(),
  stages: z.array(
    z.object({
      value: z.string().min(1),
    }),
  ),
});

export type TFormData = z.infer<typeof validationSchema>;
