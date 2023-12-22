import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

const page = () => {
  return (
    <main>
      <PageHeader pageIndex={3} />

      <section className='my-20 flex w-full flex-col lg:flex-row justify-evenly items-center lg:items-start space-y-12 lg:space-y-0'>
        <div className='w-4/5 lg:w-2/6 flex flex-col justify-center items-center space-y-8'>
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
                <a href='tel:+211912301173' className='hover:text-accent '>
                  +211-912-301-173
                </a>
                <div className='divider divider-vertical md:divider-horizontal -my-1' />
                <a href='tel:+211922007117' className='hover:text-accent'>
                  +211-922-007-117
                </a>
              </div>
            </div>
            <div className='flex items-center gap-4 group'>
              <FaEnvelope className='text-2xl' />
              <a
                href='mailto:info@globalinksauto.com'
                className='hover:text-accent'
              >
                info@globalinksauto.com
              </a>
            </div>

            <div className='flex items-center gap-4 '>
              <FaLocationDot className='text-2xl' />
              <p>Amarat, Juba, CES, South Sudan</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>

      <div className='min-h-screen'></div>
    </main>
  );
};

export default page;
