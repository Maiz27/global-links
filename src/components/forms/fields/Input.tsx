import { FormControl, FormControlError } from './FormControl';
import { BaseInputProps } from '@/lib/types';

type InputProps = BaseInputProps<any> & {
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  placeholder?: string;
};

type CheckBoxProps = BaseInputProps<any> & {
  list: string[];
  placeholder?: string;
  defaultValue?: boolean;
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
        className='input input-bordered focus-visible:outline-primary transition-colors w-full'
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
        className='input input-bordered focus-visible:outline-primary transition-colors w-full h-40'
        defaultValue={defaultValue}
        {...register(name)}
      />
      {errors[name] && <FormControlError message={errors[name]?.message} />}
    </FormControl>
  );
};

export const RegisterCheckbox = ({
  list,
  name,
  register,
  errors,
  defaultValue,
}: CheckBoxProps) => {
  return (
    <>
      <div className='flex flex-wrap items-center justify-around'>
        {list.map((item) => (
          <div key={item} className='form-control'>
            <label className='label cursor-pointer gap-2'>
              <input
                {...register(name)}
                value={item}
                defaultChecked={defaultValue}
                type='checkbox'
                className='checkbox checkbox-primary'
              />
              <span className='label-text'>{item}</span>
            </label>
          </div>
        ))}
      </div>
      {errors[name] && <FormControlError message={errors[name]?.message!} />}
    </>
  );
};
