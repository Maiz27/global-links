'use client';
import React, { MutableRefObject, useRef, useState } from 'react';
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
import { toast } from 'react-toastify';

const RequestVehicleSpecModal = ({ vehicleName }: { vehicleName: string }) => {
  const closeBtn = useRef(null);
  return (
    <BaseModal
      id={`RequestVehicleSpecModal-${vehicleName}`}
      CTA='Request Information'
      closeBtn={closeBtn}
      btnStyle='accent'
      classNames='text-neutral py-16'
    >
      <SectionHeading Tag='h3' text='Request Vehicle Info' />
      <RequestVehicleInfoForm vehicleName={vehicleName} closeBtn={closeBtn} />
    </BaseModal>
  );
};

export default RequestVehicleSpecModal;

const RequestVehicleInfoForm = ({
  vehicleName,
  closeBtn,
}: {
  vehicleName: string;
  closeBtn: MutableRefObject<null>;
}) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RequestVehicleFormData>({
    resolver: zodResolver(requestVehicleFormSchema),
  });

  const sendEmail: SubmitHandler<RequestVehicleFormData> = async (data) => {
    const validatedInput = requestVehicleFormSchema.parse(data);
    console.log(validatedInput);

    const toasts = {
      success: () => toast.success('Information Request Sent Successfully!'),
      error: () => toast.error('An Error Occurred, try again later!'),
    };

    try {
      setLoading(true);
      const response = await fetch('/api/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...validatedInput, vehicle: vehicleName }),
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
      console.log('error', error);
    } finally {
      setLoading(false);
      (closeBtn.current as unknown as HTMLButtonElement).click();
    }
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
          loading={loading}
        />
      </div>
    </form>
  );
};
