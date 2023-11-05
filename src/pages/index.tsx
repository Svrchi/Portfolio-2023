import Head from 'next/head';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Myspace from '../../components/Myspace';
import Landing from '../../components/Landing';
import Scroll from '../../components/scroll';
import Experience from '../../components/experience';
import About from '../../components/about';
import Hero from '../../components/hero';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className='z-0 h-screen snap-y snap-mandatory overflow-hidden text-white'>
      <Head>
        <title>Sarchi</title>
      </Head>
      {/* <Header /> */}
      {/* <section id='hero' className='snap-center'>
        <Hero />
      </section> */}
      {/* <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />
      </section> */}

      {/* scroll screen */}
      {/* <section id='scroll' className='snap-start '>
        <Scroll />
      </section> */}

      {/* <section id='scroll' className='snap-start'>
        <Landing/>
      </section> */}
      {/* myspace test page */}
      <motion.section
        id='myspace1'
        className='snap-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Myspace />
      </motion.section>
    </div>
  );
}
