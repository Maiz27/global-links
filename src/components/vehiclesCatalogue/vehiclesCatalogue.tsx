'use client';
import React, { useState } from 'react';
import SectionHeading from '../sectionHeading/SectionHeading';
import { vehicle, vehicleType } from '@/types';
import useFilterVehicles from '@/hooks/useFilterVehicles';
import VehicleCard from '../vehicleCard/VehicleCard';

const VehiclesCatalogue = ({
  vehicles,
  types,
}: {
  vehicles: vehicle[];
  types: vehicleType[];
}) => {
  const [selectedTypes, setSelectedType] = useState<string[]>([]);
  const { filteredList } = useFilterVehicles(vehicles, selectedTypes);
  return (
    <div className='my-10 w-11/12 2xl:w-4/5 mx-auto flex flex-col xl:flex-row'>
      <aside className='w-full xl:w-1/5'>
        <SectionHeading Tag='h2' text='Filters' size='xl' />
        <div className='divider -mt-2'></div>
        <TypesSelector
          types={types}
          selected={selectedTypes}
          setSelected={setSelectedType}
        />
      </aside>
      <div className='w-full xl:w-4/5 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {filteredList.map((vehicle) => {
          return <VehicleCard key={vehicle.slug.current} vehicle={vehicle} />;
        })}
      </div>
    </div>
  );
};

export default VehiclesCatalogue;

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
