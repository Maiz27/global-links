'use client';
import { AnimatePresence, motion } from 'framer-motion';
import useFilterVehicles from '@/lib/hooks/useFilterVehicles';
import VehicleCard from './VehicleCard';
import VehiclesFilter from './vehicleFilter';
import { vehicle, vehicleType } from '@/lib/types';

const VehiclesCatalogue = ({
  vehicles,
  types,
}: {
  vehicles: vehicle[];
  types: vehicleType[];
}) => {
  const { filteredList, selectedTypes, setSelectedType } =
    useFilterVehicles(vehicles);
  return (
    <div className='my-10 w-11/12 mx-auto flex flex-col xl:flex-row'>
      <VehiclesFilter
        types={types}
        count={filteredList.length}
        selected={{ value: selectedTypes, setter: setSelectedType }}
      />

      <VehiclesGrid vehicles={filteredList} />
    </div>
  );
};

export default VehiclesCatalogue;

const VehiclesGrid = ({ vehicles }: { vehicles: vehicle[] }) => {
  return (
    <div className='w-full min-h-[20vh] xl:w-4/5 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      <AnimatePresence>
        {vehicles.map((vehicle, idx) => {
          return (
            <motion.div
              key={vehicle.slug.current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: idx * 0.1 }}
              className='h-min w-full'
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
