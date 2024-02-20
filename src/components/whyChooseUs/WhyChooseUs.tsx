import React from 'react';
import SectionHeading from '../sectionHeading/SectionHeading';
import IconCard from '../cards/IconCard';
import { whyChooseUs } from '@/lib/constants';
import CTA from '../CTA/CTA';
import AnimateInView from '../animationWrappers/AnimateInView';

const WhyChooseUs = () => {
  return (
    <section className='min-h-[80vh] flex flex-col items-center py-20 gap-6'>
      <AnimateInView className='mx-auto text-center max-w-3xl space-y-2'>
        <SectionHeading
          Tag='h2'
          text='Experience the Global Links Difference'
        />

        <p>
          {`Choose Global Links Auto for a car buying experience that's rooted in satisfaction. With our deep commitment to transparency, service, and excellence, we're dedicated to not just meeting, but exceeding your automotive expectations.`}
        </p>

        <CTA text='Learn More' path='/about' />
      </AnimateInView>
      <div className='w-11/12 max-w-3xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 gap-4'>
        {whyChooseUs.map(({ title, paragraph, icon }, idx) => {
          return (
            <IconCard
              key={title}
              title={title}
              paragraph={paragraph}
              icon={icon}
              index={idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
