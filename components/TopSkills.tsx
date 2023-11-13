/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

type Props = {};

const TopSkills = (props: Props) => {
  return (
    <div className='mt-2 flex h-fit max-h-fit w-11/12 flex-col'>
      <p className='bg-myspace-orange pl-2 font-medium text-myspace-font-orange'>
        Kevin's Skill Space
      </p>

      {/* skill container */}
      <div className=' mt-1 flex h-full flex-col'>
        {/* first row */}
        <div className='flex h-1/2 items-center'>
          <div className='flex h-36 w-36 flex-col items-center justify-center hover:bg-slate-50'>
            <p className='font-semibold text-myspace-header-blue'>React</p>
            <Image
              className=''
              src='/React-icon.png'
              width={100}
              height={100}
              alt='React Logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center hover:bg-slate-50'>
            <p className='font-semibold text-myspace-header-blue'>TypeScript</p>
            <Image
              className=''
              src='/Typescript-logo.jpeg'
              width={90}
              height={90}
              alt='TypeScript logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center hover:bg-slate-50'>
            <p className='font-semibold text-myspace-header-blue'>Next</p>
            <Image
              className=''
              src='/nextjs-icon.png'
              width={100}
              height={100}
              alt='Next.js logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center hover:bg-slate-50'>
            <p className='font-semibold text-myspace-header-blue'>GraphQL</p>
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
        <div className='flex h-1/2 items-center '>
          <div className='flex h-36 w-36 flex-col items-center justify-center hover:bg-slate-50'>
            <p className='font-semibold text-myspace-header-blue'>Svelte</p>
            <Image
              className=''
              src='/Svelte_logo.png'
              width={80}
              height={0}
              alt='Svelte Logo'
            />
          </div>
          

          <div className='flex h-36 w-36 flex-col items-center justify-center hover:bg-slate-100'>
            <p className='font-semibold text-myspace-header-blue'>Cypress</p>
            <Image
              className=''
              src='/cypressjs.png'
              width={100}
              height={100}
              alt='Cypress.js logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center hover:bg-slate-50'>
            <p className='font-semibold text-myspace-header-blue'>SASS</p>
            <Image
              className=''
              src='/sass.png'
              width={100}
              height={100}
              alt='Sass Logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center hover:bg-slate-50'>
            <p className='font-semibold text-myspace-header-blue'>Figma</p>
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
      {/* <p className='self-end font-bold text-red-600'>view more</p> */}
    </div>
  );
};

export default TopSkills;
