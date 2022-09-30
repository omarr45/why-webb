import React, { useEffect } from 'react';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';

const fadeInXInfoRow = () => {};

const jwstMirrorImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAD4yC_3HINz79h5qn7AkOv6QonFzcKp7HA&usqp=CAU';

const ZoomInScrollOut = batch(FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), MoveIn(-900));
const fadeInX = (x) => batch(FadeIn(), MoveIn(x, 0));

const defaultPageStyle = 'flex justify-center w-full h-full max-w-6xl mx-auto';

const ComponentPage = () => (
  <ScrollPage>
    <div className={`items-center ${defaultPageStyle}`}>
      <Animator animation={fadeInX(-800)}>
        <img src={jwstMirrorImg} />
      </Animator>
      <Animator animation={fadeInX(800)}>
        <div id='shit' className='w-full max-w-6xl mx-auto'>
          <h1 className='text-5xl font-bold'>James Webb Space Telescope</h1>
          <p className='text-2xl'>
            The James Webb Space Telescope (JWST) is a space telescope that is
            planned to be launched in October 2021. It is the successor to the
            Hubble Space Telescope and is expected to be 100 times more
            powerful. It will be able to see further into the universe than ever
            before.
          </p>
        </div>
      </Animator>
    </div>
  </ScrollPage>
);

const JamesWebb = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollBy({ top: 100 });
    }, 1000);
  }, []);
  return (
    <>
      <ScrollContainer>
        {/* Image Page */}
        <ScrollPage>
          <a href='#shit'> blez</a>
          <div className={`text-center ${defaultPageStyle}`}>
            <img
              className='z-10 mx-auto rotate-12 webb-image'
              src='https://res.cloudinary.com/omar45/image/upload/h_800,w_800/v1664539020/why-webb/jwst-landing.png'
              alt='James Webb Space Telescope'
            />
          </div>
        </ScrollPage>
        {/* General info page */}
        <ScrollPage>
          <div
            className={`bg-green-900 text-center flex-col ${defaultPageStyle}`}>
            <Animator animation={ZoomInScrollOut}>
              <h1 className='text-5xl font-bold'>James Webb Space Telescope</h1>
            </Animator>
            <Animator animation={FadeUp}>
              <p className='text-2xl'>
                The James Webb Space Telescope (JWST) is a space telescope that
                is planned to be launched in October 2021. It is the successor
                to the Hubble Space Telescope and is expected to be 100 times
                more powerful. It will be able to see further into the universe
                than eve
              </p>
            </Animator>
          </div>
        </ScrollPage>
        {/* each component in jwst page */}
        <ComponentPage />
      </ScrollContainer>
      {/* <ScrollPage></ScrollPage> */}
    </>
  );
};

export default JamesWebb;
