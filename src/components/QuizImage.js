import React, { useState } from 'react';
import Confetti from 'react-confetti';

function QuizImage(props) {
  const [shake, setShake] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const animate = () => {
    if (props.wrong) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        props.click();
      }, 500);
    } else {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
        props.click();
      }, 1000)
    }
  };

  return (
    <>
      {confetti ? <Confetti tweenDuration={1000} gravity={1}/> : null}
      <img
        className='w-full border-white border-4 hover:border-yellow-300'
        onClick={animate}
        alt={props.alt}
        src={props.src}
        style={shake ? { animation: 'shake 1s infinite' } : null}
      />
    </>
  );
}

export default QuizImage;
