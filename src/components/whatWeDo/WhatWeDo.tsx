import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { whatWeDoList } from '@/constants';
import { IconType } from 'react-icons';

const WhatWeDo = () => {
  return (
    <section className='my-20 space-y-4'>
      <div className='mx-auto text-center max-w-xl'>
        <SectionHeading Tag='h2' text='What We Do' isCentered={true} />
        <p>
          At Global Links, we are your premier destination for all things Toyota
          in South Sudan. Our comprehensive range of services includes:
        </p>
      </div>
      <div className='w-11/12 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {whatWeDoList.map(({ title, paragraph, icon }) => {
          return (
            <Card key={title} title={title} paragraph={paragraph} icon={icon} />
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDo;

type props = {
  title: string;
  paragraph: string;
  icon: IconType;
};

const Card = ({ title, paragraph, icon }: props) => {
  const Icon = icon;
  return (
    <div className='h-full card bg-base-100 shadow p-6 text-center gap-4'>
      <span className='w-fit shadow bg-base-100 rounded-md p-2 text-2xl text-secondary mx-auto'>
        <Icon />
      </span>

      <h3 className='font-semibold'>{title}</h3>
      <p className='opacity-80 text-sm'>{paragraph}</p>
    </div>
  );
};
