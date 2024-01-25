'use client';
import { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import CTA from '@/components/CTA/CTA';
import useFilterVehicles from '@/lib/hooks/useFilterVehicles';
import VehicleSlider from './VehicleSlider';
import { vehicle, vehicleType } from '@/lib/types';

const VehicleTabs = ({
  vehicles,
  types,
}: {
  vehicles: vehicle[];
  types: vehicleType[];
}) => {
  const { filteredList, selectedTypes, setSelectedType } = useFilterVehicles(
    vehicles,
    [types[1].title]
  );

  return (
    <section className='min-h-screen grid place-items-center bg-triangle-pattern bg-cover bg-right-bottom bg-fixed text-base-100'>
      <div className='mx-auto text-center max-w-2xl space-y-2'>
        <SectionHeading Tag='h2' text='Explore Vehicles' />
        <p>
          At Global Link Auto Company Limited, we take pride in offering a
          comprehensive range of Toyota vehicles, renowned for their quality,
          reliability, and innovation. Our product line includes a variety of
          models to suit every need and lifestyle
        </p>
        <CTA path='/vehicles' text='Browse Vehicles' />
      </div>
      <div className='w-full xl:w-4/5 flex flex-col items-center'>
        <Tabs
          selectedTypes={selectedTypes}
          setSelectedType={setSelectedType}
          types={types}
        />

        <AnimatePresence mode='wait'>
          {types.map(({ title }, index) => {
            return selectedTypes.includes(title) ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={index}
                className='w-11/12 min-h-[40vh]'
              >
                <VehicleSlider list={filteredList} />
              </motion.div>
            ) : undefined;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

type TabsProps = {
  selectedTypes: string[];
  setSelectedType: Dispatch<SetStateAction<string[]>>;
  types: vehicleType[];
};

const Tabs = ({ selectedTypes, setSelectedType, types }: TabsProps) => {
  return (
    <div className='w-11/12 card flex-row max-w-5xl overflow-auto justify-center custom-tabs'>
      {types.map(({ title }, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelectedType}
            selected={selectedTypes.includes(title)}
            title={title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

type TabProps = {
  selected: boolean;
  title: string;
  setSelected: Function;
  tabNum: number;
};

const Tab = ({ selected, title, setSelected, tabNum }: TabProps) => {
  return (
    <div className='relative w-full min-w-fit md:min-w-[150px] max-w-[200px] bg-base-100 text-base-content'>
      <button
        onClick={() => setSelected([title])}
        className='btn btn-ghost w-full h-full border-b-4 border-b-slate-200'
      >
        <span
          className={`transition-opacity md:text-center ${
            selected ? 'opacity-100 text-primary' : 'opacity-50'
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId='tabs-features-underline'
          className='absolute bottom-0 left-0 w-[99%] mx-auto rounded-b-3xl right-0 z-10 h-[5px] bg-primary'
        />
      )}
    </div>
  );
};

export default VehicleTabs;
