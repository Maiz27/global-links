'use client';
import Image, { StaticImageData } from 'next/image';
import React, { memo } from 'react';
import useImageGallery from '@/lib/hooks/useImageGallery';
import { FaCircleXmark, FaCircleLeft, FaCircleRight } from 'react-icons/fa6';
import AnimateInView from '../animationWrappers/AnimateInView';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryVariants } from '@/lib/constants';

interface ImageGalleryProps {
  images: Array<{
    title: string;
    src: string | StaticImageData;
  }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = React.memo(({ images }) => {
  const {
    isOpen,
    slideNumber,
    handleOpenModal,
    handleCloseModal,
    prevSlide,
    nextSlide,
    node,
  } = useImageGallery(images?.length);

  if (!images) {
    return (
      <div className='max-w-4xl text-center mx-auto'>
        <p>
          There are no images in the gallery at the moment, we&apos;re working
          diligently to enrich this space with high-quality photographs that
          reflect our elegance and innovation. Please check back soon to
          discover the world of Toyota through Global Links Auto&apos;s lens.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className='w-11/12 mx-auto grid place-items-center gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-min'>
        {images &&
          images.map(({ title, src }, index) => (
            <AnimateInView
              className='w-full h-full cursor-pointer rounded-tl-xl rounded-br-xl overflow-hidden'
              key={index}
              delay={(index + 1) * 0.2}
              onClick={() => handleOpenModal(index)}
            >
              <div className='w-full h-32 xl:h-40 relative'>
                <MemoizedImage src={src} title={title} />
              </div>
            </AnimateInView>
          ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className='fixed z-50 inset-0 w-full h-full m-auto grid place-items-center before:content-[""] before:absolute before:w-full before:h-full before:inset-0 before:bg-[rgba(0,0,0,0.8)]'>
            <motion.div
              initial='closed'
              animate={isOpen ? 'open' : 'closed'}
              exit='closed'
              variants={galleryVariants}
              ref={node as React.MutableRefObject<HTMLDivElement>}
              className='z-50 relative max-w-6xl w-11/12 md:w-fit m-auto'
            >
              <div
                className={`h-full md:h-[35rem] xl:h-[40rem] max-h-[4/5] ${
                  isOpen ? 'w-full' : 'w-full'
                }`}
              >
                <MemoizedImage
                  src={images[slideNumber].src}
                  title={images[slideNumber].title}
                  isOpen={isOpen}
                  width={1080}
                  height={300}
                />
              </div>
              <button
                className='z-50 absolute -top-4 lg:-top-6 right-0 lg:-right-6 text-2xl md:text-3xl lg:text-4xl text-base-100 shadow-xl'
                title='Close Gallery'
                onClick={handleCloseModal}
              >
                <FaCircleXmark />
              </button>
              <button
                className='z-50 absolute left-2 lg:-left-8  top-1/2 -translate-y-1/2 text-2xl md:text-3xl lg:text-4xl text-base-100 shadow-xl'
                title='Previous Image'
                onClick={prevSlide}
              >
                <FaCircleLeft />
              </button>
              <button
                className='z-50 absolute right-2 lg:-right-8 top-1/2 -translate-y-1/2 text-2xl md:text-3xl lg:text-4xl text-base-100 shadow-xl'
                title='Next Image'
                onClick={nextSlide}
              >
                <FaCircleRight />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

// Memoized Image component
const MemoizedImage: React.FC<{
  src: string | StaticImageData;
  title: string;
  isOpen?: boolean;
  width?: number;
  height?: number;
}> = memo(
  ({ src, title, isOpen = false, width = 500, height = 300 }) => (
    <div className={`relative h-full w-full`}>
      <Image
        src={src}
        alt={title}
        title={title}
        width={width}
        height={height}
        className={` w-full h-full ${
          isOpen
            ? 'rounded-2xl object-contain'
            : 'hover:scale-110 transition-transform duration-300 h-full object-cover'
        }`}
        loading='lazy'
      />
      {!isOpen && (
        <div className='absolute top-0 right-0'>
          <Image
            src={`/imgs/graphics/triangles-3.png`}
            alt='Triangle pattern'
            width={500}
            height={300}
            className='w-10 aspect-square object-cover'
          />
        </div>
      )}
    </div>
  ),
  (prevProps, nextProps) => prevProps.src === nextProps.src
);

// Set display name for the component
ImageGallery.displayName = 'ImageGallery';
MemoizedImage.displayName = 'MemoizedImage';

// Export the component
export default ImageGallery;
