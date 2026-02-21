import z from 'zod';

export const validationProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Please enter a valid email address',
    }),
  title: z.string(),
});

export const validationSecuritySchema = z
  .object({
    oldPassword: z.string().min(1, 'Old password is required'),
    newPassword: z.string().refine(
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
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export const validationNotificationSchema = z.object({
  projectNotifications: z.boolean(),
  generalNotifications: z.boolean(),
  projectNews: z.boolean(),
  notifyEmail: z.boolean(),
});

export const validationBusinessSchema = z.object({
  workspaceName: z.string().min(1, 'Workspace name is required'),
  workspaceUrl: z.string().min(1, 'Workspace name is required'),
});

export type TProfileFormData = z.infer<typeof validationProfileSchema>;
export type TSecurityFormData = z.infer<typeof validationSecuritySchema>;
export type TNotificationFormData = z.infer<typeof validationNotificationSchema>;
export type TBusinessFormData = z.infer<typeof validationBusinessSchema>;
