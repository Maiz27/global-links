import { FormControl } from './FormControl';

type ToggleProps = {
  label: string;
  checked: boolean;
  value?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onChange: (value?: string) => void;
};

const Toggle = ({
  label,
  value,
  checked,
  size = 'sm',
  disabled = false,
  onChange,
}: ToggleProps) => {
  return (
    <FormControl withLabel={false}>
      <label className='label cursor-pointer gap-2'>
        <span className={`label-text ${checked && 'text-success font-medium'}`}>
          {label}
        </span>
        <input
          type='checkbox'
          disabled={disabled}
          onChange={() => onChange(value)}
          className={`toggle toggle-${size} ${checked && 'toggle-success'}`}
          checked={checked}
        />
      </label>
    </FormControl>
  );
};

export default Toggle;
