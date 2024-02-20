import { z } from 'zod';
import { afterSaleServices } from './constants';

export const contactFormSchema = z.object({
  name: z.string().min(4, { message: 'Name must be longer than 4 character' }),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (phone) => {
        if (phone === undefined || phone === '') return true;
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
    .min(20, { message: 'Message must be longer than 20 characters' })
    .max(500, { message: 'Message must be less than 500 characters' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const afterSaleFormSchema = z.object({
  name: z.string().min(4, { message: 'Name must be longer than 4 character' }),
  company: z
    .string()
    .optional()
    .refine(
      (company) => {
        if (company === '' || company?.length! > 4) return true;
      },
      { message: 'Company name must be longer than 4 character' }
    ),
  email: z.string().email('Invalid email address'),
  phone: z.string().refine(
    (phone) => {
      const internationalFormat = /^\+\d{1,3}\d{6,14}$/;
      const localFormat = /^0\d{9,10}$/;

      return internationalFormat.test(phone) || localFormat.test(phone);
    },
    {
      message:
        'Invalid phone number format. Use +<country code><number> or local format like 03323323232',
    }
  ),
  model: z.string().min(4, { message: 'Name must be longer than 4 character' }),
  services: z
    .array(z.string())
    .nonempty({ message: 'Select at least one service' })
    .default([afterSaleServices[0].name]),
  message: z
    .string()
    .nonempty({ message: 'Message is required' })
    .min(25, { message: 'Message must be longer than 25 characters' })
    .max(500, { message: 'Message must be less than 500 characters' }),
});

export type AfterSaleFormData = z.infer<typeof afterSaleFormSchema>;

export const requestVehicleFormSchema = z.object({
  name: z.string().min(4, { message: 'Name must be longer than 4 character' }),
  email: z.string().email('Invalid email address'),
});

export type RequestVehicleFormData = z.infer<typeof afterSaleFormSchema>;
