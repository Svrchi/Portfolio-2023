import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./experienceCard";

type Props = {};

const experience = (props: Props) => {
  return (
    <motion.div className=" h-screen flex relative overflow-hidden flex-col md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        {" "}
        Experience{" "}
      </h3>
      <div className="mt-10 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap snap-mandatory  ">
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        {/*  */}
        {/*  */}
      </div>
    </motion.div>
  );
};

export default experience;
