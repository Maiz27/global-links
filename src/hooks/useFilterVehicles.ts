import { useEffect, useState } from 'react';
import { vehicle } from '@/types';

const useFilterVehicles = (vehicles: vehicle[], selected?: string[]) => {
  const [selectedTypes, setSelectedType] = useState<string[]>(
    selected ? selected : []
  );
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

  return { filteredList, selectedTypes, setSelectedType };
};

export default useFilterVehicles;
