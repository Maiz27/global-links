import Image from 'next/image';

import team from 'public/imgs/team.jpg';
import CTA from '../CTA/CTA';

const BlogCard = () => {
  const after =
    'after:content-[""] after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-transparent after:via-black/60 after:to-black/90';
  const before =
    'before:content-[""] before:absolute before:inset-[1px] before:bg-transparent group-hover:before:bg-black/40 before:transition-colors before:duration-500';
  return (
    <div className='card w-full h-[30rem] bg-base-100 shadow-xl relative group'>
      <figure className={`absolute inset-0 rounded-xl ${before} ${after}`}>
        <Image
          src={team}
          alt='blog'
          className='h-full object-cover rounded-xl'
        />
      </figure>
      <div className='card-body justify-end z-10 text-base-100'>
        <div className='mb-4 space-y-4'>
          <h3 className='card-title'>
            Shoes! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Libero, ut?
          </h3>
          <p className='grow-0 px-1 text-sm max-h-0 overflow-hidden group-hover:max-h-52 transition-[max-height] duration-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            incidunt commodi dicta atque cupiditate laboriosam impedit et nisi,
            sunt perferendis?
          </p>
        </div>
        <div className='card-actions justify-end'>
          <CTA text='Learn More' bg='accent' textColor='base-100' />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
