'use client';
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { urlFor } from '@/services/sanity/sanityClient';
import { heroImages } from '@/types';

import '@splidejs/react-splide/css';

const ImageSlider = ({ images }: heroImages) => {
  const options = {
    type: 'loop',
    autoplay: true,
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
          const imgUrl = urlFor(image).url();
          return (
            <SplideSlide key={title}>
              <Image
                src={imgUrl}
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
