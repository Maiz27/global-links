import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';
import PageTransition from '@/components/animationWrappers/PageTransition';
import AnimateInView from '@/components/animationWrappers/AnimateInView';
import { pagesMetaData, slideRight } from '@/lib/constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const metadata: Metadata = {
  title: pagesMetaData[6].title,
  description: pagesMetaData[6].description,
  icons: {
    icon: pagesMetaData[6].icon,
    shortcut: pagesMetaData[6].icon,
    apple: pagesMetaData[6].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[6].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[6].type,
    url: pagesMetaData[6].url,
    title: pagesMetaData[6].title,
    description: pagesMetaData[6].description,
    siteName: pagesMetaData[6].title,
    images: [
      {
        url: pagesMetaData[6].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[6].url,
    images: [
      {
        url: pagesMetaData[6].image,
      },
    ],
  },
};

const page = () => {
  return (
    <PageTransition>
      <PageHeader pageIndex={5} />

      <section className='my-20 flex w-full flex-col lg:flex-row justify-evenly items-center lg:items-start space-y-12 lg:space-y-0'>
        <AnimateInView
          initial={slideRight.initial}
          whileInView={slideRight.whileInView}
          className='w-4/5 lg:w-2/6 flex flex-col justify-center items-center space-y-8'
        >
          <SectionHeading Tag='h2' text='Get In Touch' />

          <p>
            We are eager to assist you in any way possible. Feel free to reach
            out to us through our contact numbers, or send us an email if it
            isn&lsquo;t urgent. For those who prefer a face-to-face
            conversation, you can find us at Amarat, Juba, CES, South Sudan.
            However you choose to connect, Global Links is here to assist you
            with a seamless experience.
          </p>

          <div className='w-full flex flex-col justify-center items-start gap-8 transition-colors lg:pt-10'>
            <div className='flex w-full items-center md:justify-start gap-4 group '>
              <FaPhone className='text-2xl' />
              <div className='flex flex-col md:flex-row'>
                <a href='tel:+211912301173' className='hover:text-primary '>
                  +211-912-301-173
                </a>
                <div className='divider divider-vertical md:divider-horizontal -my-1' />
                <a href='tel:+211922007117' className='hover:text-primary'>
                  +211-922-007-117
                </a>
              </div>
            </div>
            <div className='flex items-center gap-4 group'>
              <FaEnvelope className='text-2xl' />
              <a
                href='mailto:info@globalinksauto.com'
                className='hover:text-primary'
              >
                info@globalinksauto.com
              </a>
            </div>

            <div className='flex items-center gap-4 '>
              <FaLocationDot className='text-2xl' />
              <p>Amarat, Juba, CES, South Sudan</p>
            </div>
          </div>
        </AnimateInView>
        <ContactForm />
      </section>

      <AnimateInView tag='section' className='h-[40rem]'>
        <iframe
          className='w-full h-full sepia-[6.1] saturate-[1.5]'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Global%20Links%20Auto)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        />
      </AnimateInView>
    </PageTransition>
  );
};

export default page;
