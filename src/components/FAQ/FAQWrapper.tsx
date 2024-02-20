import { fetchSanityData, getFAQs } from '@/lib/sanity/queries';
import { Faq } from '@/lib/types';
import React from 'react';
import BasicFAQ from './FAQ';

const FAQWrapper = async () => {
  const faqs: Faq[] = await fetchSanityData(getFAQs);

  return (
    <>
      <BasicFAQ list={faqs} />
    </>
  );
};

export default FAQWrapper;
