import { Link } from 'react-router-dom';

const Navbar2 = ({ p }) => {
  return (
    <nav className='z-30'>
      <ul className='flex h-20 gap-6 text-xl w-full items-center justify-center font-semibold'>
        <Link
          to={'/telescopes'}
          className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
          Telescopes
        </Link>
        <Link
          to={'james-webb'}
          className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
          James Webb
        </Link>
        <Link
          to={'/games'}
          className='p-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 transition-all'>
          Let's Play
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar2;
