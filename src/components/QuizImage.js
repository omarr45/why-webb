import React, { useState } from 'react';

import Confetti from 'react-confetti';

function QuizImage(props) {
  const [shake, setShake] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const animate = (el) => {
    props.disableGame(true);
    console.log(el.target);
    if (props.wrong) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        props.click();
      }, 1000);
    } else {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
        props.click();
      }, 1800);
    }
  };

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
      <img
        className='h-56 md:h-96 w-56 md:w-96 object-cover cursor-pointer border-white border-4 md:hover:border-primary-500  '
        onClick={(e) => animate(e)}
        alt={props.alt}
        src={props.src}
        style={shake ? { animation: 'shake 0.5s' } : null}
      />
    </>
  );
}

export default QuizImage;
