import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const Links = [
    // { name: 'Telescopes', link: '/telescopes' },
    // { name: 'James Webb', link: '/' },
    { name: "Let's Play", link: '/games' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className='px-5 md:px-0 py-5 w-full max-w-5xl mx-auto flex items-center justify-between'>
      <Link to='/' className='flex items-center justify-center gap-4'>
        <img
          className='h-16'
          src='https://res.cloudinary.com/omar45/image/upload/v1664565392/why-webb/LOGO.png'
          alt='WhyWebb Logo'
        />
        <h1 className='logo 4font-bold text-3xl'>Why Webb</h1>
      </Link>

      <div
        onClick={() => setOpen(!open)}
        className='text-3xl cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <ul
        className={`flex flex-col md:flex-row  gap-6 text-xl items-center pb-0 absolute md:static md:bg-transparent bg-black md:z-auto z-[40] left-0 w-full h-screen md:h-auto pt-20 md:pt-0 md:w-auto transition-all duration-300 ease-in ${
          open ? 'top-24' : 'top-[-800px]'
        }`}>
        {Links.map((link) => (
          <Link
            onClick={() => setOpen(false)}
            key={link.name}
            to={link.link}
            className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
