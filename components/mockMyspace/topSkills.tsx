/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

type Props = {};

const topSkills = (props: Props) => {
  return (
    <div className="flex flex-col w-11/12 h-2/5 mt-5">
      <p className="text-myspace-font-orange bg-myspace-orange pl-2 font-medium">
        Kevin's Skill Space
      </p>

      {/* skill container */}
      <div className=" h-full flex flex-col">
        {/* first row */}
        <div className="h-1/2  flex items-center">
          <div className="flex flex-col justify-center items-center h-36 w-36 border">
            <p className="text-black">React</p>
            <Image
              className=""
              src="/React-icon.png"
              width={100}
              height={100}
              alt="react"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-36 w-36 border">
            <p className="text-black">React</p>
            <Image
              className=""
              src="/React-icon.png"
              width={100}
              height={100}
              alt="react"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-36 w-36 border">
            <p className="text-black">React</p>
            <Image
              className=""
              src="/React-icon.png"
              width={100}
              height={100}
              alt="react"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-36 w-36 border">
            <p className="text-black">React</p>
            <Image
              className=""
              src="/React-icon.png"
              width={100}
              height={100}
              alt="react"
            />
          </div>
        </div>
        {/* second row */}
        <div className="h-1/2 border flex items-center">
        <div className="flex flex-col justify-center items-center h-36 w-36 border">
            <p className="text-black">React</p>
            <Image
              className=""
              src="/React-icon.png"
              width={100}
              height={100}
              alt="react"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-36 w-36 border">
            <p className="text-black">React</p>
            <Image
              className=""
              src="/React-icon.png"
              width={100}
              height={100}
              alt="react"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-36 w-36 border">
            <p className="text-black">React</p>
            <Image
              className=""
              src="/React-icon.png"
              width={100}
              height={100}
              alt="react"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-36 w-36 border">
            <p className="text-black">React</p>
            <Image
              className=""
              src="/React-icon.png"
              width={100}
              height={100}
              alt="react"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default topSkills;
