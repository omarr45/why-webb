import React, { useState } from 'react';

import Backdrop from '../components/Backdrop';
import { Link } from 'react-router-dom';
import Question from '../components/Question';

const Game01 = () => {
  const questions = [
    {
      loc: 'IC 5332',
      webb: 'https://live.staticflickr.com/65535/52388530181_646c63f614_c_d.jpg',
      hubble:
        'https://live.staticflickr.com/65535/52391855569_618f578fea_z.jpg',
    },
    {
      loc: 'Neptune',
      webb: 'https://live.staticflickr.com/65535/52373100757_3ebf7f8491_c_d.jpg',
      hubble:
        'https://live.staticflickr.com/65535/50728327821_fbf2c89052_c_d.jpg',
    },
    {
      loc: 'Cartwheel Galaxy',
      webb: 'https://live.staticflickr.com/65535/52258939646_53e094a9d0_c_d.jpg',
      hubble:
        'https://live.staticflickr.com/4648/25981690618_435d2032dd_c_d.jpg',
    },
    {
      loc: 'jupiter',
      webb: 'https://live.staticflickr.com/65535/52303461859_a60beaf88a_c_d.jpg',
      hubble:
        'https://live.staticflickr.com/4280/35568265925_d189e287ca_c_d.jpg',
    },
    {
      loc: 'carina hubble',
      webb: 'https://live.staticflickr.com/65535/52259221868_594d9c744d_c_d.jpg',
      hubble:
        'https://live.staticflickr.com/3290/5737584619_8936860656_c_d.jpg',
    },
  ];
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [backdrop, setBackdrop] = useState(false);

  const answerHandler = (isRight) => {
    const updatedScore = score + isRight;
    setScore(updatedScore);
    if (currentQuestion < questions.length)
      setCurrentQuestion(currentQuestion + 1);
    setBackdrop(false);
  };

  const isFinished = currentQuestion >= questions.length;

  return (
    <>
      <Backdrop show={backdrop} />
      <div className='max-w-4xl mx-auto text-center pt-8 p-3'>
        {isFinished ? (
          <>
            <div className='font-bold text-3xl my-10'>
              <img
                className='w-44 mx-auto'
                src='https://res.cloudinary.com/omar45/image/upload/h_800/v1664558412/why-webb/astro-guy.png'
                alt='Astro dab'
              />
              <p className='my-4'>You Scored</p>
              <div className='flex items-center justify-center mx-auto'>
                {questions.map((q, i) => (
                  <span key={i}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='35'
                      height='35'
                      fill={i < score ? '#f5c400' : 'currentColor'}
                      className='bi bi-hexagon-fill'
                      style={{transform: 'rotate(30deg)'}}
                      viewBox='0 0 16 16'>
                      <path
                        fillRule='evenodd'
                        d='M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z'
                      />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className='font-bold text-3xl mb-8 md:mb-5'>
              Which one is JWST's?
            </h2>
            <div
              className='flex mx-5 text-sm md:text-base md:mx-8 p-4 md:p-6 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 mb-6 text-left'
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
                , JWST differs from past telescopes in that it is more focused
                on the{' '}
                <span className='text-red-700 font-medium'>
                  Infra Red light
                </span>
                , which gives it the ability to see through clouds of dust and
                gas.
                <p className='mt-3 md:mt-1'>
                  This means that JWST can see things that Hubble can't. Can you
                  tell the difference?
                </p>
              </div>
            </div>
            <Question
              disableGame={setBackdrop}
              click={answerHandler}
              {...questions[currentQuestion]}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Game01;
