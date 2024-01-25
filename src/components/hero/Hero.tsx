import ImageSlider from './ImageSlider';
import CTA from '../CTA/CTA';
import { heroImages } from '@/lib/types';

const Hero = ({ images }: heroImages) => {
  return (
    <div className='h-[92vh] relative'>
      <ImageSlider images={images} />
      <div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8'>
        <h1 className='text-center text-3xl lg:text-4xl font-bold  text-base-100'>
          Your Trusted Toyota Partner in South Sudan
        </h1>
        <p className='mb-6 mt-4 max-w-3xl text-center lg:text-lg font-light text-base-100'>
          <span className='text-primary font-bold tracking-wide'>
            Global Links Auto{' '}
          </span>
          embodies a legacy of excellence, reliability, and unmatched expertise.
          We bring you the assurance of genuine quality and service. Choose
          confidence, choose reliability – choose the official Toyota experience
          with us.
        </p>
        <div className='w-3/4 max-w-sm flex justify-around'>
          <CTA text='Contact Us' path='/contact' />
          <CTA text='Browse Vehicles' isOutline={true} path='/vehicles' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
