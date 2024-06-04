'use client'

import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeveTarot from "@/components/LeveTarot";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-own-blue items-center justify-center">
      <Header />
      <div className={`min-h-screen flex justify-center items-center`}>
        <Image src={`/logo.svg`} width={600} height={600} alt="Leveza Para Viver logo" className={`animate-pulse cursor-none py-16`} />
      </div>
      <About />
      <LeveTarot />
      <Footer />
    </main>
  );
}
