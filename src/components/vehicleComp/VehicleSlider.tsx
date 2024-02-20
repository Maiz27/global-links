import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import VehicleCard from './VehicleCard';
import useWindowWidth from '@/lib/hooks/useWindowWidth';
import { vehicle } from '@/lib/types';
import AnimateInView from '../animationWrappers/AnimateInView';

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
    <>
      <Splide
        hasTrack={false}
        options={{
          perPage: perPage,
          height: '22rem',
          rewind: true,
          gap: '2rem',
        }}
        aria-labelledby='Vehicles Slider'
        className='my-10'
      >
        <SplideTrack>
          {list.map((vehicle, idx) => (
            <SplideSlide key={`${vehicle.name}`} className='pb-1 h-full'>
              <AnimateInView delay={idx * 0.3} className='h-full '>
                <VehicleCard vehicle={vehicle} />
              </AnimateInView>
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
    </>
  );
};

export default VehicleSlider;
