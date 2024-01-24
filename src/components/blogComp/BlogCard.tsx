import Image from 'next/image';
import CTA from '../CTA/CTA';
import { blog } from '@/types';
import { urlFor } from '@/services/sanity/sanityClient';

const BlogCard = ({ blog }: { blog: blog }) => {
  const { title, slug, description, mainImage, categories } = blog;

  const imgUrl = urlFor(mainImage).url();

  const after =
    'after:content-[""] after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-transparent after:via-black/40 after:to-black/90';
  const before =
    'before:content-[""] before:absolute before:inset-[1px] before:bg-transparent group-hover:before:bg-black/40 before:transition-colors before:duration-500';
  return (
    <div className='card w-full h-[30rem] bg-base-100 shadow-xl relative group'>
      <figure className={`absolute inset-0 card ${before} ${after}`}>
        <Image
          src={imgUrl}
          width={1920}
          height={1080}
          alt='blog'
          className='h-full object-cover'
        />
      </figure>
      <div className='card-body justify-end z-10 text-base-100'>
        <div className='badge badge-outline'>{categories[0].title}</div>
        <h3 className='card-title'>{title}</h3>
        <p className='grow-0 px-1 text-sm max-h-0 overflow-hidden group-hover:max-h-52 transition-[max-height] duration-500'>
          {description}
        </p>

        <div className='card-actions justify-end'>
          <CTA
            text='Learn More'
            bg='accent'
            textColor='base-100'
            path={`/blog/${slug.current}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
