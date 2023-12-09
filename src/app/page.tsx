import BasicFAQ from '@/components/FAQ/FAQ';
import Hero from '@/components/hero/Hero';
import VehicleTabs from '@/components/vehicleTabs/VehicleTabs';
import WhatWeDo from '@/components/whatWeDo/WhatWeDo';

export default function Home() {
  return (
    <main>
      <Hero />

      <WhatWeDo />

      <VehicleTabs />

      <BasicFAQ />
      <div className='min-h-screen'></div>
    </main>
  );
}
