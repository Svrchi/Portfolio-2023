/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

type Props = {};

const topSkills = (props: Props) => {
  return (
    <div className="flex flex-col w-2/3">
      <p className="text-myspace-font-orange bg-myspace-orange">
        Kevin's Skill Space
      </p>
      <div>
        <div className="text-black flex justify-between">
            <label>React</label>
            <label>React</label>
            <label>React</label>
            <label>React</label>


        </div>
        <div className="flex border border-black h-1/2 m-2 justify-evenly">
          <Image width={150} height={0} src="/React-icon.png" alt="" />
          <Image width={150} height={0} src="/React-icon.png" alt="" />
          <Image className="w-1/4 h-1/4" width={0} height={0} src="/React-icon.png" alt="" />
          <Image width={100} height={100} src="/React-icon.png" alt="" />
        </div>
        <div className="flex border border-black h-1/2 m-2 justify-evenly">
          <Image width={100} height={100} src="/React-icon.png" alt="" />
          <Image width={100} height={100} src="/React-icon.png" alt="" />
          <Image width={100} height={100} src="/React-icon.png" alt="" />
          <Image width={100} height={100} src="/React-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default topSkills;
