/* eslint-disable react/no-unescaped-entities */
import React from 'react';

type Props = {};

const interest = (props: Props) => {
  return (
    <div className='flex h-2/5 w-5/6 flex-col justify-start border-2 border-myspace-blue '>
      <div className='w-full bg-myspace-blue '>
        <p className='text-white '>Kevin's Interest</p>
      </div>
      <div className='m-0.5 flex h-1/2'>
        <div className='mr-1 w-1/3 bg-blue-500 pl-1 font-semibold text-blue-800'>
          General
        </div>
        <div className='w-2/3 bg-blue-200 pl-1 text-xs leading-5 text-black'>
          Internet, Movies, Reading, Dancing, Karaoke, Baseball, Language,
          Culture, History of Communism, Philosophy, Singing/Writing Music,
          Running, Finding New Food, Weight Lifting, Hiking, WWI Aviation,
          Travel, Building alternate communities
        </div>
      </div>
      <div className='m-0.5 mt-0 flex h-1/2 overflow-clip'>
        <div className='mr-1 w-1/3 bg-blue-500 pl-1 font-semibold text-blue-800'>
          Music
        </div>
        <div className='w-2/3 overflow-scroll bg-blue-200 text-xs text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Non
          enim praesent elementum facilisis leo vel fringilla est. Lorem donec
          massa sapien faucibus. Aliquam sem et tortor consequat id porta nibh
          venenatis.
        </div>
      </div>
    </div>
  );
};

export default interest;
