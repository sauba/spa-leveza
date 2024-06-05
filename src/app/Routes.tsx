import About from "@/components/About"
import ModalidadesTarot from "@/components/ModalidadesTarot"
import { Route, Routes } from "react-router-dom"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/servicos/tarot" element={<ModalidadesTarot />} />
    </Routes>
  )
}