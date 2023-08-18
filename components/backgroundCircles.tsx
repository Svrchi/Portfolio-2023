import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.1, 0.1, 1.0,1.0] }}
        transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border-[1px] border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border-[1px] border-red-500 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border-[1px] border-red-500 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border-[5px] border-purple-500 rounded-full h-[650px] w-[650px] mt-52 opacity-20 animate-pulse" />
      <div className="absolute border-[5px] border-purple-500 rounded-full h-[800px] w-[800px] mt-52 opacity-20 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
