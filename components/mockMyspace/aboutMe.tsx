/* eslint-disable react/no-unescaped-entities */
import React from "react";

const aboutMe = () => {
  return (
    <div className="flex flex-col h-1/2 w-11/12 justify-evenly border-red-500 border">
      <div className="border-2 border-black h-[80px] flex justify-center items-center font-black">
        <p className="text-black">Kevin is in your extended network</p>
      </div>
      <div className="">
        <p className="bg-myspace-orange text-myspace-font-orange">
          Kevin's blurbs
        </p>
        <p className="text-myspace-font-orange">About me:</p>
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Non
          enim praesent elementum facilisis leo vel fringilla est. Lorem donec
          massa sapien faucibus. Aliquam sem et tortor consequat id porta nibh
          venenatis. Quis vel eros donec ac odio. Nunc sed blandit libero
          volutpat sed. Arcu cursus euismod quis viverra. Praesent elementum
          facilisis leo vel fringilla est. Habitasse platea dictumst vestibulum
          rhoncus est. Quis viverra nibh cras pulvinar mattis nunc sed blandit
          libero. Scelerisque eleifend donec pretium vulputate sapien nec.
        </p>
      </div>
    </div>
  );
};

export default aboutMe;
