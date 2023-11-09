import React, { useEffect, useState } from 'react';
import LinkedinURL from './LinkedinURL';
import Interest from './Interest';
import AboutMe from './AboutMe';
import TopSkills from './TopSkills';
import TitleCard from './TitleCard';
import Contact from './Contact';
import Error from './Error';
import ContactForm from './ContactForm';
import MyspaceHeader from './MyspaceHeader';
import { motion } from 'framer-motion';

type Props = {};

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  // Default values or fallbacks can be placed here.
  // Adjust them as per your requirements.
  return {
    width: undefined,
    height: undefined,
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
  // error message pop up
  const [showError, setShowError] = useState(true);

  const toggleForm = () => {
    setShowContactForm(!showContactForm);
  };

  const toggleError = () => {
    setShowError(!showError);
  };

  const mobileError: string = 'Mobile coming soon.';
  const generalError: string = 'Website under maintenance.';

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { height, width } = useWindowDimensions();

  // renders nothing if mobile
  if (typeof width !== 'undefined' && width < 600) {
    return (
      <div className='flex items-center justify-center'>
        <Error toggleError={toggleError} errorMessage={mobileError} />
      </div>
    );
  }

  return (
    <div className=' flex h-screen w-screen justify-center bg-gray-200'>
      {showError && (
        <div className='bg-error-overlay absolute z-40 flex h-screen w-screen justify-center '>
          <Error toggleError={toggleError} errorMessage={generalError} />
        </div>
      )}

      <div className='h-screen max-w-screen-lg flex-col bg-white '>
        {/* Header */}
        <MyspaceHeader />
        {/* column 1  */}
        <div className='flex justify-center border  border-black'>
          <div
            id='column-1'
            className='flex h-screen w-5/12 min-w-[450px] flex-col items-center justify-evenly'
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
                <ContactForm toggleForm={toggleForm} />{' '}
              </motion.div>
            )}
            <LinkedinURL />
            <Interest />
          </div>
          <div
            // Column 2
            id='column-2'
            className='hidden h-screen min-h-[780px] w-7/12 justify-start border pb-12 md:flex md:flex-col'
          >
            <AboutMe />
            <TopSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myspace;
