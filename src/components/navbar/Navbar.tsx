'use client';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useNavbar from '@/lib/hooks/useNavbar';
import {
  menuLinkArrowVariants,
  menuLinkVariants,
  menuVariants,
  routes,
} from '@/lib/constants';
import { FaXmark, FaBars, FaArrowRight } from 'react-icons/fa6';

const Navbar = () => {
  const { isOpen, setIsOpen, node } = useNavbar();

  return (
    <nav
      ref={node}
      className='bg-base-100 p-2 border-b-[1px] border-base-300 flex items-center justify-between relative z-50'
    >
      <NavLeft />
      <NavRight setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

const Logo = () => {
  return (
    <div className='flex h-12 w-40 divide-x-2'>
      <Link href='/' className='w-1/2'>
        <Image
          src={`/imgs/logo/logo.png`}
          loading='eager'
          width={200}
          height={200}
          alt='Global Links Auto'
          title='Global Links Auto'
          className='h-full object-scale-down'
        />
      </Link>
      <Image
        src={`/imgs/toyota.png`}
        loading='lazy'
        width={200}
        height={200}
        alt='Toyota Logo'
        className='h-full object-scale-down w-1/2'
      />
    </div>
  );
};

const NavLeft = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <Logo />
      <ul className='flex gap-6'>
        {routes.map(({ name, href: path }) => {
          return <NavLink key={path} name={name} path={path} />;
        })}
      </ul>
    </div>
  );
};

const NavLink = ({ name, path }: { name: string; path: string }) => {
  return (
    <li>
      <Link
        href={path}
        className='hidden lg:block h-[30px] overflow-hidden font-semibold '
      >
        <div className='hover:-translate-y-8 transition-transform duration-200 ease-in-out'>
          <span className='flex items-center h-[30px]'>{name}</span>
          <span className='flex items-center h-[30px] text-primary'>
            {name}
          </span>
        </div>
      </Link>
    </li>
  );
};

const NavRight = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <label className='inline-grid lg:hidden btn btn-circle swap swap-rotate text-2xl group transition-transform'>
      {/* this hidden checkbox controls the state */}
      <input
        type='checkbox'
        checked={isOpen}
        onChange={() => setIsOpen((prev) => !prev)}
      />

      {/* hamburger icon */}
      <div className='swap-off fill-current mx-auto group-hover:scale-110 group-active:scale-95'>
        <FaBars />
      </div>

      {/* close icon */}
      <div className='swap-on fill-current mx-auto group-hover:scale-110 group-active:scale-95'>
        <FaXmark />
      </div>
    </label>
  );
};

const NavMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.ul
      variants={menuVariants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      className='absolute p-4 bg-base-100 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4'
    >
      {routes.map(({ name, href: path }) => {
        return (
          <MenuLink key={path} name={name} path={path} setIsOpen={setIsOpen} />
        );
      })}
    </motion.ul>
  );
};

const MenuLink = ({
  name,
  path,
  setIsOpen,
}: {
  name: string;
  path: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={menuLinkVariants}
      className='h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2'
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FaArrowRight className='h-[30px] text-sm' />
      </motion.span>
      <Link
        href={path}
        onClick={() => setIsOpen(false)}
        className='hover:-translate-y-8 transition-transform duration-200 ease-in-out'
      >
        <span className='flex items-center h-[30px]'>{name}</span>
        <span className='flex items-center h-[30px] text-primary'>{name}</span>
      </Link>
    </motion.li>
  );
};

export default Navbar;
