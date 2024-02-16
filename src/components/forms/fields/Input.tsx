import { FormControl, FormControlError } from './FormControl';
import { BaseInputProps } from '@/lib/types';

type InputProps = BaseInputProps<any> & {
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  placeholder?: string;
};

export const RegisterInput = ({
  name,
  register,
  errors,
  type = 'text',
  placeholder = 'Type here',
  label = undefined,
  defaultValue,
}: InputProps) => {
  return (
    <FormControl label={label!}>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-bordered focus-visible:outline-primary transition-colors w-full max-w-sm'
        defaultValue={defaultValue}
        {...register(name, { valueAsNumber: type === 'number' })}
        max={
          type === 'date' ? new Date().toISOString().split('T')[0] : undefined
        }
      />
      {errors[name] && <FormControlError message={errors[name]?.message} />}
    </FormControl>
  );
};

export const RegisterTextField = ({
  name,
  register,
  errors,
  placeholder = 'Type here',
  label = undefined,
  defaultValue,
}: InputProps) => {
  return (
    <FormControl label={label!}>
      <textarea
        placeholder={placeholder}
        className='input input-bordered focus-visible:outline-primary transition-colors w-full max-w-sm h-40'
        defaultValue={defaultValue}
        {...register(name)}
      />
      {errors[name] && <FormControlError message={errors[name]?.message} />}
    </FormControl>
  );
};
