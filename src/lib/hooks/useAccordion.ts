'use client';
import { useState } from 'react';

const useAccordion = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return {
    openIndex,
    handleToggle,
  };
};

export default useAccordion;
