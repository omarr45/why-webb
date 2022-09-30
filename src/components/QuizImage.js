import React, { useState } from 'react';

import Confetti from 'react-confetti';

function QuizImage(props) {
  const [shake, setShake] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const animate = () => {
    props.disableGame(true);
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
        <Confetti tweenDuration={1500} recycle={false} gravity={1} />
      ) : null}
      <img
        className='w-96 h-96 object-cover cursor-pointer border-white border-4 hover:border-primary-500'
        onClick={animate}
        alt={props.alt}
        src={props.src}
        style={shake ? { animation: 'shake 0.5s' } : null}
      />
    </>
  );
}

export default QuizImage;