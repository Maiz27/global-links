import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Full name must be longer than 4 character' }),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (phone) => {
        if (phone === undefined || phone === '') return true; // Skip validation if phone is undefined

        const internationalFormat = /^\+\d{1,3}\d{6,14}$/;
        const localFormat = /^0\d{9,10}$/;

        return internationalFormat.test(phone) || localFormat.test(phone);
      },
      {
        message:
          'Invalid phone number format. Use +<country code><number> or local format like 03323323232',
      }
    ),
  subject: z.string().optional(),
  message: z
    .string()
    .nonempty({ message: 'Message is required' })
    .max(500, { message: 'Message must be less than 500 characters' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
