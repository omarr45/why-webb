import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

const Game02 = () => {
  const IMG_PATH =
    'https://res.cloudinary.com/omar45/image/upload/h_800,w_800/v1664543541/why-webb/Jupiter-jwst.jpg';

  const [img1, setImg1] = useState(Math.floor(Math.random() * 10));
  const [img2, setImg2] = useState(Math.floor(Math.random() * 10));
  const [img3, setImg3] = useState(Math.floor(Math.random() * 10));
  const [img4, setImg4] = useState(Math.floor(Math.random() * 10));

  const imag1Ref = useRef();
  const imag2Ref = useRef();
  const imag3Ref = useRef();
  const imag4Ref = useRef();

  const [score, setScore] = useState(0);

  useEffect(() => {
    const val1 = imag1Ref.current.style.left;
    const val2 = imag2Ref.current.style.top;
    const val3 = imag3Ref.current.style.right;
    const val4 = imag4Ref.current.style.bottom;

    if (val1 === val2 && val2 === val3 && val3 === val4) {
      setScore(1);
    } else {
      setScore(0);
    }

    if (score === 1) {
      alert('You Win');
    }
  }, [img1, img2, img3, img4, score]);

  return (
    <div className='max-w-7xl mx-auto text-center py-14'>
      <div className='flex justify-between items-center max-w-4xl  mb-8 mx-auto'>
        <Link
          to='/game-2a'
          className='text-gray-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800'>
          <svg
            style={{ rotate: '180deg' }}
            aria-hidden='true'
            className='mr-2 -ml-1 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'></path>
          </svg>
          Previous Level
        </Link>
        <h2 className='font-bold text-3xl'>Mirror Alignment (LVL 2)</h2>
        <Link
          to='/game-2c'
          type='button'
          className='text-gray-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800'>
          Next Level
          <svg
            aria-hidden='true'
            className='ml-2 -mr-1 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'></path>
          </svg>
        </Link>
      </div>
      <div className='game-wrapper flex items-center justify-center gap-16'>
        {/* Sliders */}
        <div className='sliders flex flex-col gap-6 w-44'>
          <div className='slider'>
            <label
              htmlFor='image01'
              className='block mb-2 text-lg text-left font-semibold text-gray-300'>
              Image 1 &nbsp; <bdi className='text-primary-500'>&#8644;</bdi>
            </label>
            <input
              id='image01'
              type='range'
              min='0'
              max='10'
              value={img1}
              onChange={(e) => setImg1(e.target.value)}
              className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
            />
          </div>
          <div className='slider'>
            <label
              htmlFor='image02'
              className='block mb-2 text-lg text-left font-semibold text-gray-300'>
              Image 2 &nbsp; <bdi className='text-primary-500'>&#8645;</bdi>
            </label>
            <input
              id='image02'
              type='range'
              min='0'
              max='10'
              value={img2}
              onChange={(e) => setImg2(e.target.value)}
              className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
            />
          </div>
          <div className='slider'>
            <label
              htmlFor='image03'
              className='block mb-2 text-lg text-left font-semibold text-gray-300'>
              Image 3 &nbsp; <bdi className='text-primary-500'>&#8644;</bdi>
            </label>
            <input
              id='image03'
              type='range'
              min='0'
              max='10'
              value={img3}
              onChange={(e) => setImg3(e.target.value)}
              className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
            />
          </div>
          <div className='slider'>
            <label
              htmlFor='image04'
              className='block mb-2 text-lg text-left font-semibold text-gray-300'>
              Image 4 &nbsp; <bdi className='text-primary-500'>&#8645;</bdi>
            </label>
            <input
              id='image04'
              type='range'
              min='0'
              max='10'
              value={img4}
              onChange={(e) => setImg4(e.target.value)}
              className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
            />
          </div>
        </div>
        {/* Images Wrapper */}
        <div className='imgs-wrapper relative top-0 left-0 p-5 rounded border-4 border-primary-500'>
          <img
            className={`h-96 mix-blend-lighten absolute`}
            ref={imag1Ref}
            style={{ left: `${8 + img1 * 4}px` }}
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
          <img
            className={`h-96 mix-blend-lighten absolute`}
            ref={imag2Ref}
            style={{ top: `${-8 + img2 * 4}px` }}
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
          <img
            className={`h-96 mix-blend-lighten absolute`}
            ref={imag3Ref}
            style={{ right: `${4 + img3 * 4}px` }}
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
          <img
            className={`h-96 mix-blend-lighten absolute`}
            ref={imag4Ref}
            style={{ bottom: `${0 + img4 * 4}px` }}
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
          <img
            className='h-96 mix-blend-lighten'
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
        </div>
      </div>
    </div>
  );
};

export default Game02;
