import z from 'zod';

export const validationSignUpSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Please enter a valid email address',
    }),
});

export const validationCreateAccountSchema = z
  .object({
    companyName: z.string().min(1, 'Company Name is required'),
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    password: z
      .string()
      .min(12, 'Password must be at least 12 characters long')
      .refine(
        (val) =>
          /[A-Z]/.test(val) && // uppercase
          /[a-z]/.test(val) && // lowercase
          /\d/.test(val) && // number
          /[^A-Za-z0-9]/.test(val), // special char
        {
          message: `Password must include:<ul style="margin:0;padding-left:20px;">
                <li>Uppercase letters (A–Z)</li>
                <li>Lowercase letters (a–z)</li>
                <li>Numbers (0–9)</li>
                <li>Special characters (e.g., !@#$%^&*())</li>
                </ul>`,
        },
      ),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TSignUpFormData = z.infer<typeof validationSignUpSchema>;
export type TCreateAccountFormData = z.infer<typeof validationCreateAccountSchema>;
