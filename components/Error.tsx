import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  toggleError: () => void;
}

// const Contact: React.FC<Props> = ({ toggleForm }) => {

const Error: React.FC<Props> = ({ toggleError }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='absolute top-[35%] z-50 h-[150px] w-[380px] border-b border-r border-black'
    >
      <div className='h-[149px] border-b border-r border-gray-500'>
        <div className='border-l border-t '>
          <div className='border-l border-t border-gray-300'>
            <div className='h-[146px] bg-gray-400 font-Pixel text-lg'>
              <div className='  flex h-7 items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-500 pl-2'>
                Error
              </div>
              <div className='flex h-5/6 flex-col items-center justify-evenly'>
                <p className='text-black'> WORK IN PROGRESS! </p>
                <div className='border-b border-r border-black'>
                  <div className='border-b border-r border-gray-500'>
                    <div className='border-l border-t'>
                      <div className='border-l border-t border-gray-300'>
                        <button
                          className='m-1 h-[30px] w-[100px] border border-dotted border-black text-black'
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

// initial={{ y: -100, opacity: 0 }}
// whileInView={{ y: 0, opacity: 1 }}
// transition={{ duration: 2 }}
// viewport={{ once: true }}
