import Image from 'next/image';
import Link from 'next/link';
import graphic from '/public/imgs/graphics/triangles-3.png';
import graphic2 from '/public/imgs/graphics/triangles-4.png';
import { urlFor } from '@/services/sanity/sanityClient';
import { vehicle } from '@/types';

type props = {
  vehicle: vehicle;
};

const VehicleCard = ({ vehicle }: props) => {
  const {
    name,
    mainImage,
    type,
    slug: { current },
  } = vehicle;
  const imgUrl = urlFor(mainImage).url();

  const after =
    'after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/20 after:to-black/60';

  return (
    <Link
      href={`/vehicles/${current}`}
      className='w-full h-full flex flex-col relative card shadow bg-base-100 text-base-content group'
    >
      <figure className={`absolute inset-0 ${after}`}>
        <Image
          src={imgUrl}
          alt={name}
          width={500}
          height={500}
          className='h-full object-cover'
        />

        <div className='absolute top-0 right-0 z-10'>
          <Image
            src={graphic}
            alt='Triangle pattern'
            className='w-14 aspect-square object-cover'
          />
        </div>
        <div className='absolute -bottom-[1px] left-0 z-10'>
          <Image
            src={graphic2}
            alt='Triangle pattern'
            className='w-14 aspect-square object-cover'
          />
        </div>
      </figure>
      <div className='card-body py-4 justify-end items-center z-10 text-base-100'>
        <div className='badge badge-outline'>{type.title}</div>

        <h3 className='card-title text-xl'>{name}</h3>
      </div>
    </Link>
  );
};

export default VehicleCard;
