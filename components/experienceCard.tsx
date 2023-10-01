import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const experienceCard = (props: Props) => {
  return (
    <article className='flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-y-scroll rounded-lg bg-gray-500 p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px]  xl:w-[900px]'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]'
        src='https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256'
        alt=''
      />
      <div className='px-0 px-10'>
        <h4 className='text-4xl font-light'>ceo of something</h4>
        <p className='mt-1 text-2xl font-bold'>some random information</p>
        <div className='my-2 flex space-x-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            alt=''
          />
          {/* tech stacks */}
          {/* tech stacks */}
          {/* tech stacks */}
        </div>
        <p className='py-5 uppercase text-gray-300'>
          started work - and did ... lorem ipsum
        </p>
        <ul className='ml-4 max-h-36 list-disc space-y-4 text-lg'>
          <li>
            {' '}
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            {' '}
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            {' '}
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            {' '}
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default experienceCard;
