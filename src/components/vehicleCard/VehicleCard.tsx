import Image, { StaticImageData } from 'next/image';
import { FaRegCalendarDays, FaBuffer } from 'react-icons/fa6';

type props = {
  name: string;
  year: number;
  category: string;
  image: StaticImageData | string;
};

const VehicleCard = ({ name, category, year, image }: props) => {
  return (
    <div className='w-full h-full flex flex-col relative rounded-2xl overflow-hidden shadow'>
      <div className='w-full h-5/6'>
        <Image
          src={image}
          alt={name}
          className='h-full w-full object-scale-down'
        />
      </div>
      <div className='h-1/6 bg-base-100 p-4'>
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
