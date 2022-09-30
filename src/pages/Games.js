import { Link } from 'react-router-dom';
import React from 'react';

const Games = () => {
  return (
    <div className='max-w-7xl mx-auto text-center py-24'>
      <div className='games-container flex gap-4'>
        <Link
          to='/game-1'
          className='flex flex-col bg-blue-900 items-center justify-center rounded-xl overflow-hidden p-3'>
          <img src='https://dummyimage.com/540x360/fff/aaa' alt='Game 1' />
          <h2 className='mt-3 font-bold text-2xl'>Game 1</h2>
        </Link>
        <Link
          to='/game-2'
          className='flex flex-col bg-blue-900 items-center justify-center rounded-xl overflow-hidden p-3'>
          <img src='https://dummyimage.com/540x360/fff/aaa' alt='Game 1' />
          <h2 className='mt-3 font-bold text-2xl'>Game 2</h2>
        </Link>
        <Link
          to='/game-3'
          className='flex flex-col bg-blue-900 items-center justify-center rounded-xl overflow-hidden p-3'>
          <img src='https://dummyimage.com/540x360/fff/aaa' alt='Game 1' />
          <h2 className='mt-3 font-bold text-2xl'>Game 3</h2>
        </Link>
      </div>
    </div>
  );
};

export default Games;
