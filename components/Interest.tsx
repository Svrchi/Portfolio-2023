/* eslint-disable react/no-unescaped-entities */
import React from 'react';

type Props = {};

const Interest = (props: Props) => {
  return (
    <div className='flex h-[30%] w-5/6 flex-col justify-start border-2  border-myspace-blue'>
      <div className='w-full bg-myspace-blue '>
        <p className='text-white'>Kevin's Interest</p>
      </div>
      <div className='m-0.5 flex h-[100%]'>
        <div className='mr-1 w-1/3 bg-blue-500 pl-1 font-semibold text-blue-800'>
          General
        </div>
        <div className='w-2/3 bg-blue-200 pl-1 text-xs leading-5 text-black'>
          Coding, Internet, Photography, Design, History, Reading, Traveling,
          Tea, Discovering new music, Low-budget Films, Marketing Psychology,
          Korean food, Anime, Concerts, Clothes, Clothes, Clothes, Memes,
          perusing Facebook Marketplace, Y2K Stuff, Friendship
        </div>
      </div>

    </div>
  );
};

export default Interest;
