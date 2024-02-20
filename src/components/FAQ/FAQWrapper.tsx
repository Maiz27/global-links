import { Faq } from '@/lib/types';
import BasicFAQ from './FAQ';

const FAQWrapper = ({ faqs }: { faqs: Faq[] }) => {
  return (
    <>
      <BasicFAQ list={faqs} />
    </>
  );
};

export default FAQWrapper;
