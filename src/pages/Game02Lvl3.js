import React, { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';

import { Link } from 'react-router-dom';

const Game02 = () => {
  const IMG_PATH =
    'https://res.cloudinary.com/omar45/image/upload/h_800,w_800/v1664555276/why-webb/jupyter-standalone.jpg';

  const [img1, setImg1] = useState(Math.floor(Math.random() * 10));
  const [img2, setImg2] = useState(Math.floor(Math.random() * 10));
  const [img3, setImg3] = useState(Math.floor(Math.random() * 10));
  const [img4, setImg4] = useState(Math.floor(Math.random() * 10));

  const [img1Opp, setImg1Opp] = useState(Math.floor(Math.random() * 10));
  const [img2Opp, setImg2Opp] = useState(Math.floor(Math.random() * 10));
  const [img3Opp, setImg3Opp] = useState(Math.floor(Math.random() * 10));
  const [img4Opp, setImg4Opp] = useState(Math.floor(Math.random() * 10));

  const imag1Ref = useRef();
  const imag2Ref = useRef();
  const imag3Ref = useRef();
  const imag4Ref = useRef();

  const [score, setScore] = useState(0);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const val1Left = imag1Ref.current.style.left;
    const val2Left = imag2Ref.current.style.left;
    const val3Left = imag3Ref.current.style.left;
    const val4Left = imag4Ref.current.style.left;

    const val1Top = imag1Ref.current.style.top;
    const val2Top = imag2Ref.current.style.top;
    const val3Top = imag3Ref.current.style.top;
    const val4Top = imag4Ref.current.style.top;

    // console.log(val1Left, val2Left, val3Left, val4Left);
    // console.log(val1Top, val2Top, val3Top, val4Top);

    if (
      val1Left === val2Left &&
      val2Left === val3Left &&
      val3Left === val4Left &&
      val1Top === val2Top &&
      val2Top === val3Top &&
      val3Top === val4Top
    ) {
      setScore(1);
    } else {
      setScore(0);
    }

    if (score === 1) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 1800);
    }
  }, [
    img1,
    img1Opp,
    img2,
    img2Opp,
    img3,
    img3Opp,
    img4,
    img4Opp,
    imag1Ref,
    imag2Ref,
    imag3Ref,
    imag4Ref,
    score,
  ]);

  return (
    <>
      {confetti ? (
        <div className='fixed top-0 left-0 h-full w-full z-50'>
          <Confetti
            colors={['#ffce00', '#003099', '#802020']}
            tweenDuration={1500}
            recycle={false}
            gravity={1}
          />
        </div>
      ) : null}
      <div className='max-w-4xl mx-auto text-center pt-6 md:pt-10 px-4'>
        <div className='flex flex-col md:flex-row p-3 gap-4 justify-between items-center mb-8 mx-auto'>
          <Link
            to='/game-2'
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
          <h2 className='font-bold text-3xl'>Mirror Alignment (LVL 3)</h2>
          <Link
            to='/game-2c'
            type='button'
            className='cursor-not-allowed text-gray-600 border-2 border-gray-700 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-black font-semibold'>
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
            , JWST's primary mirror consists of 18 hexagonal parts, each part
            acts as a single telescope. So, they need to be aligned to act as
            one large telescope, in order to catch more light and higher
            resolution images.
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
                Image 1
              </label>
              <p className='flex items-center justify-center gap-4 text-primary-500'>
                &#8644;
                <input
                  id='image01'
                  type='range'
                  min='0'
                  max='10'
                  value={img1}
                  onChange={(e) => setImg1(e.target.value)}
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
                />
              </p>
              <p className='flex items-center justify-center gap-4 text-primary-500'>
                &#8645;
                <input
                  id='image01'
                  type='range'
                  min='0'
                  max='10'
                  value={img1Opp}
                  onChange={(e) => setImg1Opp(e.target.value)}
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
                />
              </p>
            </div>
            <div className='slider'>
              <label
                htmlFor='image02'
                className='block mb-2 text-lg text-left font-semibold text-gray-300'>
                Image 2
              </label>
              <p className='flex items-center justify-center gap-4 text-primary-500'>
                &#8644;
                <input
                  id='image02'
                  type='range'
                  min='0'
                  max='10'
                  value={img2}
                  onChange={(e) => setImg2(e.target.value)}
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
                />
              </p>
              <p className='flex items-center justify-center gap-4 text-primary-500'>
                &#8645;
                <input
                  id='image02'
                  type='range'
                  min='0'
                  max='10'
                  value={img2Opp}
                  onChange={(e) => setImg2Opp(e.target.value)}
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
                />
              </p>
            </div>
            <div className='slider'>
              <label
                htmlFor='image03'
                className='block mb-2 text-lg text-left font-semibold text-gray-300'>
                Image 3
              </label>
              <p className='flex items-center justify-center gap-4 text-primary-500'>
                &#8644;
                <input
                  id='image03'
                  type='range'
                  min='0'
                  max='10'
                  value={img3}
                  onChange={(e) => setImg3(e.target.value)}
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
                />
              </p>
              <p className='flex items-center justify-center gap-4 text-primary-500'>
                &#8645;
                <input
                  id='image03'
                  type='range'
                  min='0'
                  max='10'
                  value={img3Opp}
                  onChange={(e) => setImg3Opp(e.target.value)}
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
                />
              </p>
            </div>
            <div className='slider'>
              <label
                htmlFor='image04'
                className='block mb-2 text-lg text-left font-semibold text-gray-300'>
                Image 4
              </label>
              <p className='flex items-center justify-center gap-4 text-primary-500'>
                &#8644;
                <input
                  id='image04'
                  type='range'
                  min='0'
                  max='10'
                  value={img4}
                  onChange={(e) => setImg4(e.target.value)}
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
                />
              </p>
              <p className='flex items-center justify-center gap-4 text-primary-500'>
                &#8645;
                <input
                  id='image04'
                  type='range'
                  min='0'
                  max='10'
                  value={img4Opp}
                  onChange={(e) => setImg4Opp(e.target.value)}
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
                />
              </p>
            </div>
          </div>
          {/* Images Wrapper */}
          <div className='imgs-wrapper relative top-0 left-0 p-5 rounded border-4 border-primary-500'>
            <img
              className={`h-56 md:h-96 mix-blend-lighten absolute`}
              ref={imag1Ref}
              style={{ left: `${8 + img1 * 4}px`, top: `${0 + img1Opp * 4}px` }}
              src={IMG_PATH}
              alt='Jpyter photographed by JWST'
            />
            <img
              className={`h-56 md:h-96 mix-blend-lighten absolute`}
              ref={imag2Ref}
              style={{
                left: `${-8 + img2 * 4}px`,
                top: `${8 + img2Opp * 4}px`,
              }}
              src={IMG_PATH}
              alt='Jpyter photographed by JWST'
            />
            <img
              className={`h-56 md:h-96 mix-blend-lighten absolute`}
              ref={imag3Ref}
              style={{
                left: `${4 + img3 * 4}px`,
                top: `${-8 + img3Opp * 4}px`,
              }}
              src={IMG_PATH}
              alt='Jpyter photographed by JWST'
            />
            <img
              className={`h-56 md:h-96 mix-blend-lighten absolute`}
              ref={imag4Ref}
              style={{ left: `${0 + img4 * 4}px`, top: `${4 + img4Opp * 4}px` }}
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
            <bdi className='font-semibold'>In the photo: </bdi>Jupiter's Auroras
          </div>
          <div className='line'>
            <bdi className='font-semibold'>Captured with: </bdi>NIRCam
            instrument
          </div>
          <div className='line'>
            <bdi className='font-semibold'>Read more: </bdi>
            <a
              href='https://blogs.nasa.gov/webb/2022/08/22/webbs-jupiter-images-showcase-auroras-hazes/'
              target='_blank'
              rel='noreferrer'
              className='text-primary-500 hover:underline underline-offset-2'>
              NASA Blogs
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Game02;
