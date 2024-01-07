import React, { useRef } from 'react';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface Props {
  toggleForm: () => void;
}

//   : React.FC<Props> = ({ toggleForm })
const ContactForm: React.FC<Props> = ({ toggleForm }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
  };
  // EMAIL.JS
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ids38v9',
        'template_1i518jx',
        form.current,
        'o57MdXhxLFuq8InRK'
      )
      .then(
        (result) => {
          console.log(result.text);
          toggleForm(); // Close the form after a successful email send.
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
    className='absolute z-40 flex min-h-[825px] h-screen w-screen justify-center'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    }}
  >
    <div className='mt-32 flex h-[500px]  w-[580px]  flex-col items-center justify-start bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
      <div className=' flex w-full justify-end  pt-0' onClick={toggleForm}>
        <svg
          className='bg-blue-100 hover:bg-blue-200 active:bg-blue-300'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
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
      <div className='mt-3 flex h-fit w-[540px] flex-col bg-blue-100 font-semibold text-black opacity-100 '>
        {/* to: */}
        <div className='flex h-16 w-full border'>
          <p className='h-full w-1/6 pl-2 pt-2'>To:</p>
          <div className='flex h-full w-5/6 items-center bg-white'>
            <div className='ml-2 flex h-12 w-1/2 items-center justify-start bg-myspace-blue-two'>
              <Image
                className='ml-1 border-2 border-myspace-header-blue object-contain hover:border-gray-400'
                src='/tempselfie.jpeg'
                width={50}
                height={50}
                alt='kevin'
              />
              <p className='ml-2 text-myspace-header-blue'>Kevin</p>
            </div>
          </div>
        </div>
        <form
          className='flex h-5/6 w-full flex-col'
          ref={form}
          onSubmit={sendEmail}
        >
          {/* name */}
          <div className='flex h-11 w-full items-center justify-center border'>
            <div className='w-1/6 pl-2'>Name:</div>
            <div className='flex h-full w-5/6 items-center justify-center bg-white'>
              <input
                className='ml-1 mr-1  h-[32px]  w-full border-2 border-gray-400 pl-1 font-normal'
                type='text'
                {...register('name')}
                name='from_name'
              />
            </div>
          </div>
          {/* email */}
          <div className='flex h-11 w-full items-center justify-center border'>
            <div className='w-1/6 pl-2'>Email:</div>
            <div className='flex h-full w-5/6 items-center justify-center bg-white'>
              <input
                className='ml-1 mr-1  h-[32px]  w-full border-2 border-gray-400 pl-1 font-normal'
                type='text'
                {...register('email')}
                name='email_id'
              />
            </div>
          </div>
          {/* subject */}
          <div className='flex h-11 w-full items-center justify-center border'>
            <div className='w-1/6 pl-2'>Subject:</div>
            <div className='flex h-full w-5/6 items-center justify-center bg-white'>
              <input
                className='ml-1 mr-1 h-[32px] w-full border-2 border-gray-400 pl-1 font-normal'
                type='text'
                {...register('subject')}
                name='subject_id'
              />
            </div>
          </div>
          {/* body */}
          <div className='flex h-48 w-full border '>
            <div className='w-1/6 pl-2 pt-2'>Body:</div>
            <div className='flex h-full w-5/6 items-center justify-center bg-white'>
              <textarea
                className='ml-1 mr-1 h-40 w-full border-2 border-gray-400 pl-1 font-normal '
                {...register('message')}
                name='message'
              />
            </div>
          </div>
          {/* send */}
          <div className='relative top-2 flex h-0 w-full bg-white'>
            {/* bg-custom-gradient relative m-2 h-2 w-5 rounded-xl border-black pr-[40px] pt-[20px] font-bold text-white */}
            <button
              className='flex h-fit w-full items-end'
              type='submit'
              value='submit'
            >
              <Image
                className=' top-5 z-10 h-auto'
                src='/blue-button.png'
                width={100}
                height={0}
                alt='button'
              />
              <p className='bg relative right-[70px] top-2 z-40 self-start justify-self-start text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:text-gray-500 active:text-gray-600'>
                {' '}
                Send
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
    </motion.div>
    

  );
};

export default ContactForm;
