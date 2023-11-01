import React from 'react';

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className='flex flex-col h-screen w-screen  bg-gray-200 justify-end items-center'>
      Kevin Sarchi
      <div className='h-[50%] w-[1024px] bg-myspace-blue flex justify-center'>
        <p className=''> Software engineer</p>
      </div>
    </div>
  );
};

export default Landing;
// w-[95%]