import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import VehicleCard from '../vehicleCard/VehicleCard';
import useWindowWidth from '@/hooks/useWindowWidth';
import { vehicle } from '@/types';

type props = {
  list: vehicle[];
};

const VehicleSlider = ({ list }: props) => {
  const width = useWindowWidth();
  let perPage = 1;

  if (width >= 1024) {
    perPage = 3;
  } else if (width >= 768) {
    perPage = 2;
  }

  return (
    <div className='my-10'>
      <Splide
        hasTrack={false}
        options={{
          perPage: perPage,
          height: '22rem',
          rewind: true,
          gap: '2rem',
        }}
        aria-labelledby='Vehicles Slider'
      >
        <SplideTrack>
          {list.map((vehicle) => (
            <SplideSlide key={`${vehicle.name}`} className='pb-1 h-full'>
              <VehicleCard vehicle={vehicle} />
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className={`${list.length <= perPage && 'hidden'}`}>
          <div className='splide__arrows' />
        </div>
        <div className='hidden'>
          <ul className='splide__pagination'></ul>
        </div>
      </Splide>
    </div>
  );
};

export default VehicleSlider;
