import { MAX_PROFILE_IMAGE_SIZE } from 'src/contants';
import z from 'zod';

const avatarSchema = z
  .union([z.string().refine((val) => /^https?:\/\/.+/i.test(val), 'Invalid avatar URL'), z.custom<File>()])
  .optional()
  .refine((file) => {
    if (!file || typeof file === 'string') {
      return true;
    }
    return file.size <= MAX_PROFILE_IMAGE_SIZE;
  }, 'Max file size is 10MB')
  .refine((file) => {
    if (!file || typeof file === 'string') {
      return true;
    }
    return ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
  }, 'Only PNG, JPG, GIF allowed');

export const validationProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Please enter a valid email address',
    }),
  title: z.string(),
  avatar: avatarSchema,
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
