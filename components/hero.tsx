import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BackgroundCircles from './backgroundCircles';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['developer', 'photographer', 'designer'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
      <BackgroundCircles />
      {/* REPLACE IMG WITH IMAGE COMPONENT */}
      <Image
        className='relative mx-auto  rounded-full object-cover'
        src='/jpeg.jpeg'
        width={100}
        height={100}
        alt='selfie'
      />
      <div className='z-20'>
        {/* TRACKING : SPACING BETWEEN  */}
        <h2 className='pb-2 text-xs uppercase tracking-[15px] text-gray-500'>
          software engineer
        </h2>
        <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
          <span className='mr-3'>
            {text}
            <Cursor cursorColor='000000' />
          </span>
        </h1>
        <div className='pt-5'>
          <Link href={'#about'}>
            <button className='heroButton'>About</button>
          </Link>
          <Link href={'#experience'}>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
