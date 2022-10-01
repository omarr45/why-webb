import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className='p-4 md:p-8 lg:p-10 bg-black'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <p className='my-6 text-gray-400'>
          Open-source web application to discover James Webb's potentials
        </p>
        <ul className='flex flex-wrap gap-4 justify-center items-center mb-6 text-gray-200 dark:text-white'>
          <Link to={'/telescopes'}>Telescopes</Link>
          <Link to={'/'}>James Webb</Link>
          <Link to={'/game'}>Game</Link>
          <Link to={'/about-us'}>About Us</Link>
        </ul>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2021-2022 T-00 . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
