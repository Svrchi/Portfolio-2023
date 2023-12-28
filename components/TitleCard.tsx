import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

type Props = {};
// const firstDateOfMonth = moment().startOf("month").format("MM-DD-YYYY");
const currentDate = moment().subtract(7, 'days').calendar();
const TitleCard = (props: Props) => {
  return (
    <div className='flex w-5/6 text-black pt-5 pb-7'>
      <div id='left-col'>
        <p className='font-bold'>Kevin Sarchi</p>
        {/* NEEDS WIDER PHOTO TO BALANCE SPACING */}
        <Image
          className='relative mx-auto object-cover '
          src='/tempselfie.jpeg'
          width={180}
          height={0}
          alt='selfie'
        />
        <div className='mt-3  flex justify-center text-xs'>
          <p> View My: </p>
          <Link
            className='font-extrabold text-blue-900'
            href='https://www.flickr.com/photos/100852839@N04/'
          >
            Pics
          </Link>
          <p> | </p>
          <Link
            className='font-extrabold text-blue-900'
            href='https://www.flickr.com/photos/100852839@N04/'
          >
            Videos
          </Link>
        </div>
      </div>
      <div id='right-col' className='ml-3 text-sm'>
        <p className='mb-4 mt-4'> &quot; :-{`)`} &quot; </p>
        <div className='mb-5 leading-3'>
          <p>29 years old</p>
          <p> New York,</p>
          <p>NEW YORK</p>
          <p>United States</p>
        </div>
        <img
          className='w- mb-4 mt-4 h-7'
          alt='Online Icon'
          src='https://archive.org/download/myspaceon/myspaceon.gif'
        />
        <div className=' text-sm leading-[13px]'>
          <p>Last Login:</p>
          <p>{currentDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
