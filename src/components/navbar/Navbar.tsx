'use client';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiArrowRight } from 'react-icons/fi';
import CTA from '@/components/CTA/CTA';
import logo from '/public/imgs/logo/logo.png';
import { routes } from '@/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLElement | null>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (node.current?.contains(event.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={node}
      className='bg-base-100 p-2 border-b-[1px] border-base-300 flex items-center justify-between relative z-50'
    >
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href='/' className='h-12 w-24'>
      <Image
        src={logo}
        alt='Global Links'
        className='h-full object-scale-down'
      />
    </Link>
  );
};

const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='flex items-center gap-6'>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='block lg:hidden  text-2xl'
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      {routes.map(({ name, href: path }) => {
        return <NavLink key={path} name={name} path={path} />;
      })}
    </div>
  );
};

const NavLink = ({ name, path }: { name: string; path: string }) => {
  return (
    <Link
      href={path}
      className='hidden lg:block h-[30px] overflow-hidden font-medium'
    >
      <div className='hover:-translate-y-8 transition-transform duration-200 ease-in-out'>
        <span className='flex items-center h-[30px]'>{name}</span>
        <span className='flex items-center h-[30px] text-primary'>{name}</span>
      </div>
    </Link>
  );
};

const NavRight = () => {
  return (
    <div className='flex items-center gap-4'>
      <CTA text='Get In Touch' isOutline={true} />
    </div>
  );
};

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      className='absolute p-4 bg-base-100 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4'
    >
      {routes.map(({ name, href: path }) => {
        return <MenuLink key={path} name={name} path={path} />;
      })}
    </motion.div>
  );
};

const MenuLink = ({ name, path }: { name: string; path: string }) => {
  return (
    <motion.div
      variants={menuLinkVariants}
      className='h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2'
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className='h-[30px] text-gray-950' />
      </motion.span>
      <div className='hover:-translate-y-8 transition-transform duration-200 ease-in-out'>
        <span className='flex items-center h-[30px]'>{name}</span>
        <Link href={path} className='flex items-center h-[30px] text-primary'>
          {name}
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
