'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import VehicleSlider from './VehicleSlider';
import { vehicle, vehicleType } from '@/types';

const VehicleTabs = ({
  vehicles,
  types,
}: {
  vehicles: vehicle[];
  types: vehicleType[];
}) => {
  const [selected, setSelected] = useState(0);
  const [list, setList] = useState(vehicles);

  useEffect(() => {
    const selectedCategory = types[selected].title;
    console.log(vehicles);
    const filteredList = vehicles
      .filter((vehicle) => vehicle.type.title === selectedCategory)
      .sort((a, b) => a.name.localeCompare(b.name));
    setList(filteredList);
  }, [selected, types, vehicles]);

  return (
    <section className='my-20'>
      <SectionHeading Tag='h2' text='Explore Vehicles' isCentered={true} />
      <div className='flex flex-col items-center mt-4'>
        <Tabs selected={selected} setSelected={setSelected} types={types} />

        <AnimatePresence mode='wait'>
          {types.map((tab, index) => {
            return selected === index ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={index}
                className='w-11/12'
              >
                <VehicleSlider list={list} />
              </motion.div>
            ) : undefined;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

type TabsProps = {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  types: vehicleType[];
};

const Tabs = ({ selected, setSelected, types }: TabsProps) => {
  return (
    <div className='w-full max-w-5xl flex overflow-x-auto justify-center custom-tabs'>
      {types.map(({ title }, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
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
        onClick={() => setSelected(tabNum)}
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
