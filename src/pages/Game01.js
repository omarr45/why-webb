import React, { useState } from 'react';
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

  const answerHandler = (isRight) => {
    const updatedScore = score + isRight;
    setScore(updatedScore);
    if (currentQuestion < questions.length)
      setCurrentQuestion(currentQuestion + 1);
  };

  const isFinished = currentQuestion >= questions.length;

  return (
    <div className='max-w-7xl mx-auto text-center py-24'>
      {isFinished ? (
        <>
          <p className='text-4xl'>Game Over</p>
          <p className='text-3xl'>
            You scored {score} out of {questions.length}
          </p>
        </>
      ) : (
        <>
          <p className='mb-10 text-4xl'>Guess which is the webb image</p>
          <Question click={answerHandler} {...questions[currentQuestion]} />;
        </>
      )}
    </div>
  );
};

export default Game01;
