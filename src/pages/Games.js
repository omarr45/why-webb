import { Link } from 'react-router-dom';
import React from 'react';

const Games = () => {
  return (
    <div className='max-w-4xl mx-auto text-center py-5 md:py-16 px-6 md:px-3'>
      <div className='games-container grid grid-cols-1 md:grid-cols-2 gap-8 flex-col md:flex-row md:gap-6'>
        <Link
          to='/game-1'
          className='flex flex-col bg-blue-900 items-center justify-center rounded-xl overflow-hidden p-5 md:p-3 md:hover:scale-110 transition-transform shadow-xl'>
          <img
            src='https://res.cloudinary.com/omar45/image/upload/v1664559385/why-webb/Prev1.jpg'
            alt="Which one is JWST's?"
          />
          <h2 className='mt-3 font-bold text-2xl'>Which one is JWST's?</h2>
        </Link>
        <Link
          to='/game-2a'
          className='flex flex-col bg-blue-900 items-center justify-center rounded-xl overflow-hidden p-5 md:p-3 md:hover:scale-110 transition-transform shadow-xl'>
          <img
            src='https://res.cloudinary.com/omar45/image/upload/v1664551444/why-webb/Game2-prev.jpg'
            alt='Align Mirrors'
          />
          <h2 className='mt-3 font-bold text-2xl'>Align Mirrors</h2>
        </Link>
        {/* <Link
          to='/game-3'
          className='flex flex-col bg-blue-900 items-center justify-center rounded-xl overflow-hidden p-5 md:p-3 md:hover:scale-110 transition-transform shadow-xl'>
          <img src='https://dummyimage.com/540x360/fff/aaa' alt='Game 1' />
          <h2 className='mt-3 font-bold text-2xl'>Game 3</h2>
        </Link> */}
      </div>
    </div>
  );
};

export default Games;
