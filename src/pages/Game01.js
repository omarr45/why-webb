import React, { useState } from 'react';
import Backdrop from '../components/Backdrop';
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
      <div className='max-w-7xl mx-auto text-center pt-16'>
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
                      class='bi bi-hexagon'
                      viewBox='0 0 16 16'>
                      <path d='M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z' />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className='font-bold text-3xl mb-5'>Which one is JWST's?</h2>
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
