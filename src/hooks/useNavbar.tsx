'use client';
import { useState, useRef, useEffect } from 'react';
import useLockBodyScroll from './useLockBodyScroll';

const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Ref for handling outside clicks
  const node = useRef<HTMLElement | null>(null);

  // Use custom hook to close menu on outside click
  useOutsideClick(node, () => setIsOpen(false));

  // Use LockBodyScroll hook
  useLockBodyScroll(isOpen);

  return {
    isOpen,
    setIsOpen,
    node,
  };
};

export default useNavbar;

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]);
};
