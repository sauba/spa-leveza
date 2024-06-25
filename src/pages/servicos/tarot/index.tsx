import ModalidadeTarotTiragemAreasDaVida from "@/components/ModalidadeTarotTiragemAreasDaVida";
import ModalidadeTarotTiragemLivre from "@/components/ModalidadeTarotTiragemLivre";
import ModalidadeTarotTiragemLunar from "@/components/ModalidadeTarotTiragemLunar";
import NavbarDropdownMenuPages from "@/components/NavbarDropdownPages";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import "./styles.css";

export default function LeveTarotPage() {
  return (
    <div className={`w-full min-h-screen flex flex-col text-sky-700 overflow-hidden`} id="levetarotfull">
      <NavbarDropdownMenuPages />
      <ModalidadeTarotTiragemAreasDaVida />
      <div className={`flex`}>
        <ModalidadeTarotTiragemLivre />
        <ModalidadeTarotTiragemLunar />
      </div>

      <span className={`bg-gradient-to-l from-lime-500 to-zinc-300 flex justify-center items-center gap-3 text-center square-peg-regular text-2xl xl:text-8xl px-4 py-8`}>
        Entre em contato e agende agora mesmo
        <span className={`text-sky-700`}>
          <Link
            href="https://wa.me/5581989689423"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={56} weight="thin" />
          </Link>
        </span>
      </span>
    </div>
  )
}