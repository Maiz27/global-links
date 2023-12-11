'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import useFilterVehicles from '@/hooks/useFilterVehicles';
import VehicleSlider from './VehicleSlider';
import { vehicle, vehicleType } from '@/types';

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
    <section className='my-20'>
      <SectionHeading Tag='h2' text='Explore Vehicles' isCentered={true} />
      <div className='flex flex-col items-center mt-4'>
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
                className='w-11/12'
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
    <div className='w-full max-w-5xl flex overflow-x-auto justify-center custom-tabs'>
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
    <div className='relative w-full min-w-[150px] max-w-[200px]'>
      <button
        onClick={() => setSelected([title])}
        className='btn btn-ghost w-full h-full border-b-4 border-b-slate-200'
      >
        <span
          className={`transition-opacity md:text-center ${
            selected ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId='tabs-features-underline'
          className='absolute bottom-0 left-0 w-[99%] mx-auto rounded-b-3xl right-0 z-10 h-1 bg-accent'
        />
      )}
    </div>
  );
};

export default VehicleTabs;
