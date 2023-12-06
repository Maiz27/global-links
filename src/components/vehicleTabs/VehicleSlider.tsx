import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { vehicles } from '@/constants';
import VehicleCard from '../vehicleCard/VehicleCard';
import useWindowWidth from '@/hooks/useWindowWidth';

type props = {
  list: typeof vehicles;
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
    <div className='wrapper my-10'>
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
          {list.map(({ name, category, year, image }) => (
            <SplideSlide key={`${name}-${year}`} className='py-2'>
              <VehicleCard
                name={name}
                category={category}
                year={year}
                image={image}
              />
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* <div className='my-12 w-1/2 lg:w-1/4 xl:w-1/6 mx-auto relative'> */}
        <div className='splide__arrows' />
        <div className='hidden'>
          <ul className='splide__pagination'></ul>
        </div>
        {/* </div> */}
      </Splide>
    </div>
  );
};

export default VehicleSlider;
