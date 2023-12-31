'use client';
import { useState, useRef } from 'react';
import useLockBodyScroll from './useLockBodyScroll';
import useOutsideClick from './useOutsideClick';

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
