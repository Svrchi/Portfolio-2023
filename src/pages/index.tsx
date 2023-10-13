import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '../../components/header';
import Hero from '../../components/hero';
import About from '../../components/about';
import Experience from '../../components/experience';
import TitleCard from '../../components/mockMyspace/titleCard';
import Contact from '../../components/mockMyspace/Contact';
import Scroll from '../../components/scroll';
import LinkedinURL from '../../components/mockMyspace/linkedinURL';
import Interest from '../../components/mockMyspace/interest';
import AboutMe from '../../components/mockMyspace/aboutMe';
import TopSkills from '../../components/mockMyspace/topSkills';
import Myspace from '../../components/mockMyspace/Myspace';
import ContactForm from '../../components/mockMyspace/ContactForm';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='z-0 h-screen snap-y snap-mandatory overflow-scroll bg-gray-700 text-white'>
      <Head>
        <title>Sarchi</title>
      </Head>
      <Header />
      {/* <section id='hero' className='snap-center'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />
      </section> */}

      {/* scroll screen */}
      <section id='scroll' className='snap-start '>
        <Scroll />
      </section>
      {/* myspace test page */}
      <motion.section id='myspace1' className='snap-center'    initial={{  opacity: 0 }}      whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        // viewport={{ once: true }}
        >
        <Myspace />
      </motion.section>
    </div>
  );
}
