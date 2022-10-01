import {
  Animator,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  ZoomIn,
  batch,
} from 'react-scroll-motion';

const pieces = [
  {
    title: 'Primary Mirror',
    description:
      "Consisting of 18 hexagonal segments, JWST's primary mirror is the largest and most complex optical element ever built with a final mirror of diameter 6.5 meters. (For scale, Hubble had just a 2.4 meters mirror)",
    description2:
      'Each segment is 1.32 meters wide and weighs approximately 20 kg. The segments are made of beryllium, a lightweight, strong, and stiff material that is also transparent to infrared light. The mirror segments are coated with a thin layer of gold to reflect infrared light.',
    image: 'https://live.staticflickr.com/7330/26544925010_6bd8fc767d_z.jpg',
    image2: 'http://live.staticflickr.com/4179/34537748622_dbf260f384_c.jpg',
  },
  {
    title: 'Secondary Mirror',
    description:
      "The Secondary mirror's main usage is reflecting the light from the primary mirror to the science instruments to get processed.",
    description2:
      'The secondary mirror is 0.74 meters in diameter, Here is a diagram that traces the light path from the stars through the telescope.',
    image:
      'https://images.indianexpress.com/2022/01/5954655865_9d5b96c6f9_k.jpg',
    image2:
      'https://res.cloudinary.com/omar45/image/upload/v1664603928/why-webb/Cropped_a8wgje.png',
  },
  {
    title: 'ISIM',
    description:
      'Integrated Science Instrument Module (ISIM) is the heart of the telescope. It contains the instruments that will be used to study the universe.',
    description2:
      "It consists of 4 main parts, Near Infrared Camera (NIRCam), Near Infrared Spectrograph (NIRSpec), Near Infrared Imager and Slitless Spectrograph (NIRISS), and Mid-Infrared Instrument (MIRI). Let's take a look at each one of them.",
    image:
      'https://cdn.sci.esa.int/documents/34594/35357/1567216025463-JWST_ISIM_after_cryogenic_testing_2014_625.jpg',
    image2:
      'https://cdn.sci.esa.int/documents/34594/35357/1567217288750-isim2_fromnasa_410.jpg',
  },
  {
    title: 'Sunshield',
    hot: true,
    description:
      'As JWST is focused towards the IR wavelengths, it must avoid any heat in order to get the most accurate results. To achieve that coldness and (hide) from the sun, a five-layers shield was added to protect the telescope from the light and heat of the Sun and Earth.',
    image: 'https://c8.staticflickr.com/3/2934/14753947223_57aef93926_b.jpg',
  },
  {
    hot: true,

    title: 'Spacecraft bus',
    description:
      'Contains most of the spacecraft steering and control machinery, includlng the computer and the reaction wheels. It also conatins the thrusters that will be used to move the telescope in space.',
    image: 'https://live.staticflickr.com/958/42277351122_fa15b471cf_b.jpg  ',
  },
  {
    hot: true,
    title: 'Solar power array',
    description:
      'Always facing the Sun. panels convert sunlight into electricity to power the telescope and all of its instruments.',
    image: 'https://live.staticflickr.com/65535/50541619706_8ddee1176b_z.jpg',
  },
];

const FadeUp = batch(Fade(), MoveIn(-900));
const FadeDown = batch(Fade(), MoveIn(900));
const fadeInX = (x) => batch(FadeIn(), MoveIn(x, 0));

const defaultPageStyle = 'flex w-full max-w-4xl h-full mx-auto';

const ComponentPage = ({ data }) => {
  const { title, description, description2, image, id, image2, hot } = data;
  return (
    <ScrollPage key={id}>
      <div
        id={id}
        className={`p-6 flex-col gap-4 md:gap-8 justify-center text-center md:text-left items-center ${defaultPageStyle}`}>
        <Animator animation={batch(ZoomIn(10), Fade())}>
          <div
            className={
              hot
                ? 'flex items-center justify-center -hue-rotate-180'
                : 'flex items-center justify-center'
            }>
            <img
              className='hidden md:block w-48 h-24 opacity-70'
              src='https://res.cloudinary.com/omar45/image/upload/v1664604441/why-webb/hex-lf_ijardn.png'
              alt='hex deco'
            />
            <h1 className='mb-4 text-3xl font-bold '>{title}</h1>
            <img
              className='hidden md:block w-48 h-24 opacity-70'
              src='https://res.cloudinary.com/omar45/image/upload/v1664604441/why-webb/hex-rt_lbdeom.png'
              alt='hex deco'
            />
          </div>
        </Animator>
        <div className='flex items-center justify-between gap-2 md:gap-8 flex-col md:flex-row'>
          <div className='w-2/3 mx-auto'>
            <Animator animation={fadeInX(-800)}>
              <img
                alt={title}
                className='h-32 md:h-auto object-cover mx-auto'
                src={image}
              />
            </Animator>
          </div>
          <Animator animation={fadeInX(800)}>
            <div className='w-full max-w-5xl mx-auto'>
              <p className='text-sm md:text-xl'>{description}</p>
            </div>
          </Animator>
        </div>
        <div className='flex items-center justify-between gap-2 md:gap-8 flex-col-reverse md:flex-row'>
          {description2 && (
            <Animator animation={fadeInX(-800)}>
              <div className='w-full max-w-5xl mx-auto'>
                <p className='text-sm md:text-xl'>{description2}</p>
              </div>
            </Animator>
          )}
          {image2 && (
            <div
              className={
                image2 ===
                'https://res.cloudinary.com/omar45/image/upload/v1664603928/why-webb/Cropped_a8wgje.png'
                  ? 'md:w-5/6'
                  : 'md:w-2/3'
              }>
              <Animator animation={fadeInX(800)}>
                <img
                  alt={title}
                  className='h-32 md:h-auto object-cover mx-auto'
                  src={image2}
                />
              </Animator>
            </div>
          )}
        </div>
      </div>
    </ScrollPage>
  );
};

