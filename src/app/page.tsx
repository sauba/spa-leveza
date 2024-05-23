'use client'

import About from "@/components/About";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400 items-center justify-center">
      <Header />
      <Image src={`/logo.svg`} width={300} height={300} alt="Leveza Para Viver logo" className={`min-h-screen animate-pulse cursor-none`} />
      <About />
    </main>
  );
}
