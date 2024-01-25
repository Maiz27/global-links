import React from 'react';
import SectionHeading from '../sectionHeading/SectionHeading';
import { IconType } from 'react-icons';
import {
  FaGears,
  FaArrowsToCircle,
  FaCircleDot,
  FaWeightHanging,
  FaCircleInfo,
} from 'react-icons/fa6';
import { vehicle } from '@/lib/types';

const VehicleSpecs = ({ vehicle }: { vehicle: vehicle }) => {
  const { engine, dimensions, overview, capacity, tyres } = vehicle;

  const overviewDetails = {
    'Model Code': overview?.model,
    Transmission: overview?.transmission,
    'Speed (Gears Number)': overview?.speed,
    Drive: overview?.drive,
  };
  const engineDetails = {
    'Engine Model': engine?.model,
    'Displacement (cc)': engine?.displacement,
    'Fuel Type': engine?.fuelType?.join(', '),
    'Maximum Power (kw/rpm)': engine?.power,
  };
  const dimensionDetails = {
    'Lxwxh (mm)': `${dimensions?.length} x ${dimensions?.width} x ${dimensions?.height}`,
    'Ground Clearance (mm)': dimensions?.groundClearance,
    'Wheelbase (mm)': dimensions?.wheelbase,
  };
  const capacityDetails = {
    'Curb Weight (kg)': capacity?.weight,
    'Number of Seats': capacity?.seats,
    'Tank capacity (L)': capacity?.tank,
  };
  const tyresDetails = {
    Type: tyres?.type,
    Front: tyres?.front,
    Rear: tyres?.rear,
  };

  const detailsArray = [
    { title: 'Overview', details: overviewDetails, icon: FaCircleInfo },
    { title: 'Engine', details: engineDetails, icon: FaGears },
    { title: 'Dimensions', details: dimensionDetails, icon: FaArrowsToCircle },
    { title: 'Capacity', details: capacityDetails, icon: FaWeightHanging },
    { title: 'Tyres', details: tyresDetails, icon: FaCircleDot },
  ];

  return (
    <section className='my-20 space-y-4'>
      <SectionHeading Tag='h2' text='Vehicle Specifications' />

      <div className='w-11/12 xl:w-4/5 max-w-7xl mx-auto grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
      <span className='w-fit shadow bg-base-100 rounded-md p-2 text-3xl text-accent mx-auto'>
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
