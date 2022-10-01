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

const pieces = [
  {
    title: 'Primary Mirror',
    description:
      '18 hexagonal segments, 21.3 meters in diameter made of beryllium metal and coated with gold to capture faint infrared light.',
    image: 'https://live.staticflickr.com/7330/26544925010_6bd8fc767d_z.jpg',
  },
  {
    title: 'Secondary Mirror',
    description:
      'Reflects gathered light from the primary mirror into the science instruments.',
    image:
      'https://images.indianexpress.com/2022/01/5954655865_9d5b96c6f9_k.jpg',
  },
  {
    title: 'Multilayer sunshield',
    description:
      'Five layers Shield the observatory from the light and heatofthe Sun and Earth.',
    image: 'https://c8.staticflickr.com/3/2934/14753947223_57aef93926_b.jpg',
  },

  {
    title: 'Spacecraft bus',
    description:
      'Contains most of the spacecraft steering and control machin- ery, includlng the computer and the reaction wheels.',
    image: 'https://live.staticflickr.com/958/42277351122_fa15b471cf_b.jpg  ',
  },

  {
    title: 'Solar power array',
    description:
      'Always facing the Sun. panels convert sunlight into elec- tricity to power the observatory.',
    image: 'https://live.staticflickr.com/65535/50541619706_8ddee1176b_z.jpg',
  },
  {
    title: 'Science Instrument (ISIM)',
    description: "Module Houses all Of Webb's cameras and science instruments.",
    image: 'https://live.staticflickr.com/4123/4813352728_1f4dd224f3_z.jpg',
  },
  {
    title: 'Trim flap',
    description: 'Helps stabilize the satellite.',
    image: '',
  },
  {
    title: 'Earth-pointing antenna',
    description:
      "Sends science data back to Earth and receives commands from NASA's Deep Space Network",
    image: '',
  },
  {
    title: 'Star trackers',
    description:
      'Small telescopes that use star patterns to target the observatory.',
    image: '',
  },
  // {
  //   title: '',
  //   description: '',
  //   image: '',
  // },
];
console.log('JW page: no. of pieces: ', pieces.length);
const tooltips = [];
pieces.forEach((piece, i) => {
  piece.id = `${piece.title.replace(' ', '-')}-${i}`;
  tooltips.push(<a href={`#${piece.id}`}>{piece.title}</a>);
});

const ZoomInScrollOut = batch(FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), MoveIn(-900));
const fadeInX = (x) => batch(FadeIn(), MoveIn(x, 0));

const defaultPageStyle = 'flex w-full h-full max-w-5xl mx-auto';

const ComponentPage = ({ data }) => {
  const { title, description, image, id } = data;
  return (
    <ScrollPage>
      <div
        id={id}
        className={`p-6 flex-col md:flex-row gap-8 justify-center md:justify-start text-center md:text-left items-center ${defaultPageStyle}`}>
        <Animator animation={fadeInX(-800)}>
          <img alt={title} className='w-72 object-cover' src={image} />
        </Animator>
        <Animator animation={fadeInX(800)}>
          <div className='w-full max-w-5xl mx-auto'>
            <h1 className='mb-4 text-4xl font-bold'>{title}</h1>
            <p className='text-xl'>{description}</p>
          </div>
        </Animator>
      </div>
    </ScrollPage>
  );
};

const JamesWebb = () => {
  return (
    <>
      <ScrollContainer>
        {/* Image Page */}
        <ScrollPage>
          <div className={`flex justify-center w-full gap-4`}>{tooltips}</div>
          <div className={`text-center justify-center ${defaultPageStyle}`}>
            <img
              className='z-10 rotate-12 webb-image'
              src='https://res.cloudinary.com/omar45/image/upload/h_800,w_800/v1664539020/why-webb/jwst-landing.png'
              alt='James Webb Space Telescope'
            />
          </div>
        </ScrollPage>
        {/* General info page */}
        <ScrollPage>
          <div
            className={`p-6 gap-8 text-center justify-center flex-col ${defaultPageStyle}`}>
            <Animator animation={ZoomInScrollOut}>
              <h1 className='uppercase text-5xl font-bold'>
                The James Webb Space Telescope
              </h1>
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

        <ComponentPage data={pieces[0]} />
        <ComponentPage data={pieces[1]} />
        <ComponentPage data={pieces[2]} />
        <ComponentPage data={pieces[3]} />
        <ComponentPage data={pieces[4]} />
        <ComponentPage data={pieces[5]} />
        <ComponentPage data={pieces[6]} />
        <ComponentPage data={pieces[7]} />
        <ComponentPage data={pieces[8]} />
        {/* <ComponentPage data={pieces[9]} /> */}
      </ScrollContainer>
    </>
  );
};

export default JamesWebb;
