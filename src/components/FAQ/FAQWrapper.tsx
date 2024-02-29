import { fetchSanityData, getFAQs } from '@/lib/sanity/queries';
import { Faq } from '@/lib/types';
import BasicFAQ from './FAQ';

export const revalidate = 60;

const FAQWrapper = async () => {
  const faqs: Faq[] = await fetchSanityData(getFAQs);

  return (
    <>
      <BasicFAQ list={faqs} />
    </>
  );
};

export default FAQWrapper;