const JamesWebb = () => {
  return (
    <main className='w-full mx-auto text-2xl'>
      <ScrollContainer>
        {/* Image Page */}
        <ScrollPage>
          <div
            className={`max-w-4xl py-[-40px] gap-12 text-center justify-center flex-col ${defaultPageStyle}`}>
            <img
              className='z-10 webb-image mx-auto max-w-full w-96 md:w-[600px] p-6'
              src='https://res.cloudinary.com/omar45/image/upload/h_800,w_800/v1664539020/why-webb/jwst-landing.png'
              alt='James Webb Space Telescope'
            />
          </div>
        </ScrollPage>
        {/* General info page */}
        <ScrollPage>
          <div
            className={`max-w-4xl p-6 gap-12 text-center justify-center flex-col ${defaultPageStyle}`}>
            <Animator animation={batch(ZoomIn(5), Fade())}>
              <h1 className='uppercase text-5xl font-bold'>
                The James Webb Space Telescope
              </h1>
            </Animator>
            <Animator animation={FadeUp}>
              <p className='text-2xl'>
                The James Webb Space Telescope (JWST) is a space telescope that
                was launched in October 2021. It is the successor to the Hubble
                Space Telescope and is expected to be 100 times more powerful.
              </p>
            </Animator>
            <Animator animation={FadeDown}>
              <p className='text-2xl font-semibold text-primary-500'>
                Don't you want to learn more about it's amazing capabilities?
              </p>
            </Animator>
            <Animator animation={batch(ZoomIn(5), Fade())}>
              <svg
                className='mx-auto'
                xmlns='http://www.w3.org/2000/svg'
                width='62'
                height='62'
                viewBox='0 0 32 32'>
                <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                  <g fill='white' transform='translate(-414 -1089)'>
                    <path d='M436.535 1105.88l-5.656 5.66a.962.962 0 01-.879.25.962.962 0 01-.879-.25l-5.656-5.66a1.006 1.006 0 010-1.42 1 1 0 011.414 0l4.121 4.13V1098a1.001 1.001 0 012 0v10.59l4.121-4.13a1 1 0 011.414 0c.391.4.391 1.03 0 1.42zM430 1089c-8.837 0-16 7.16-16 16s7.163 16 16 16 16-7.16 16-16-7.163-16-16-16z'></path>
                  </g>
                </g>
              </svg>
            </Animator>
          </div>
        </ScrollPage>
        {/* each component in jwst page */}

        <ScrollPage>
          <div
            className={`text-center mx-auto flex gap-8 max-w-4xl p-6 justify-center flex-col ${defaultPageStyle}`}>
            <Animator animation={Fade()}>
              <h2 className='text-3xl'>You may be wondering,</h2>
            </Animator>
            <Animator animation={batch(MoveIn(-1000, 0), MoveOut(1000, 0))}>
              <h4 className='py-4 rotate-[-3deg] font-bold text-4xl bg-blue-900 w-full banner'>
                Why does this telescope{' '}
                <span className='text-primary-500'>look nothing like</span> any
                other past telescope?
              </h4>
            </Animator>
            <Animator animation={batch(MoveIn(1000, 0), MoveOut(-1000, 0))}>
              <h4 className='py-4 rotate-[5deg] font-bold text-4xl bg-primary-700 w-full banner banner-top'>
                What about this <span className='text-black'>HUGE</span>{' '}
                hexagonal thing?
              </h4>
            </Animator>
            <Animator animation={batch(Fade(), MoveOut(0, 150))}>
              <h4 className='text-3xl mt-4'>
                Let's figure out the role of each part in JWST
              </h4>
            </Animator>
          </div>
        </ScrollPage>

        <ScrollPage>
          <div
            className={`text-center flex-col gap-4 justify-center ${defaultPageStyle}`}>
            <Animator animation={Fade()}>
              <h2 className='text-2xl'>
                JWST can be divided into two main sides
              </h2>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(-100, 0))}>
              <h4 className='font-bold'>
                <span className='text-blue-700'>Cold</span> Side &{' '}
                <span className='text-red-700'>Hot</span> Side
              </h4>
            </Animator>
            <Animator
              animation={batch(Fade(), MoveIn(100, 0), MoveOut(-100, 0))}>
              <img
                src='https://scitechdaily.com/images/Webb-Telescope-Spacecraft-Hot-Cold-Diagram.jpg'
                alt='JWST cold vs warm'
                className='mx-auto'
              />
            </Animator>
            <Animator animation={batch(Fade(), ZoomIn())}>
              <h4>Let's dive deeper into each one</h4>
            </Animator>
          </div>
        </ScrollPage>

        <ComponentPage data={pieces[0]} />
        <ComponentPage data={pieces[1]} />
        <ComponentPage data={pieces[2]} />
        <ComponentPage data={pieces[3]} />
        <ComponentPage data={pieces[4]} />
        <ComponentPage data={pieces[5]} />
      </ScrollContainer>
    </main>
  );
};

export default JamesWebb;
