import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../../components/header";
import Hero from "../../components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-300 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Sarchi</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contactme */}
    </div>
  );
}
