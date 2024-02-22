'use client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CTA from '@/components/CTA/CTA';
import { RegisterInput, RegisterTextField } from './fields/Input';
import { ContactFormData, contactFormSchema } from '@/lib/zodSchemas';
import { contactFormFields, slideLeft } from '@/lib/constants';
import AnimateInView from '../animationWrappers/AnimateInView';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const toasts = {
    success: () => toast.success('Message Sent Successfully!'),
    error: () => toast.error('An Error Occurred, try again later!'),
  };

  const sendEmail: SubmitHandler<ContactFormData> = async (data) => {
    const validatedInput = contactFormSchema.parse(data);

    try {
      setLoading(true);
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedInput),
      });
      console.log('response', response);
      if (response.status === 200) {
        toasts.success();
        reset();
      } else {
        toasts.error();
      }
    } catch (error) {
      toasts.error();
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimateInView
      initial={slideLeft.initial}
      whileInView={slideLeft.whileInView}
      tag='form'
      onSubmit={handleSubmit(sendEmail)}
      className='w-4/5 lg:w-2/5 flex flex-col items-center'
    >
      {contactFormFields.map(
        ({ name, icon, label, placeholder, required, type }, idx) => {
          const Icon = icon;
          return (
            <div
              // delay={idx * 0.2}
              key={name}
              className='form-control w-full max-w-sm focus-within:text-primary transition-colors mt-2'
            >
              <label className='label justify-start gap-2'>
                <Icon />
                <span className='label-text text-inherit'>
                  {label} {required && '*'}
                </span>
              </label>
              {type === 'textarea' ? (
                <RegisterTextField
                  placeholder={placeholder}
                  name={name}
                  errors={errors}
                  register={register}
                />
              ) : (
                <RegisterInput
                  placeholder={placeholder}
                  name={name}
                  errors={errors}
                  register={register}
                />
              )}
            </div>
          );
        }
      )}

      <div className='mt-4'>
        <CTA
          text='Send Message'
          isBtn={true}
          btnType='submit'
          bg='primary'
          textColor='base-100'
          loading={loading}
        />
      </div>
    </AnimateInView>
  );
};

export default ContactForm;
