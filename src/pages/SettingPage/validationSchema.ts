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

export const validationNotificationSchema = z.object({
  projectNotifications: z.boolean(),
  generalNotifications: z.boolean(),
  projectNews: z.boolean(),
  notifyEmail: z.boolean(),
});

export type TProfileFormData = z.infer<typeof validationProfileSchema>;
export type TNotificationFormData = z.infer<typeof validationNotificationSchema>;
