import ImageSlider from './ImageSlider';
import CTA from '../CTA/CTA';
import { heroImage } from '@/lib/types';
import { fetchSanityData, getAllHeroImages } from '@/lib/sanity/queries';

export const revalidate = 60;

const Hero = async () => {
  const images: heroImage[] = await fetchSanityData(getAllHeroImages);

  return (
    <div className='h-[92vh] relative'>
      <ImageSlider images={images} />
      <div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8'>
        <h1 className='text-center text-3xl lg:text-4xl font-bold  text-base-100'>
          Drive Excellence with Toyota in South Sudan
        </h1>
        <p className='mb-6 mt-4 max-w-3xl text-center lg:text-lg font-light text-base-100'>
          Embark on a journey of automotive distinction with{' '}
          <span className='text-primary font-bold tracking-wide'>
            Global Links Auto
          </span>
          , your premier Toyota partner in South Sudan. We deliver more than
          just vehicles; we offer a gateway to a superior driving experience,
          backed by Toyota’s legendary durability and our commitment to
          excellence.
        </p>
        <div className='w-3/4 max-w-sm flex justify-around'>
          <CTA text='Contact Us' path='/contact' />
          <CTA text='Explore Vehicles' isOutline={true} path='/vehicles' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
