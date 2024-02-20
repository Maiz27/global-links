import Image from 'next/image';
import CTA from '../CTA/CTA';
import AnimateInView from '../animationWrappers/AnimateInView';
import SectionHeading from '../sectionHeading/SectionHeading';

export const Default404 = () => {
  return (
    <section className='min-h-[92.5dvh] flex flex-col relative'>
      <div className='absolute -top-1 right-0 z-10'>
        <Image
          src={`/imgs/graphics/triangles-3.png`}
          width={100}
          height={100}
          loading='lazy'
          alt='Triangle pattern'
          className='w-16 aspect-square object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 z-10'>
        <Image
          src={`/imgs/graphics/triangles-4.png`}
          width={100}
          height={100}
          loading='lazy'
          alt='Triangle pattern'
          className='w-16 aspect-square object-cover'
        />
      </div>
      <div className='h-5/6 w-11/12 mx-auto grid place-items-center grow py-10'>
        <AnimateInView className='space-y-4'>
          <SectionHeading Tag='h1' text='Oops! Looks Like You’re Off the Map' />
          <p className='px-2 text-center w-11/12 mx-auto max-w-6xl  text-sm xl:text-base'>
            We can’t seem to find the page you’re looking for. It might have
            been moved, deleted, or perhaps the URL was mistyped. But there’s no
            need to worry! Every journey has its detours. Let’s find a way to
            get you back on track. You can start by heading back to our Home
            Page or explore our Services and Showroom to see the latest from
            Global Links Auto. We’re here to ensure your journey through our
            site is smooth and rewarding.
          </p>

          <div className='flex justify-center items-center gap-4'>
            <CTA path='/vehicles' text='Explore Vehicles' />
            <CTA path='/services' text='Explore Services' isOutline />
          </div>
        </AnimateInView>
      </div>
    </section>
  );
};

export const Vehicle404 = () => {
  return (
    <section className='min-h-[92.5dvh] flex flex-col relative'>
      <div className='absolute -top-1 right-0 z-10'>
        <Image
          src={`/imgs/graphics/triangles-3.png`}
          width={100}
          height={100}
          loading='lazy'
          alt='Triangle pattern'
          className='w-16 aspect-square object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 z-10'>
        <Image
          src={`/imgs/graphics/triangles-4.png`}
          width={100}
          height={100}
          loading='lazy'
          alt='Triangle pattern'
          className='w-16 aspect-square object-cover'
        />
      </div>

      <div className='h-5/6 w-11/12 mx-auto grid place-items-center grow py-10'>
        <AnimateInView className='space-y-4'>
          <SectionHeading
            Tag='h1'
            text='Journey Interrupted: Vehicle Not Found'
          />
          <p className='px-2 text-center w-11/12 mx-auto max-w-6xl  text-sm xl:text-base'>
            Our apologies, but the vehicle you’re searching for seems to be off
            the map. It’s possible the listing has been moved or is no longer
            available. But don’t let this detour stop you! Explore our Toyota
            Showroom to discover the latest models or return to the Home Page.
            Let’s navigate you back to your automotive journey with Global Links
            Auto.
          </p>

          <div className='flex justify-center items-center gap-4'>
            <CTA path='/vehicles' text='Explore Vehicles' />
            <CTA path='/' text='Back to Home Page' isOutline />
          </div>
        </AnimateInView>
      </div>
    </section>
  );
};

export const Blog404 = () => {
  return (
    <section className='min-h-[92.5dvh] flex flex-col relative'>
      <div className='absolute -top-1 right-0 z-10'>
        <Image
          src={`/imgs/graphics/triangles-3.png`}
          width={100}
          height={100}
          loading='lazy'
          alt='Triangle pattern'
          className='w-16 aspect-square object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 z-10'>
        <Image
          src={`/imgs/graphics/triangles-4.png`}
          width={100}
          height={100}
          loading='lazy'
          alt='Triangle pattern'
          className='w-16 aspect-square object-cover'
        />
      </div>

      <div className='h-5/6 w-11/12 mx-auto grid place-items-center grow py-10'>
        <AnimateInView className='space-y-4'>
          <SectionHeading
            Tag='h1'
            text='Lost in the Archives: Blog Not Found'
          />
          <p className='px-2 text-center w-11/12 mx-auto max-w-6xl  text-sm xl:text-base'>
            It looks like the story you’re looking for has taken a wrong turn.
            The blog post you seek may have been retired from our library or the
            URL was mistyped. Fear not, for the road to knowledge is filled with
            turns. You can backtrack to our Blog Overview to catch up on the
            latest automotive insights or head over to our Home Page to start
            afresh. Join us as we continue exploring the world of Toyota
            together with Global Links Auto.
          </p>

          <div className='flex justify-center items-center gap-4'>
            <CTA path='/blog' text='Explore Blog' />
            <CTA path='/' text='Back to Home Page' isOutline />
          </div>
        </AnimateInView>
      </div>
    </section>
  );
};
