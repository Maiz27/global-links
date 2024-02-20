import { ChangeEventHandler, Fragment, ReactNode } from 'react';
import { FormControl, FormControlError } from './FormControl';
import { BaseInputProps } from '@/lib/types';

type GenericSelectorProps<T> = BaseInputProps<any> & {
  options: T[];
  formData: Record<string, string | number>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
  renderOption: (option: T) => ReactNode;
  isLoading?: boolean;
};

export const RegisterSelect = <T,>({
  name,
  label,
  options,
  register,
  errors,
  formData,
  onChange,
  disabled = false,
  renderOption,
  isLoading = false,
}: GenericSelectorProps<T>) => {
  if (isLoading) {
    return <SelectLoading label={label!} />;
  }

  return (
    <>
      <FormControl label={label!}>
        <select
          className='select select-sm select-bordered w-full max-w-lg'
          title={label!}
          {...register(name)}
          onChange={onChange}
          disabled={disabled}
          defaultValue={formData[name] || 'Select a value'}
        >
          <option value='Select a value'>Select a value</option>
          {options?.map((option, index) => (
            <Fragment key={index}>{renderOption(option)}</Fragment>
          ))}
        </select>
        {errors[name] && (
          <FormControlError message={errors[name]?.message as string} />
        )}
      </FormControl>
    </>
  );
};

type SelectProps<T> = {
  options: T[];
  label: string;
  defaultValue: string;
  isDisabled?: boolean;
  value?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  renderItem: (item: T) => JSX.Element;
};

export const Select = <T,>({
  options,
  label,
  defaultValue,
  isDisabled = false,
  value,
  onChange,
  renderItem,
}: SelectProps<T>) => {
  return (
    <div className='max-w-lg'>
      <label className='form-control w-full max-w-sm'>
        <div className='label'>
          <span className='label-text font-semibold'>{label}</span>
        </div>
        <select
          onChange={onChange}
          className='select select-sm select-bordered border-base-300'
          disabled={isDisabled}
          value={value || ''}
        >
          <option value={defaultValue}>{defaultValue}</option>
          {options?.map((item, index) => (
            <Fragment key={index}>{renderItem(item)}</Fragment>
          ))}
        </select>
      </label>
    </div>
  );
};

export const SelectLoading = ({
  label,
  isError = false,
}: {
  label: string;
  isError?: boolean;
}) => {
  return (
    <Select
      isDisabled={true}
      options={[]}
      label={label}
      defaultValue={isError ? 'An Error Occurred' : 'Loading...'}
      onChange={() => {}}
      renderItem={() => <></>}
    />
  );
};
