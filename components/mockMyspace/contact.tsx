import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';

interface Props {
  toggleForm: () => void;
}

const Contact: React.FC<Props> = ({ toggleForm }) => {
  return (
    <div
      id='contact-container'
      className='relative h-1/5 max-h-[180px] min-h-[150px] w-5/6 border-2 border-myspace-blue'
    >
      <div className='h-48} bg-myspace-blue '>
        <p className='pl-5 font-bold text-white '>Contacting Kevin</p>{' '}
      </div>
      <div className='relative left-0 top-0 flex h-full max-h-[85%]  w-full font-Pixel '>
        {/* ////////////////////////////LEFT SPAN //////////////////////////////////////////// */}
        <div className='absolute flex h-full w-1/2 flex-col justify-around'>
          <div className='ml-4 flex items-center '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 20'
              fill='none'
              stroke='#ff6705'
              strokeWidth='2'
            >
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
              <polyline points='22,6 12,13 2,6'></polyline>
            </svg>
            <button
              className='z-20 ml-2 text-blue-600'
              rel='noopener noreferrer'
              onClick={toggleForm}
            >
              Send Message
            </button>
          </div>
          <div className='ml-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ff6705'
              strokeWidth='2'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
            <Link
              className='z-20 ml-2 text-blue-600'
              href='https://www.linkedin.com/in/kevin-sarchi/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Add to Friends
            </Link>
          </div>
          <div className='ml-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ff6705'
              strokeWidth='2'
            >
              <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
              <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
            </svg>
            <Link
              className='z-20 ml-2 text-blue-600'
              href='https://www.linkedin.com/in/kevin-sarchi/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Skills
            </Link>{' '}
          </div>
          <div className='ml-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ff6705'
              strokeWidth='2'
            >
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
            <Link
              className='z-20 ml-2 text-blue-600'
              href='https://github.com/svrchi'
              rel='noopener noreferrer'
              target='_blank'
            >
              Experience
            </Link>
          </div>
        </div>
        {/* ////////////////////////////// RIGHT SPAN ////////////////////////////////////////// */}
        <div className=' absolute left-1/2 flex w-1/2 flex-col justify-center'>
          <div className='ml-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 20'
              fill='none'
              stroke='#ff6705'
              strokeWidth='2'
            >
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
              <polyline points='22,6 12,13 2,6'></polyline>
            </svg>
            <Link
              className='z-20 ml-2 text-blue-600'
              href='https://www.linkedin.com/in/kevin-sarchi/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Send Message
            </Link>
          </div>
          <div className='ml-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ff6705'
              strokeWidth='2'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
            <Link
              className='z-20 ml-2 text-blue-600'
              href='https://www.linkedin.com/in/kevin-sarchi/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Add to Friends
            </Link>
          </div>
          <div className='ml-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ff6705'
              strokeWidth='2'
            >
              <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
              <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
            </svg>
            <Link
              className='z-20 ml-2 text-blue-600'
              href='https://www.linkedin.com/in/kevin-sarchi/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Skills
            </Link>{' '}
          </div>
          <div className='ml-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ff6705'
              strokeWidth='2'
            >
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
            <Link
              className='z-20 ml-2 text-blue-600'
              href='https://github.com/svrchi'
              rel='noopener noreferrer'
              target='_blank'
            >
              Experience
            </Link>
          </div>
          test
        </div>
      </div>
    </div>
  );
};

export default Contact;
