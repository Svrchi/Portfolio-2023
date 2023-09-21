import React from 'react'
import LinkedinURL from "../../components/mockMyspace/linkedinURL";
import Interest from "../../components/mockMyspace/interest";
import AboutMe from "../../components/mockMyspace/aboutMe";
import TopSkills from "../../components/mockMyspace/topSkills";
import TitleCard from "../../components/mockMyspace/titleCard";
import Contact from "../../components/mockMyspace/contact";

type Props = {}

const myspace = (props: Props) => {
  return (
    <div className='bg-gray-200 h-screen w-screen flex justify-center'>
    <div className="h-screen max-w-screen-lg bg-white flex ">
    <div
      id="column-1"
      className="border h-screen w-5/12 flex flex-col items-center justify-evenly pt-12 min-w-[450px] "
    >
      <TitleCard />
      <Contact />
      <LinkedinURL />
      <Interest />
    </div>
    <div id="column-2" className="border h-screen w-7/12 flex flex-col justify-start  pb-12">
      <AboutMe />
      <TopSkills/>
    </div>
  </div>
  </div>
  )
}

export default myspace