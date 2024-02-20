import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity/sanityClient';
import { vehicle } from '@/lib/types';

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
      className='w-full h-full min-h-[15rem] flex flex-col relative card shadow bg-base-100 text-base-content group'
    >
      <figure className={`absolute inset-0 ${after}`}>
        <Image
          src={imgUrl}
          alt={name}
          width={500}
          height={300}
          loading='lazy'
          className='h-full object-contain'
        />

        <div className='absolute -top-1 right-0 z-10'>
          <Image
            src={`/imgs/graphics/triangles-3.png`}
            width={100}
            height={100}
            loading='lazy'
            alt='Triangle pattern'
            className='w-14 aspect-square object-cover'
          />
        </div>
        <div className='absolute -bottom-[1px] left-0 z-10'>
          <Image
            src={`/imgs/graphics/triangles-4.png`}
            width={100}
            height={100}
            loading='lazy'
            alt='Triangle pattern'
            className='w-14 aspect-square object-cover'
          />
        </div>
      </figure>
      <div className='card-body p-0 py-4 justify-end items-center z-10 text-base-100'>
        <div className='badge badge-outline'>{type.title}</div>

        <h3 className='card-title text-xl'>{name}</h3>
      </div>
    </Link>
  );
};

export default VehicleCard;
