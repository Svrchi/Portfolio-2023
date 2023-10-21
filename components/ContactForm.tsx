import React, { useRef } from 'react';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

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
    <div className=' flex h-[429px] w-[337px] flex-col items-center justify-evenly rounded-xl bg-myspace-header-blue opacity-100 '>
      <div className='flex w-full justify-center'>
        <Image
          className='relative left-2'
          src='/Myspace.png'
          width={70}
          height={70}
          alt='Myspace logo'
        />
        <button
          className=' relative -top-[20px] left-[120px] h-fit w-fit font-extrabold hover:text-gray-400 active:text-gray-900'
          onClick={toggleForm}
        >
          X
        </button>
      </div>
      {/* FORM */}
      <form
        className='flex  h-[290px] w-[271px] flex-col items-center justify-between'
        // onSubmit={handleSubmit(onSubmit)}
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className='h-[32px] w-[271px] rounded-md border-2  border-gray-300 pl-1  text-black focus:outline-myspace-font-orange'
          type='text'
          placeholder='Name'
          {...register('name')}
          name='from_name'
        />
        <input
          className='h-[32px] w-[271px] rounded-md border-2  border-gray-300 pl-1  text-black focus:outline-myspace-font-orange'
          type='email'
          placeholder='Email'
          {...register('email')}
          name='email_id'
        />
        <input
          className='h-[32px] w-[271px] rounded-md border-2 border-gray-300 pl-1 text-black focus:outline-myspace-font-orange'
          type='text'
          placeholder='Subject'
          {...register('subject')}
          name='subject_id'
        />
        <textarea
          className='h-[100px] w-[271px] rounded-md border-2 border-gray-300 pl-1 text-black focus:outline-myspace-font-orange'
          placeholder='Message'
          {...register('message')}
          name='message'
        />

        <button
          className='h-[32px] w-[132px] rounded-md bg-myspace-font-orange text-white hover:bg-orange-600 focus:bg-myspace-blue '
          type='submit'
          value='submit'
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
