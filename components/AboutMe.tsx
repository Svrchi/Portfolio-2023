/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutMe = () => {
  return (
    <div className='pt-2 flex h-[58%] max-h-[500px] min-h-fit w-11/12 flex-col justify-evenly border border-red-500'>
      <div className='flex min-h-[80px] items-center justify-center border-2 border-black font-black'>
        <p className='text-black'>Kevin is in your extended network</p>
      </div>

      <div className='mt-2'>
        <p className='bg-myspace-orange pl-2 text-myspace-font-orange'>
          Kevin's blurbs
        </p>
        <p className='mt-1 pl-2 text-myspace-font-orange'>About me:</p>

        <p className='mb-1 pl-2 pr-2 text-sm text-black'>
          Hello! I’m a full-stack developer with a strong focus on front-end
          technologies, particularly React. A couple of years back, I launched
          Svelte Storm–a Svelte native IDE, under the guidance of the tech
          accelerator OS Labs. This project happened before Svelte garnered
          support from Vercel, so the framework was still in its infancy.
          Nonetheless, it was a fun and exciting experience creating a tool for
          other curious developers like myself. Since its inception, Svelte
          Storm has undergone several iterations and has accumulated over 900
          GitHub stars. After Svelte Storm I took on a role as a software
          engineer at Hearst Media, specifically within their newspaper division
          where I played a role in migrating from a PHP-based legacy codebase to
          a modern tech stack, creating and integrating new components across
          over 60 platforms. Outside of coding, I find joy in photography and
          experimenting with my collection of cameras. I’ve attached some of my
          photographs around here; feel free to take a look! Thanks for dropping
          by, and I hope we get to connect soon!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
