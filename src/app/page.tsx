'use client'

import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeveTarot from "@/components/LeveTarot";
import LevezaSelvagem from "@/components/LevezaSelvagem";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-own-blue-dark items-center justify-center">
      <Header />
      <About />
      <LeveTarot />
      <LevezaSelvagem />
      <Footer />
    </main>
  );
}
