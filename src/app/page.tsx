'use client'

import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeveTarot from "@/components/LeveTarot";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-own-blue items-center justify-center">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Header />
      <About />
      <LeveTarot />
      <Footer />
    </main>
  );
}
