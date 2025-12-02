import z from 'zod';

export const validationSchema = z
  .object({
    companyName: z.string().min(1, 'Company Name is required'),
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    password: z.string().refine(
      (val) =>
        val.length >= 12 && // ✅ at least 12 chars
        /[A-Z]/.test(val) && // uppercase
        /[a-z]/.test(val) && // lowercase
        /\d/.test(val) && // number
        /[^A-Za-z0-9]/.test(val), // special char
      {
        message: 'Password does not meet security requirements',
      },
    ),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TFormData = z.infer<typeof validationSchema>;
