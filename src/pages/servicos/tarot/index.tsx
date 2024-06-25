import ModalidadeTarotTiragemAreasDaVida from "@/components/ModalidadeTarotTiragemAreasDaVida";
import ModalidadeTarotTiragemLivre from "@/components/ModalidadeTarotTiragemLivre";
import ModalidadeTarotTiragemLunar from "@/components/ModalidadeTarotTiragemLunar";
import NavbarDropdownMenuPages from "@/components/NavbarDropdownPages";
import { WhatsappLogo } from "@phosphor-icons/react";
import "./styles.css";

export default function LeveTarotTypes() {
  return (
    <div className={`w-full min-h-screen flex flex-col text-sky-700`} id="levetarotfull">
      <NavbarDropdownMenuPages />
      <div className={``}>
        <ModalidadeTarotTiragemAreasDaVida />
      </div>
      <div className={``}>
        <ModalidadeTarotTiragemLivre />
        <ModalidadeTarotTiragemLunar />
      </div>

      <p className={`bg-gradient-to-l from-lime-500 to-zinc-300 flex justify-center items-center gap-3 text-center square-peg-regular text-2xl xl:text-8xl px-4 py-8`}>
        Entre em contato e agende agora mesmo <WhatsappLogo weight="thin" size={96} className={`animate-wiggle`} />
      </p>
    </div>
  )
}