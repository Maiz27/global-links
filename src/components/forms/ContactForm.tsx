'use client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CTA from '@/components/CTA/CTA';
import { RegisterInput, RegisterTextField } from './fields/Input';
import { ContactFormData, contactFormSchema } from '@/lib/zodSchemas';
import { contactFormFields } from '@/lib/constants';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [result, setResult] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const validEmailRegex =
  //   '[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+';

  const sendEmail: SubmitHandler<ContactFormData> = async (data) => {
    const validatedInput = contactFormSchema.parse(data);

    // try {
    //   setIsLoading(true);
    //   const response = await fetch('/api/send', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   console.log('response', response);
    //   if (response.status === 200) {
    //     setFormData({ ...initialState });
    //     setResult('Message Sent Successfully!');
    //   } else {
    //     setResult('An Error Occurred, try again later!');
    //   }
    // } catch (error) {
    //   setResult('An Error Occurred, try again later!');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form
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

      {result && <p className='p-4'>{result}</p>}

      <div className='mt-4'>
        <CTA
          text='Send Message'
          isBtn={true}
          btnType='submit'
          bg='primary'
          textColor='base-100'
          // loading={isLoading}
        />
      </div>
    </form>
  );
};

export default ContactForm;
