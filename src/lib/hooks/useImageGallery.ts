'use client';
import { useEffect, useRef, useState } from 'react';
import useLockBodyScroll from './useLockBodyScroll';
import useOutsideClick from './useOutsideClick';

const useImageGallery = (imagesCount: number) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const node = useRef<HTMLElement | null>(null);
  useOutsideClick(node, () => setIsOpen(false));

  useLockBodyScroll(isOpen);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const prevSlide = () => {
    setSlideNumber((prev) => (prev === 0 ? imagesCount - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideNumber((prev) => (prev + 1 === imagesCount ? 0 : prev + 1));
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleArrowKey = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleEscKey(event);
      handleArrowKey(event);
    };

    document.addEventListener('keydown', handleKeyDown);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isOpen,
    slideNumber,
    handleOpenModal,
    handleCloseModal,
    prevSlide,
    nextSlide,
    node,
  };
};

export default useImageGallery;
