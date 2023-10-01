import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './experienceCard';

type Props = {};

const experience = (props: Props) => {
  return (
    <motion.div className=' relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500 '>
        {' '}
        Experience{' '}
      </h3>
      <div className='snap mt-10 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10  '>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        {/*  */}
        {/*  */}
      </div>
    </motion.div>
  );
};

export default experience;
