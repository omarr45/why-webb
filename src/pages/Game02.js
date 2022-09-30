import React from 'react';

const Game02 = () => {
  return (
    <div className='max-w-7xl mx-auto text-center py-24'>
      <h2 className='font-bold text-3xl'>Mirror Alignment</h2>
      <div className='game-wrapper flex items-center justify-center'>
        <div className='sliders bg-amber-200'>
          <div className='slider'>
            <input
              type='range'
              min='1'
              max='100'
              value='50'
              class='slider'
              id='myRange'
            />
          </div>
        </div>
        <div className='imgs relative'>
          <img
            className='absolute top-0 left-0 h-28'
            src='https://res.cloudinary.com/omar45/image/upload/h_800,w_800/v1664543541/why-webb/Jupiter-jwst.jpg'
            alt='Jpyter photographed by JWST'
          />
        </div>
      </div>
    </div>
  );
};

export default Game02;
