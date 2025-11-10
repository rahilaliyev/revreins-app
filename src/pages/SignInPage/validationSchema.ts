import z from 'zod';

export const validationSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Please enter a valid email address',
    }),
  password: z.string(),
});

export type TFormData = z.infer<typeof validationSchema>;
