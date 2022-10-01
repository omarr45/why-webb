import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className='p-4 md:p-6 lg:p-8 mx-auto max-w-screen-xl text-center flex flex-col gap-3'>
      <Link to='/' className='flex items-center justify-center gap-4'>
        <img
          className='h-12'
          src='https://res.cloudinary.com/omar45/image/upload/v1664565392/why-webb/LOGO.png'
          alt='WhyWebb Logo'
        />
        <h1 className='logo 4font-bold text-3xl'>Why Webb</h1>
      </Link>
      <p className='text-gray-400'>
        Open-source web application to discover James Webb's potentials
      </p>
      <ul className='flex flex-wrap gap-4 justify-center items-center text-gray-200 dark:text-white'>
        {/* <Link to={'/telescopes'}>Telescopes</Link>- */}
        {/* <Link to={'/'}>James Webb</Link>- */}
        <Link to={'/game'}>Game</Link>-<Link to={'/about-us'}>About Us</Link>
      </ul>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2021-2022 T-00 . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
