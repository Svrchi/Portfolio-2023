import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Ping from '../public/microsoft-windows-98-error.mp3'



interface Props {
  toggleError: () => void;
}

function playSound(url: any) {
  const audio = new Audio(url);
  audio.play();
}

const Error: React.FC<Props> = ({ toggleError }) => {
  useEffect(() => {
    playSound(Ping);
  }, []); 



  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className='absolute top-[35%] z-50 h-[161px] w-[380px] border-b-2 border-r-2 border-black'
    >
      {/* <audio src={Ping}  autoPlay controls /> */}
      <div className='h-[159px] border-b border-r border-gray-500'>
        <div className='border-windows98-gray border-l-2 border-t-2'>
          <div className='border-windows98-border-gray border-l-2 border-t'>
            <div className='bg-windows98-gray h-[155px] text-lg'>
              <div className='  bg-windows98-blue flex h-7 items-center pl-2 '>
                Warning
                {/* Close Button */}
                <div className='relative left-[277px] flex items-center justify-center  border-b border-r border-black'>
                  <div className='border-b border-r border-gray-500'>
                    <div className='border-l- border-t'>
                      <div className='border-l border-t border-gray-300'>
                        <div
                          className='bg-windows98-gray flex h-4 w-4 items-center justify-center text-black  hover:bg-gray-400 active:bg-gray-500'
                          onClick={toggleError}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='#000000'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <line x1='18' y1='6' x2='6' y2='18'></line>
                            <line x1='6' y1='6' x2='18' y2='18'></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex h-5/6 flex-col items-center justify-evenly'>
                <div className='flex  w-11/12 items-center justify-evenly'>
                  <Image
                    className='align '
                    src='/alert.png'
                    width={50}
                    height={50}
                    alt='alert'
                  />
                  <p className='text-black '>Website under maintenance. </p>
                </div>
                {/* Ok Button */}
                <div className='border-b-2 border-r-2 border-black '>
                  <div className='border-b border-r border-gray-500'>
                    <div className='border-l-2 border-t-2'>
                      <div className='border-l border-t border-gray-300'>
                        <button
                          className='m-1 h-[30px] w-[100px] border border-dotted border-black text-black hover:bg-gray-400 active:bg-gray-500'
                          onClick={toggleError}
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Error;
