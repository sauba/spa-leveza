'use client'

import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col bg-own-blue items-center justify-center">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  );
}
