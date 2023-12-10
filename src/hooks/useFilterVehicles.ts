import { useEffect, useState } from 'react';
import { vehicle } from '@/types';

const useFilterVehicles = (vehicles: vehicle[], selectedTypes: string[]) => {
  const [filteredList, setFilteredList] = useState(vehicles);

  useEffect(() => {
    if (selectedTypes.length > 0) {
      const list = vehicles
        .filter((vehicle) => selectedTypes.includes(vehicle.type.title))
        .sort((a, b) => a.name.localeCompare(b.name));
      setFilteredList(list);
    } else {
      setFilteredList(vehicles);
    }
  }, [selectedTypes, vehicles]);

  return { filteredList };
};

export default useFilterVehicles;
