import { Hero } from '@/components/hero/Hero';
import VehicleTabs from '@/components/vehicleTabs/VehicleTabs';

export default function Home() {
  return (
    <main>
      <Hero />

      <VehicleTabs />
      <div className='min-h-screen'></div>
    </main>
  );
}
