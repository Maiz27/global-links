import { socials } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = [
  {
    name: 'Vehicles',
    href: '/vehicles',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'After Sale',
    href: '/services/after-sale',
  },
  {
    name: 'Spare Parts',
    href: '/services/spare-parts',
  },
];

const links = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Leadership',
    href: '/about/leadership',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
];

const Footer = () => {
  return (
    <footer className='h-full md:h-80 rounded-t bg-gradient-to-r from-gray-900 to-black text-base-100'>
      <div className='footer p-10'>
        <nav className=''>
          <h6 className='footer-title'>Services</h6>
          {services.map(({ name, href }) => {
            return (
              <Link key={href} href={href} className='link link-hover'>
                {name}
              </Link>
            );
          })}
        </nav>
        <nav className=''>
          <h6 className='footer-title'>Links</h6>
          {links.map(({ name, href }) => {
            return (
              <Link key={href} href={href} className='link link-hover'>
                {name}
              </Link>
            );
          })}
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <Link href={'/terms-of-use'} className='link link-hover'>
            Terms of use
          </Link>
          <Link href={'/privacy-policy'} className='link link-hover'>
            Privacy policy
          </Link>
        </nav>
      </div>

      <aside className='footer px-10 py-4 border-t border-base-300'>
        <div className='items-center grid-flow-col'>
          <Link href='/' className='w-20 rounded-full bg-base-100'>
            <Image
              src={`/imgs/logo/logo.png`}
              loading='eager'
              width={250}
              height={150}
              alt='Global Links Auto'
              title='Global Links Auto'
              className='h-auto'
            />
          </Link>
          <p>
            <b>Global Links Auto</b> © {new Date().getFullYear().toString()}
            <br />
            <small>
              Providing reliable Toyota vehicles since 2008
              <br />
              Website by
              <a
                href='https://nilotik.tech'
                target='_blank'
                className='text-primary font-bold pl-2 link'
              >
                Nilotik
              </a>
            </small>
          </p>
        </div>
        <nav className='md:place-self-center md:justify-self-end'>
          <div className='grid grid-flow-col gap-4'>
            {socials.map(({ href, icon, title }) => {
              const Icon = icon;
              return (
                <a
                  key={title}
                  href={href}
                  target='_blank'
                  title={title}
                  className='text-4xl transition-all hover:text-primary hover:scale-110 active:scale-95'
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </nav>
      </aside>
    </footer>
  );
};

export default Footer;
