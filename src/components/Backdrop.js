import React from 'react';

function Backdrop(props) {
  return props.show ? (
    <div className='bg-black opacity-50 absolute top-0 left-0 z-10 w-full h-full'>{props.children}</div>
  ) : null;
}

export default Backdrop;