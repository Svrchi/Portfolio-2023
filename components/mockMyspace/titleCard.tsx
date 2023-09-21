import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

type Props = {};
// const firstDateOfMonth = moment().startOf("month").format("MM-DD-YYYY");
const currentDate = moment().subtract(10, "days").calendar();
const titleCard = (props: Props) => {
  return (
    <div className="flex  text-black w-5/6  ">
      <div id="left-col">
        <p className="font-bold">Kevin Sarchi</p>
        {/* NEEDS WIDER PHOTO TO BALANCE SPACING */}
        <Image
          className="relative mx-auto object-cover "
          src="/tempselfie.jpeg"
          width={180}
          height={0}
          alt="selfie"
        />
        <div className="flex  mt-3 text-xs justify-center">
          <p> View My: </p>
          <Link className="text-blue-900 font-extrabold" href="https://www.flickr.com/photos/100852839@N04/">Pics</Link>
          <p> {' '}|{' '} </p>
          <Link className="text-blue-900 font-extrabold" href="https://www.flickr.com/photos/100852839@N04/">
            Videos
          </Link>
        </div>
      </div>
      <div id="right-col" className="ml-3 text-sm">
        <p className="mb-4 mt-4"> &quot; :-{`)`} &quot; </p>
        <div className="mb-5 leading-3">
          <p>29 years old</p>
          <p> New York,</p>
          <p>NEW YORK</p>
          <p>United States</p>
        </div>
        <img
          className="h-7 w- mt-4 mb-4"
          alt="Online Icon"
          src="https://archive.org/download/myspaceon/myspaceon.gif"
        />
        <div className=" leading-[13px] text-sm">
          <p>Last Login:</p>
          <p>{currentDate}</p>
        </div>
      </div>
    </div>
  );
};

export default titleCard;
