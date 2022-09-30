import QuizImage from './QuizImage';
import React from 'react';

function Question(props) {
  const shuffled = [
    <QuizImage
      key='webb'
      click={() => props.click(1)}
      alt={props.loc}
      src={props.webb}
			disableGame={props.disableGame}
			/>,
			<QuizImage
      key='hubble'
      click={() => props.click(0)}
      alt={props.loc}
      src={props.hubble}
			disableGame={props.disableGame}
			wrong
    />,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className='flex gap-10 items-center justify-center'>{shuffled}</div>
  );
}

export default React.memo(Question, (prevProps, nextProps) => prevProps.loc === nextProps.loc);
