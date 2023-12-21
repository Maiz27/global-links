'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState, memo } from 'react';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';
import { FaCircleXmark, FaCircleLeft, FaCircleRight } from 'react-icons/fa6';

interface ImageGalleryProps {
  images: Array<{
    title: string;
    src: string | StaticImageData;
  }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = React.memo(({ images }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useLockBodyScroll(openModal);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideNumber((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  return (
    <div>
      {openModal && (
        <div className='fixed z-50 inset-0 w-full mx-auto grid place-items-center before:content-[""] before:absolute before:w-full before:h-full before:inset-0 before:bg-[rgba(0,0,0,0.8)]'>
          <div className='z-50 relative max-w-6xl w-full lg:w-4/5'>
            <MemoizedImage
              src={images[slideNumber].src}
              title={images[slideNumber].title}
              withHoverEffect={!openModal}
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

      <div className='w-4/5 mx-auto grid place-items-center gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {images &&
          images.map(({ title, src }, index) => (
            <div
              className='w-full cursor-pointer rounded-2xl overflow-hidden'
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <MemoizedImage src={src} title={title} />
            </div>
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
}> = memo(
  ({ src, title, withHoverEffect = true }) => (
    <Image
      src={src}
      alt={title}
      className={`max-w-full rounded-2xl ${
        withHoverEffect && 'hover:scale-110 transition-transform duration-300'
      }`}
      loading='lazy'
    />
  ),
  (prevProps, nextProps) => prevProps.src === nextProps.src
);

// Set display name for the component
ImageGallery.displayName = 'ImageGallery';
MemoizedImage.displayName = 'MemoizedImage';

// Export the component
export default ImageGallery;
