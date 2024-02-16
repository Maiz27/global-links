import { routes, socials } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

// black gradient
// bg-gradient-to-r from-gray-900 to-black
const Footer = () => {
  return (
    <footer className='footer h-96 footer-center p-10 bg-triangle-pattern bg-cover bg-right-bottom text-base-100 rounded'>
      <nav className='flex flex-wrap'>
        {routes.map(({ name, href }) => {
          return (
            <Link key={href} href={href} className='link link-hover'>
              {name}
            </Link>
          );
        })}
      </nav>
      <nav>
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
      <aside>
        <p>
          Copyright © {new Date().getFullYear().toString()} - All right reserved
          by Global Links Auto
        </p>
        <p>
          Website by
          <a
            href='https://nilotik.tech'
            target='_blank'
            className='text-primary font-bold pl-2 link'
          >
            Nilotik
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
