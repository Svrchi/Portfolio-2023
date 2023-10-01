import React from 'react';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactForm = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData)
  };

  return (
    <div className=' flex h-[429px] w-[337px] flex-col items-center justify-evenly rounded-xl bg-myspace-header-blue'>
      <Image
        className=''
        src='/Myspace.png'
        width={70}
        height={70}
        alt='Myspace logo'
      />
      {/* <div className='h-2 w-2 relative -left-36 -top-20 rounded-full bg-white'>

      </div> */}
      <form
        className='flex  h-[290px] w-[271px] flex-col items-center justify-between '
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='h-[32px] w-[271px] rounded-md border-2  border-gray-300 pl-1  text-black'
          type='text'
          placeholder='Name'
          {...register('name')}
        />
        <input
          className='h-[32px] w-[271px] rounded-md border-2  border-gray-300 pl-1  text-black'
          type='email'
          placeholder='Email'
          {...register('email')}
        />
        <input
          className='h-[32px] w-[271px] rounded-md border-2 border-gray-300 pl-1 text-black'
          type='text'
          placeholder='Subject'
          {...register('subject')}
        />
        <textarea
          className='h-[100px] w-[271px] rounded-md border-2 border-gray-300 pl-1 text-black '
          placeholder='Message'
          {...register('message')}
        />

        <button
          className='h-[32px] w-[132px] rounded-md bg-myspace-font-orange text-white hover:bg-orange-600 focus:bg-myspace-blue '
          type='submit'
          value='SUBMIT'
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
