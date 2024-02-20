import React, { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import BaseModal from './BaseModal';
import CTA from '../CTA/CTA';
import { requestVehicleInfoFields } from '@/lib/constants';
import {
  RequestVehicleFormData,
  requestVehicleFormSchema,
} from '@/lib/zodSchemas';
import { RegisterInput } from '../forms/fields/Input';
import SectionHeading from '../sectionHeading/SectionHeading';

const RequestVehicleSpecModal = () => {
  const closeBtn = useRef(null);
  return (
    <BaseModal
      id='export-data'
      CTA='Request Information'
      closeBtn={closeBtn}
      btnStyle='accent'
      classNames='text-neutral py-16'
    >
      <SectionHeading Tag='h3' text='Request Vehicle Info' />
      <RequestVehicleInfoForm />
    </BaseModal>
  );
};

export default RequestVehicleSpecModal;

const RequestVehicleInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestVehicleFormData>({
    resolver: zodResolver(requestVehicleFormSchema),
  });

  const sendEmail: SubmitHandler<RequestVehicleFormData> = async (data) => {
    const validatedInput = requestVehicleFormSchema.parse(data);

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
      className='w-4/5 flex flex-col items-center mx-auto'
    >
      {requestVehicleInfoFields.map(
        ({ name, icon, label, placeholder, required, type }, idx) => {
          const Icon = icon;
          return (
            <div
              // delay={idx * 0.2}
              key={name}
              className='form-control w-full text-neutral focus-within:text-primary transition-colors mt-2'
            >
              <label className='label justify-start gap-2  '>
                <Icon className='text-inherit' />
                <span className='label-text text-inherit'>
                  {label} {required && '*'}
                </span>
              </label>

              <RegisterInput
                placeholder={placeholder}
                name={name}
                errors={errors}
                register={register}
              />
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
          // loading={isLoading}
        />
      </div>
    </form>
  );
};
