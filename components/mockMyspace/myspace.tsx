import React, { useEffect, useState } from 'react';
import LinkedinURL from './linkedinURL';
import Interest from './interest';
import AboutMe from './aboutMe';
import TopSkills from './topSkills';
import TitleCard from './titleCard';
import Contact from './Contact';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

type Props = {};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

// const { height, width } = useWindowDimensions();

const Myspace: React.FC = (props: Props) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleForm = () => {
    console.log(showContactForm);
    setShowContactForm(!showContactForm);
  };
  // Have to resolve issue with window

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { height, width } = useWindowDimensions();
  // console.log(height)
  //   console.log(width)

  // if (width < 600){
  //   return (
  //     <div>
  //       test
  //     </div>

  //   )
  // }

  return (
    <div className='flex h-screen w-screen justify-center bg-gray-200'>
      <div className='flex h-screen max-w-screen-lg bg-white '>
        <div
          id='column-1'
          className='flex h-screen w-5/12 min-w-[450px] flex-col items-center justify-evenly pt-12 '
        >
          <TitleCard />
          <Contact toggleForm={toggleForm} />
          {showContactForm && (
            <motion.div
              className='absolute left-0 top-12 z-20 flex h-screen w-screen items-center justify-center'
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
                        >
              {/* <button
                className='absolute  h-fit w-6 bg-black hover:bg-slate-400 top-[200px] right-[395px]'
                onClick={toggleForm}
              >
                x
              </button> */}
              <ContactForm toggleForm={toggleForm} />{' '}
            </motion.div>
          )}
          <LinkedinURL />
          <Interest />
        </div>
        <div
          id='column-2'
          className='hidden h-screen w-7/12 justify-start border-l-2 pb-12 md:flex md:flex-col'
        >
          <AboutMe />
          <TopSkills />
        </div>
      </div>
    </div>
  );
};

export default Myspace;
