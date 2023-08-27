import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../../components/header";
import Hero from "../../components/hero";
import About from "../../components/about";
import Experience from "../../components/experience";
import TitleCard from "../../components/mockMyspace/titleCard"
import Contact from "../../components/mockMyspace/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-700 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Sarchi</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}
      {/* Projects */}
      {/* Contactme */}
      {/* myspace test page */}
      <section id="myspace" className="snap-center">
        <div className="h-screen bg-white flex justify-center items-center">
          <div id="column-1" className="border h-screen  w-1/2 flex flex-col items-center justify-center">
            <TitleCard/>
            <Contact/>
            </div>
          <div id="column-2" className="border h-screen  w-1/2">My Network</div>
        </div>
      </section>
    </div>
  );
}
