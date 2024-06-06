import About from "@/components/About"
import Footer from "@/components/Footer"
import ModalidadesTarot from "@/components/ModalidadesTarot"
import DefaultLayout from "@/layouts/DefaultLayout"
import { Route, Routes } from "react-router-dom"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<About />} />
        <Route path="/servicos/tarot" element={<ModalidadesTarot />} />
        <Route path="#contato" element={<Footer />} />
      </Route>
    </Routes>
  )
}