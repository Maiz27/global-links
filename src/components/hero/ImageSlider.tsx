'use client';
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import img from '/public/imgs/hero/1.jpg';
import img2 from '/public/imgs/hero/6.jpg';
import img3 from '/public/imgs/hero/3.jpg';
import img4 from '/public/imgs/hero/7.jpg';
import img6 from '/public/imgs/hero/4.jpg';

import '@splidejs/react-splide/css';

const images = [
  {
    title: 'Slide Image 1',
    image: img,
  },
  {
    title: 'Slide Image 2',
    image: img2,
  },
  {
    title: 'Slide Image 3',
    image: img3,
  },
  {
    title: 'Slide Image 4',
    image: img4,
  },
  {
    title: 'Slide Image 5',
    image: img6,
  },
];
const ImageSlider = () => {
  const options = {
    type: 'loop',
    autoplay: true,
    // pauseOnHover: true,
  };
  return (
    <Splide
      hasTrack={false}
      options={options}
      tag='section'
      className='h-full after:content-[""] after:absolute after:w-full after:h-full after:inset-0 after:bg-[rgba(0,0,0,0.6)]'
    >
      <SplideTrack className='h-full'>
        {images.map(({ title, image }) => {
          return (
            <SplideSlide key={title}>
              <Image
                src={image}
                alt={title}
                width={2400}
                height={2400}
                priority={true}
                className='h-full object-cover object-center'
              />
            </SplideSlide>
          );
        })}
      </SplideTrack>

      <div className='splide__arrows hidden' />
      <ul className='splide__pagination '></ul>
    </Splide>
  );
};

export default ImageSlider;
