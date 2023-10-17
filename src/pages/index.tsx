import Head from 'next/head';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Myspace from '../../components/Myspace';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className='z-0 h-screen snap-y snap-mandatory overflow-scroll bg-gray-700 text-white'>
      <Head>
        <title>Sarchi</title>
      </Head>
      {/* <Header /> */}
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
      {/* <section id='scroll' className='snap-start '>
        <Scroll />
      </section> */}
      {/* 98.CSS ALERT COMPONENT */}
      {/* <section id='error' className='snap-start '>
        <div className='h-screen w-screen flex justify-center items-center bg-slate-100'>
         { showAlert && <Error />}
        </div>
      </section> */}
      {/* myspace test page */}
      <motion.section
        id='myspace1'
        className='snap-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        // viewport={{ once: true }}
      >
        <Myspace />
      </motion.section>
    </div>
  );
}
