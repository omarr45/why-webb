import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className='px-3 md:px-0 py-5 w-full max-w-4xl mx-auto flex items-center justify-between'>
      <Link to='/james-webb' className='flex items-center justify-center gap-4'>
        <img
          className='h-16'
          src='https://res.cloudinary.com/omar45/image/upload/v1664565392/why-webb/LOGO.png'
          alt='WhyWebb Logo'
        />
        <h1 className='logo 4font-bold text-3xl'>Why Webb</h1>
      </Link>
      <ul className='hidden md:flex gap-6 text-xl items-center justify-center font-semibold'>
        <Link
          to={'/telescopes'}
          className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
          Telescopes
        </Link>
        <Link
          to={'/james-webb'}
          className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
          James Webb
        </Link>
        <Link
          to={'/games'}
          className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
          Let's Play
        </Link>
      </ul>
      <button className='block md:hidden py-3 px-4 mx-2 rounded focus:ouline-none hover:bg-white hover:bg-opacity-25 group'>
        <div className='w-6 h-1 bg-white mb-1 rounded'></div>
        <div className='w-6 h-1 bg-white mb-1 rounded'></div>
        <div className='w-6 h-1 bg-white rounded'></div>
        <div
          className='absolute top-0 -right-full h-screen w-full bg-black opacity-0 transform
        group-focus:right-0 group-focus:opacity-100 transition-all duration-500'>
          <ul className='flex flex-col gap-8 items-center justify-center font-semibold mt-16 text-base cursor-pointer pt-10'>
            <Link
              to={'/telescopes'}
              className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
              Telescopes
            </Link>
            <Link
              to={'/james-webb'}
              className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
              James Webb
            </Link>
            <Link
              to={'/games'}
              className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
              Let's Play
            </Link>
          </ul>
        </div>
      </button>
    </nav>
  );
};

export default Navbar2;
