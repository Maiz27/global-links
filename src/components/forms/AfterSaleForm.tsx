'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AfterSaleFormData, afterSaleFormSchema } from '@/lib/zodSchemas';
import { afterSaleFormFields, afterSaleServices } from '@/lib/constants';
import {
  RegisterTextField,
  RegisterInput,
  RegisterCheckbox,
} from './fields/Input';
import CTA from '../CTA/CTA';
import { toast } from 'react-toastify';

const AfterSaleForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AfterSaleFormData>({
    resolver: zodResolver(afterSaleFormSchema),
  });

  const sendEmail: SubmitHandler<AfterSaleFormData> = async (data) => {
    const validatedInput = afterSaleFormSchema.parse(data);

    const toasts = {
      success: () => toast.success('After Sale Request Sent Successfully!'),
      error: () => toast.error('An Error Occurred, try again later!'),
    };

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

  const hasColumnSpan = ['model', 'services', 'message'];

  const serviceNames = afterSaleServices.map((service) => service.name);

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className='mx-auto w-full grid grid-flow-row gap-2'
    >
      {afterSaleFormFields.map(
        ({ name, icon, label, placeholder, required, type }, idx) => {
          const Icon = icon;
          return (
            <div
              key={name}
              className={`form-control w-full focus-within:text-primary transition-colors ${
                hasColumnSpan.includes(name) ? 'col-span-2' : 'max-w-sm'
              }`}
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
                <>
                  {type === 'checkbox' ? (
                    <RegisterCheckbox
                      list={serviceNames}
                      name='services'
                      register={register}
                      errors={errors}
                    />
                  ) : (
                    <RegisterInput
                      placeholder={placeholder}
                      name={name}
                      errors={errors}
                      register={register}
                    />
                  )}
                </>
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
    </form>
  );
};

export default AfterSaleForm;
