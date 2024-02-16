import { FC, ReactNode } from 'react';

export type FormControlProps =
  | {
      children: ReactNode;
      label: string;
      withLabel?: never;
    }
  | {
      children: ReactNode;
      label?: never;
      withLabel: boolean;
    };

export const FormControlError = ({ message }: { message: string }) => {
  return (
    <label className='label'>
      <span className='label-text-alt text-error font-semibold'>{message}</span>
    </label>
  );
};

export const FormControl: FC<FormControlProps> = ({
  children,
  label,
  withLabel = true,
}) => {
  return (
    <div className='form-control w-full'>
      {withLabel && label && (
        <label className='label'>
          <span className='label-text font-medium'>{label}</span>
        </label>
      )}
      {children}
    </div>
  );
};
