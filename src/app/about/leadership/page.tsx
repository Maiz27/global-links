import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/pageHeader/PageHeader';
import { team } from '@/lib/constants';
import PageTransition from '@/components/animationWrappers/PageTransition';

const page = () => {
  return (
    <PageTransition>
      <PageHeader pageIndex={2} />

      <div className='w-4/5 md:w-11/12 xl:w-4/5 h-full mx-auto grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 py-20'>
        {team.map((member, idx) => (
          <TeamCard
            key={idx}
            member={member}
            position={member.position as Position}
          />
        ))}
      </div>
    </PageTransition>
  );
};

export default page;

type Position = 'left' | 'right' | 'down';

type member = (typeof team)[0];

const TeamCard = ({
  position,
  member: { img, title, name, paragraph },
}: {
  position: Position;
  member: member;
}) => {
  const baseTriangleClass = 'clip-triangle-down';

  const lgTriangleClasses = {
    left: 'lg:clip-triangle-left',
    right: 'lg:clip-triangle-right',
    down: 'lg:clip-triangle-down',
  };

  const trianglePositionClasses = {
    down: 'bottom-1 translate-y-full right-1/2 translate-x-1/2',
    left: 'lg:top-1/2 lg:-translate-y-1/2 lg:left-1 lg:-translate-x-full lg:bottom-auto',
    right:
      'lg:top-1/2 lg:-translate-y-1/2 lg:right-1 lg:translate-x-full lg:bottom-auto',
  };

  const combinedTriangleClasses = `${baseTriangleClass} ${lgTriangleClasses[position]}`;
  return (
    <div className='w-full h-full grid place-items-center gap-1 grid-cols-1 lg:grid-cols-2'>
      <div
        className={`w-full h-full flex flex-col justify-center space-y-2 bg-primary relative p-4 text-base-100 card ${
          position !== 'right' ? 'lg:order-last' : ''
        }`}
      >
        <h3 className='text-xl font-medium'>{name}</h3>
        <span className='opacity-80 text-lg'>{title}</span>
        <p className='text-sm lg:text-xs 2xl:text-sm text-balance'>
          {paragraph}
        </p>
        <div
          className={`absolute card ${trianglePositionClasses['down']} ${trianglePositionClasses[position]} w-8 aspect-square bg-primary ${combinedTriangleClasses}`}
        />
      </div>
      <div className='w-full h-full bg-primary'>
        <Image
          src={img}
          alt={name}
          width={500}
          height={300}
          className='h-full object-cover'
          loading='lazy'
        />
      </div>
    </div>
  );
};
