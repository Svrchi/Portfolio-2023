/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

type Props = {};

const topSkills = (props: Props) => {
  return (
    <div className='min-h-2/5 max-h-2/5 mt-5 flex w-11/12 flex-col'>
      <p className='bg-myspace-orange pl-2 font-medium text-myspace-font-orange'>
        Kevin's Skill Space
      </p>

      {/* skill container */}
      <div className=' flex h-full flex-col'>
        {/* first row */}
        <div className='flex h-1/2 items-center'>
          <div className='flex h-36 w-36 flex-col items-center justify-center border'>
            <p className='text-black'>React</p>
            <Image
              className=''
              src='/React-icon.png'
              width={100}
              height={100}
              alt='React Logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center border'>
            <p className='text-black'>TypeScript</p>
            <Image
              className=''
              src='/Typescript-logo.jpeg'
              width={100}
              height={100}
              alt='TypeScript logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center border'>
            <p className='text-black'>Storybook</p>
            <Image
              className=''
              src='/storybook-logo.png'
              width={100}
              height={100}
              alt='Storybook logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center border'>
            <p className='text-black'>GraphQL</p>
            <Image
              className=''
              src='/GraphQL-logo.png'
              width={100}
              height={100}
              alt='GraphQL Logo'
            />
          </div>
        </div>
        {/* second row */}
        <div className='flex h-1/2 items-center border'>
          <div className='flex h-36 w-36 flex-col items-center justify-center border'>
            <p className='text-black'>Svelte</p>
            <Image
              className=''
              src='/Svelte_logo.png'
              width={80}
              height={0}
              alt='Svelte Logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center border'>
            <p className='text-black'>Next</p>
            <Image
              className=''
              src='/nextjs-icon.png'
              width={100}
              height={100}
              alt='Next.js Logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center border'>
            <p className='text-black'>React</p>
            <Image
              className=''
              src='/React-icon.png'
              width={100}
              height={100}
              alt='react'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center border'>
            <p className='text-black'>Figma</p>
            <Image
              className=''
              src='/Figma-logo.png'
              width={60}
              height={0}
              alt='Figma logo'
            />
          </div>
        </div>
      </div>
      <p className='text-black'>more</p>
    </div>
  );
};

export default topSkills;
