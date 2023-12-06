import Image, { StaticImageData } from 'next/image';

type props = {
  name: string;
  year: number;
  category: string;
  image: StaticImageData | string;
};

const VehicleCard = ({ name, category, year, image }: props) => {
  return (
    <div className='w-full h-full flex flex-col relative rounded-2xl overflow-hidden shadow'>
      <div className='w-full h-4/5'>
        <Image src={image} alt={name} className='h-full w-full object-cover' />
      </div>
      <div className='h-1/5 bg-base-100 p-4'>
        <div className='w-max gap-2 flex text-sm'>
          <div className='badge badge-neutral badge-sm'>{category}</div>
          <div className='badge badge-neutral badge-sm'>{year}</div>
        </div>
        <h3 className='text-xl font-bold'>{name}</h3>
      </div>
    </div>
  );
};

export default VehicleCard;
