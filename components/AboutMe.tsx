/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutMe = () => {
  return (
    <div className='mt-6 flex h-1/2 w-11/12 flex-col justify-evenly '>
      <div className='flex min-h-[80px] items-center justify-center border-2 border-black font-black'>
        <p className='text-black'>Kevin is in your extended network</p>
      </div>

      <div className='mt-2'>
        <p className='bg-myspace-orange pl-2 text-myspace-font-orange'>
          Kevin's blurbs
        </p>
        <p className=' pl-2 text-myspace-font-orange'>About me:</p>

        <p className='pl-2 pr-2 text-sm text-black'>
          I’m a full-stack developer with a primary focus on front-end
          technologies like React. Most recently I launched a product Svelte
          Storm through a tech accelerator OS Labs. If you're not familiar with
          Svelte, it’s similar to React in that it is a frontend technology but
          differs mainly in the fact that svelte is a compiler and not a
          library. Since the programming landscape is ever-changing and
          constantly progressing my team and I decided to dive into this newer
          piece of tech while giving other curious developers an easier way to
          explore svelte by building an IDE with built-in tooling like state
          management. Since its launch Svelte Storm has garnered over 500 stars
          on Github and was received well by the community.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
