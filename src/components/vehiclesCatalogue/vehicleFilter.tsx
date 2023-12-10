import React from 'react';
import SectionHeading from '../sectionHeading/SectionHeading';
import { vehicleType } from '@/types';

type props = {
  types: vehicleType[];
  count: number;
  selected: {
    value: string[];
    setter: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

const VehiclesFilter = ({ types, selected, count }: props) => {
  return (
    <aside className='w-full xl:w-1/5'>
      <div className='flex justify-between '>
        <SectionHeading Tag='h2' text='Filters' size='xl' />
        <p className='text-lg'>
          <span className='font-semibold'>{count}</span> Matches
        </p>
      </div>
      <div className='divider -mt-2'></div>
      <TypesSelector
        types={types}
        selected={selected.value}
        setSelected={selected.setter}
      />
    </aside>
  );
};

export default VehiclesFilter;

type typesSelectorProps = {
  types: vehicleType[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const TypesSelector = ({
  types,
  selected,
  setSelected,
}: typesSelectorProps) => {
  const handleChange = (title: string) => {
    if (selected.includes(title)) {
      setSelected(selected.filter((item) => item !== title));
    } else {
      setSelected([...selected, title]);
    }
  };
  return (
    <div className='collapse collapse-plus -mt-4'>
      <input type='checkbox' />
      <div className='collapse-title text-lg font-medium'>Vehicles</div>
      <div className='collapse-content'>
        {types.map(({ title }, index) => {
          return (
            <div key={index} className='form-control'>
              <label className='label justify-start gap-4 cursor-pointer'>
                <input
                  type='checkbox'
                  className='checkbox'
                  checked={selected.includes(title)}
                  onChange={() => handleChange(title)}
                />
                <span className='label-text'>{title}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
