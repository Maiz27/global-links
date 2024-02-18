'use client';
import Image, { StaticImageData } from 'next/image';
import React, { memo } from 'react';
import useImageGallery from '@/lib/hooks/useImageGallery';
import { FaCircleXmark, FaCircleLeft, FaCircleRight } from 'react-icons/fa6';
import AnimateInView from '../animationWrappers/AnimateInView';

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

  return (
    <div>
      {isOpen && (
        <div className='fixed z-50 inset-0 w-full mx-auto grid place-items-center before:content-[""] before:absolute before:w-full before:h-full before:inset-0 before:bg-[rgba(0,0,0,0.8)]'>
          <div
            ref={node as React.MutableRefObject<HTMLDivElement>}
            className='z-50 relative max-w-6xl w-full lg:w-4/5'
          >
            <MemoizedImage
              src={images[slideNumber].src}
              title={images[slideNumber].title}
              withHoverEffect={!isOpen}
              width={1080}
              height={500}
            />
            <button
              className='z-50 absolute -top-4 lg:-top-6 right-0 lg:-right-6 text-2xl md:text-3xl lg:text-4xl text-base-100'
              title='Close Gallery'
              onClick={handleCloseModal}
            >
              <FaCircleXmark />
            </button>
            <button
              className='z-50 absolute left-2 lg:-left-8  top-1/2 -translate-y-1/2 text-2xl md:text-3xl lg:text-4xl text-base-100'
              title='Previous Image'
              onClick={prevSlide}
            >
              <FaCircleLeft />
            </button>
            <button
              className='z-50 absolute right-2 lg:-right-8 top-1/2 -translate-y-1/2 text-2xl md:text-3xl lg:text-4xl text-base-100'
              title='Next Image'
              onClick={nextSlide}
            >
              <FaCircleRight />
            </button>
          </div>
        </div>
      )}

      <div className='w-11/12 mx-auto grid place-items-center gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {images &&
          images.map(({ title, src }, index) => (
            <AnimateInView
              className='w-full h-full cursor-pointer rounded-tl-xl rounded-br-xl overflow-hidden'
              key={index}
              delay={++index * 0.2}
              onClick={() => handleOpenModal(index)}
            >
              <MemoizedImage src={src} title={title} />
            </AnimateInView>
          ))}
      </div>
    </div>
  );
});

// Memoized Image component
const MemoizedImage: React.FC<{
  src: string | StaticImageData;
  title: string;
  withHoverEffect?: boolean;
  width?: number;
  height?: number;
}> = memo(
  ({ src, title, withHoverEffect = true, width = 500, height = 300 }) => (
    <div className='relative w-fit mx-auto'>
      <Image
        src={src}
        alt={title}
        width={width}
        height={height}
        className={`max-w-full ${
          withHoverEffect
            ? 'hover:scale-110 transition-transform duration-300 '
            : 'rounded-2xl'
        }`}
        loading='lazy'
      />
      {withHoverEffect && (
        <div className='absolute top-0 right-0'>
          <Image
            src={`/imgs/graphics/triangles-3.png`}
            width={500}
            height={300}
            alt='Triangle pattern'
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
