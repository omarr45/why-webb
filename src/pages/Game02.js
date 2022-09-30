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
    <div className='max-w-4xl mx-auto text-center pt-6 md:pt-10 p-4'>
      <div className='flex flex-col p-3 gap-4 md:flex-row justify-between items-center mb-8 mx-auto'>
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
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'></path>
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
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'></path>
          </svg>
        </Link>
      </div>
      <div
        className='flex mx-5 text-sm md:text-base md:mx-4 p-4 md:p-6 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 mb-6 text-left'
        role='alert'>
        <svg
          aria-hidden='true'
          className='flex-shrink-0 inline w-5 h-5 mr-3'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
            clipRule='evenodd'></path>
        </svg>
        <span className='sr-only'>Info</span>
        <div>
          As we learned{' '}
          <Link to={'/james-webb'} className='font-bold hover:underline'>
            earlier
          </Link>
          , JWST's primary mirror consists of 18 hexagonal parts, each part acts
          as a single telescope. So, they need to be aligned to act as one large
          telescope, in order to catch more light and higher resolution images.
          <p className='mt-3 md:mt-1'>
            Can you help engineers at the{' '}
            <a
              href='https://www.nasa.gov/goddard'
              target='_blank'
              rel='noreferrer'
              className='font-bold hover:underline'>
              NASA Goddard Space Flight Center{' '}
            </a>
            align the mirrors?
          </p>
        </div>
      </div>
      <div className='game-wrapper flex flex-col md:flex-row items-center justify-center gap-16'>
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
          <div className='text-white right-5 absolute'></div>
          <img
            className={`h-56 md:h-96 mix-blend-lighten absolute`}
            ref={imag1Ref}
            style={{ left: `${8 + img1 * 4}px` }}
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
          <img
            className={`h-56 md:h-96 mix-blend-lighten absolute`}
            ref={imag2Ref}
            style={{ top: `${-8 + img2 * 4}px` }}
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
          <img
            className={`h-56 md:h-96 mix-blend-lighten absolute`}
            ref={imag3Ref}
            style={{ right: `${4 + img3 * 4}px` }}
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
          <img
            className={`h-56 md:h-96 mix-blend-lighten absolute`}
            ref={imag4Ref}
            style={{ bottom: `${0 + img4 * 4}px` }}
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
          <img
            className='h-56 md:h-96 mix-blend-lighten'
            src={IMG_PATH}
            alt='Jpyter photographed by JWST'
          />
        </div>
      </div>
      <section className='mt-7 bg-opacity-20 rounded-lg bg-primary-600 flex flex-col gap-1 p-3'>
        <div className='line'>
          <bdi className='font-semibold'>In the photo: </bdi>Jupiter and it's
          moon Europa
        </div>
        <div className='line'>
          <bdi className='font-semibold'>Captured with: </bdi>NIRCam instrument
        </div>
        <div className='line'>
          <bdi className='font-semibold'>Read more: </bdi>
          <a
            href='https://blogs.nasa.gov/webb/2022/07/14/webb-images-of-jupiter-and-more-now-available-in-commissioning-data/'
            target='_blank'
            rel='noreferrer'
            className='text-primary-500 hover:underline underline-offset-2'>
            NASA Blogs
          </a>
        </div>
      </section>
    </div>
  );
};

export default Game02;
