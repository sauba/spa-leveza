'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}