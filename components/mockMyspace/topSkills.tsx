/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

type Props = {};

const topSkills = (props: Props) => {
  return (
    <div className='min-h-2/5 max-h-2/5 mt-5 flex w-11/12 flex-col border-blue-600 border'>
      <p className='bg-myspace-orange pl-2 font-medium text-myspace-font-orange'>
        Kevin's Skill Space
      </p>

      {/* skill container */}
      <div className=' flex h-full flex-col'>
        {/* first row */}
        <div className='flex h-1/2 items-center'>
          <div className='flex h-36 w-36 flex-col items-center justify-center '>
            <p className='text-myspace-header-blue font-semibold'>React</p>
            <Image
              className=''
              src='/React-icon.png'
              width={100}
              height={100}
              alt='React Logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center '>
            <p className='text-myspace-header-blue font-semibold'>TypeScript</p>
            <Image
              className=''
              src='/Typescript-logo.jpeg'
              width={100}
              height={100}
              alt='TypeScript logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center '>
            <p className='text-myspace-header-blue font-semibold'>Storybook</p>
            <Image
              className=''
              src='/storybook-logo.png'
              width={100}
              height={100}
              alt='Storybook logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center '>
            <p className='text-myspace-header-blue font-semibold'>GraphQL</p>
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
          <div className='flex h-36 w-36 flex-col items-center justify-center '>
            <p className='text-myspace-header-blue font-semibold'>Svelte</p>
            <Image
              className=''
              src='/Svelte_logo.png'
              width={80}
              height={0}
              alt='Svelte Logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center '>
            <p className='text-myspace-header-blue font-semibold'>Next</p>
            <Image
              className=''
              src='/nextjs-icon.png'
              width={100}
              height={100}
              alt='Next.js Logo'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center '>
            <p className='text-myspace-header-blue font-semibold'>React</p>
            <Image
              className=''
              src='/React-icon.png'
              width={100}
              height={100}
              alt='react'
            />
          </div>
          <div className='flex h-36 w-36 flex-col items-center justify-center '>
            <p className='text-myspace-header-blue font-semibold'>Figma</p>
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
      <p className='text-red-600 font-bold self-end'>view more</p>
    </div>
  );
};

export default topSkills;

// import React from 'react';
// import Image from 'next/image';

// const Skill: React.FC<{ name: string; imageSrc: string }> = ({ name, imageSrc }) => (
//   <div className='flex h-36 w-36 flex-col items-center justify-center'>
//     <p className='text-myspace-header-blue font-semibold'>{name}</p>
//     <Image src={imageSrc} width={100} height={100} alt={`${name} Logo`} />
//   </div>
// );

// const skillsData = [
//   { name: 'React', imageSrc: '/React-icon.png' },
//   { name: 'TypeScript', imageSrc: '/Typescript-logo.jpeg' },
//   { name: 'Storybook', imageSrc: '/storybook-logo.png' },
//   { name: 'GraphQL', imageSrc: '/GraphQL-logo.png' },
//   { name: 'Svelte', imageSrc: '/Svelte_logo.png' },
//   { name: 'Next', imageSrc: '/nextjs-icon.png' },
//   { name: 'Figma', imageSrc: '/Figma-logo.png' },
//   // Add more skills as needed
// ];

// const TopSkills: React.FC = () => (
//   <div className='min-h-2/5 max-h-2/5 mt-5 flex w-11/12 flex-col border-blue-600 border'>
//     <p className='bg-myspace-orange pl-2 font-medium text-myspace-font-orange'>
//       Kevin's Skill Space
//     </p>
    
//     <div className='flex h-full flex-col'>
//       <div className='flex h-1/2 items-center'>
//         {skillsData.map((skill, index) => (
//           <Skill key={index} name={skill.name} imageSrc={skill.imageSrc} />
//         ))}
//       </div>
//       <p className='text-red-600 font-bold self-end'>view more</p>
//     </div>
//   </div>
// );

// export default TopSkills;

