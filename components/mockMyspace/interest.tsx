/* eslint-disable react/no-unescaped-entities */
import React from "react";

type Props = {};

const interest = (props: Props) => {
  return (
    <div className="border-myspace-blue border-2 w-2/3 flex flex-col h-2/5 justify-start ">
      <div className="bg-myspace-blue w-full ">
        <p className="text-white ">Kevin's Interest</p>
      </div>
      <div className="flex m-0.5 h-1/2">
        <div className="bg-blue-500 text-blue-800 font-semibold w-1/3 mr-1 ">General</div>
        <div className="bg-blue-200 text-black w-2/3 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Non
          enim praesent elementum facilisis leo vel fringilla est. Lorem donec
          massa sapien faucibus. Aliquam sem et tortor consequat id porta nibh
          venenatis.
        </div>
      </div>
      <div className="flex h-1/2 overflow-clip m-0.5 mt-0">
        <div className="bg-blue-500 text-blue-800 font-semibold w-1/3 mr-1 ">Music</div>
        <div className="bg-blue-200 text-black w-2/3 text-xs ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Non
          enim praesent elementum facilisis leo vel fringilla est. Lorem donec
          massa sapien faucibus. Aliquam sem et tortor consequat id porta nibh
          venenatis.
        </div>
      </div>
    </div>
  );
};

export default interest;
