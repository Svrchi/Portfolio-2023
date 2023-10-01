import React, { useEffect, useState } from 'react';
import LinkedinURL from './linkedinURL';
import Interest from './interest';
import AboutMe from './aboutMe';
import TopSkills from './topSkills';
import TitleCard from './titleCard';
import Contact from './Contact';
import ContactForm from './ContactForm';

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
  const [showContactForm, SetShowContactForm] = useState(false);

  const toggleForm = () => {
    console.log(showContactForm);
    showContactForm ? SetShowContactForm(false) : SetShowContactForm(true);
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

  if (showContactForm) {
    return (
      <div className='h-screen w-screen bg-opacity-25 bg-slate-500 absolute z-30 bottom-1/4 left-2/4 '>
    <ContactForm />
    </div>
    );
  }

  return (
    <div className='flex h-screen w-screen justify-center border-2 bg-gray-200'>
      <div className='flex h-screen max-w-screen-lg bg-white '>
        <div
          id='column-1'
          className='flex h-screen w-5/12 min-w-[450px] flex-col items-center justify-evenly border pt-12 '
        >
          <TitleCard />
          <Contact toggleForm={toggleForm} />
          <LinkedinURL />
          <Interest />
        </div>
        <div
          id='column-2'
          className='hidden h-screen w-7/12 justify-start border pb-12 md:flex md:flex-col'
        >
          <AboutMe />
          <TopSkills />
        </div>
      </div>
    </div>
  );
};

export default Myspace;
