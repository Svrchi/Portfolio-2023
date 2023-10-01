import React from 'react';
import { motion } from 'framer-motion';
// https://media.npr.org/assets/img/2023/04/13/jpeg-danny_custom-659a0308618efbc0a2f49afdbd12aa3dffcab3c1.jpg
type Props = {};

const about = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        About
      </h3>
      <motion.img
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        // veiwport allows you to see times animation should repeat
        // viewport={{ once: true }}
        className='md:w-95 -mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:rounded-lg xl:h-[450px] xl:w-[600px]'
        src='https://people.com/thmb/2DOfcYIUrBFZGzHN-Gq3HSlYlkc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/sonic-and-tales-e6036dc6fb6e423d82f8850099b363fc.jpg'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-pink-400'>little</span>{' '}
          background
        </h4>
        <p className='text-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
          molestie nunc non blandit. Consectetur libero id faucibus nisl
          tincidunt eget. Fermentum odio eu feugiat pretium nibh ipsum. Neque
          gravida in fermentum et sollicitudin ac orci phasellus egestas. Libero
          volutpat sed cras ornare arcu dui vivamus arcu. Rutrum tellus
          pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
          Tincidunt praesent semper feugiat nibh sed pulvinar proin. Gravida
          quis blandit turpis cursus in hac. Tempor nec feugiat nisl pretium
          fusce id velit ut tortor. Est ullamcorper eget nulla facilisi.
          Dictumst vestibulum rhoncus est pellentesque elit.
        </p>
      </div>
    </motion.div>
  );
};

export default about;
