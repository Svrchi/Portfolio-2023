import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundCircles from "./backgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["developer", "photographer", "designer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* REPLACE IMG WITH IMAGE COMPONENT */}
      <Image
        className="relative rounded-full  mx-auto"
        src="/jpeg.jpeg"
        width={100}
        height={100}
        alt="self"
      />
      <h1>
        <span>
          {text}
          <Cursor cursorColor="000000" />
        </span>
      </h1>
    </div>
  );
};

export default Hero;
