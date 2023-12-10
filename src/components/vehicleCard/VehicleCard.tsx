import { vehicle } from '@/types';
import Image from 'next/image';
import { urlFor } from '@/services/sanity/sanityClient';
import { FaRegCalendarDays, FaBuffer } from 'react-icons/fa6';

type props = {
  vehicle: vehicle;
};

const VehicleCard = ({ vehicle }: props) => {
  const { name, mainImage, type, slug } = vehicle;
  const imgUrl = urlFor(mainImage).url();

  return (
    <div className='w-full h-full flex flex-col relative rounded-2xl overflow-hidden shadow'>
      <div className='h-52 flex-1'>
        <Image
          src={imgUrl}
          alt={name}
          width={500}
          height={500}
          className='h-full w-full object-scale-down'
        />
      </div>
      <div className='bg-base-100 p-4'>
        <h3 className='text-xl font-bold'>{name}</h3>
        {/* <div className='w-max gap-4 flex text-xs'>
          <div className='flex items-center gap-1'>
            <span className='shadow bg-white rounded-md p-2'>
              <FaBuffer />
            </span>
            <p>{category}</p>
          </div>
          <div className='flex items-center gap-1'>
            <span className='shadow bg-white rounded-md p-2'>
              <FaRegCalendarDays />
            </span>
            <p>{year}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VehicleCard;
