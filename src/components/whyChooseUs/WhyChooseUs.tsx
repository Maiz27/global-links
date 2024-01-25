import React from 'react';
import SectionHeading from '../sectionHeading/SectionHeading';
import IconCard from '../cards/IconCard';
import { whyChooseUs } from '@/constants';

const WhyChooseUs = () => {
  return (
    <section className='min-h-[80vh] flex flex-col items-center py-20 gap-6'>
      <div className='mx-auto text-center max-w-xl'>
        <SectionHeading Tag='h2' text='Why Choose Us' />

        <p>
          At the heart of our mission lies a deep seated dedication to customer
          satisfaction, achieved through personalized service, transparency, and
          a relentless pursuit of excellence
        </p>
      </div>
      <div className='w-11/12 max-w-4xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 gap-4'>
        {whyChooseUs.map(({ title, paragraph, icon }) => {
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

export default WhyChooseUs;
