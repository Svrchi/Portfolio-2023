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
    <div className='flex h-screen min-h-[825px] w-screen justify-center bg-gray-200'>
      { /*
     TODO ----------------------------------- ERROR OVERLAY -----------------------------------
     */}
      {showError && (
        <div className='absolute z-40 flex h-screen min-h-[825px] w-screen justify-center bg-error-overlay'>
          <Error toggleError={toggleError} errorMessage={generalError} />
        </div>
      )}
      { /*
     TODO ----------------------------------- CONTACT FORM OVERLAY -----------------------------------
     */}
      {showContactForm && (
        <div className='absolute z-40 flex h-screen min-h-[825px] w-screen justify-center bg-error-overlay'>
          <ContactForm toggleForm={toggleForm} />
        </div>
      )}
      { /* 
      TODO ----------------------------------- WHITE CONTAINER -----------------------------------
     */}
      <div className='max-h-[850px] w-screen  max-w-screen-lg flex-col bg-white '>
        <MyspaceHeader />
        { /* 
      TODO ----------------------------------- NAVIGATION -----------------------------------
     */}
       { /* 
      TODO ----------------------------------- COLUMN CONTAINER -----------------------------
     */}
        <div className='relative flex h-full top-[-32px]'>
          { /* 
      TODO ----------------------------------- LEFT COLUMN  -----------------------------
     */}
          <div
            id='column-1'
            className='flex min-h-fit w-5/12 flex-col items-center justify-start mt-[32px]'
          >
            <TitleCard />
            <Contact toggleForm={toggleForm} />
            <LinkedinURL/>
            <Interest/>
            
          </div>
          { /* 
      TODO ----------------------------------- RIGHT COLUMN  -----------------------------
     */}
          <div
            id='column-2'
            className='w-7/12 justify-start md:flex md:flex-col mt-[32px] pb-5'
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
