import SectionHeading from '@/components/sectionHeading/SectionHeading';
import IconCard from '../cards/IconCard';
import { whatWeDoList } from '@/constants';

const WhatWeDo = () => {
  return (
    <section className='min-h-screen py-20 grid place-items-center space-y-4 bg-triangle-pattern bg-cover bg-right-bottom text-base-100'>
      <div className='mx-auto text-center max-w-xl'>
        <SectionHeading Tag='h2' text='What We Do' />
        <p>
          At Global Links, we are your premier destination for all things Toyota
          in South Sudan. Our comprehensive range of services includes:
        </p>
      </div>
      <div className='w-11/12 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {whatWeDoList.map(({ title, paragraph, icon }) => {
          return (
            <IconCard
              key={title}
              title={title}
              paragraph={paragraph}
              icon={icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDo;
