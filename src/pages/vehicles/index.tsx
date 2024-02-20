import PageTransition from '@/components/animationWrappers/PageTransition';
import PageHeader from '@/components/pageHeader/PageHeader';
import VehiclesCatalogue from '@/components/vehicleComp/vehiclesCatalogue';
import {
  fetchSanityData,
  getAllVehicles,
  getVehicleTypes,
} from '@/lib/sanity/queries';
import { vehicle, vehicleType } from '@/lib/types';

type props = {
  vehicles: vehicle[];
  types: vehicleType[];
};

const vehicles = ({ vehicles, types }: props) => {
  return (
    <PageTransition>
      <PageHeader pageIndex={0} />

      <div className='min-h-screen mb-40'>
        <VehiclesCatalogue types={types} vehicles={vehicles} />
      </div>
    </PageTransition>
  );
};

export default vehicles;

export const getStaticProps = async () => {
  const [vehicles, types]: [vehicle[], vehicleType[]] = await Promise.all([
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
  ]);

  return {
    props: {
      vehicles,
      types,
    },
    revalidate: 60,
  };
};
