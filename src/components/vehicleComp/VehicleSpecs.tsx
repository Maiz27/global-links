import React from 'react';
import SectionHeading from '../sectionHeading/SectionHeading';
import { IconType } from 'react-icons';
import {
  FaGears,
  FaArrowsToCircle,
  FaSitemap,
  FaWeightHanging,
  FaUserShield,
} from 'react-icons/fa6';
import { vehicle } from '@/types';

const VehicleSpecs = ({ vehicle }: { vehicle: vehicle }) => {
  const { engine, dimensions, transmission, capacity, warranty } = vehicle;

  const engineDetails = {
    'Displacement (cc)': engine?.displacement,
    'Fuel System': engine?.fuelSystem,
    'Fuel type': engine?.fuelType?.join(', '),
  };
  const dimensionDetails = {
    'Dimensions (Lxwxh) (mm)': `${dimensions?.length} x ${dimensions?.width} x ${dimensions?.height}`,
    'Ground clearance (mm)': dimensions?.groundClearance,
    'Wheelbase (mm)': dimensions?.wheelbase,
  };
  const transmissionDetails = {
    Gearbox: transmission?.gearbox.join(', '),
    Transmission: transmission?.transmission,
  };
  const capacityDetails = {
    'Curb weight (kg)': capacity?.weight,
    'Fuel tank capacity (L)': capacity?.tank,
  };
  const warrantyDetails = {
    'Manufacturer Warranty': warranty?.period,
    'Retail Network': warranty?.network,
  };

  const detailsArray = [
    { title: 'Engine', details: engineDetails, icon: FaGears },
    { title: 'Dimensions', details: dimensionDetails, icon: FaArrowsToCircle },
    { title: 'Transmission', details: transmissionDetails, icon: FaSitemap },
    { title: 'Capacity', details: capacityDetails, icon: FaWeightHanging },
    { title: 'Warranty', details: warrantyDetails, icon: FaUserShield },
  ];

  return (
    <section className='my-20 space-y-4'>
      <SectionHeading Tag='h2' text='Technical Specifications' />

      <div className='w-11/12 xl:w-4/5 mx-auto grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {detailsArray.map(({ title, details, icon }, index) => (
          <Card key={index} title={title} details={details} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default VehicleSpecs;

type props = {
  title: string;
  details: Object;
  icon: IconType;
};

const Card = ({ title, details, icon }: props) => {
  const Icon = icon;
  return (
    <div className='w-full h-full card bg-base-100 shadow p-6 text-center gap-4'>
      <span className='w-fit shadow bg-base-100 rounded-md p-2 text-3xl text-secondary mx-auto'>
        <Icon />
      </span>

      <h3 className='font-semibold'>{title}</h3>
      <ul className='space-y-2'>
        {Object.entries(details).map(([key, value]) => (
          <li key={key} className='text-sm'>
            <strong className='text-base'>{key}:</strong> {value as string}
          </li>
        ))}
      </ul>
    </div>
  );
};
