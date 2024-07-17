import NavbarDropdownMenuPages from "@/components/NavbarDropdownPages";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import "./styles.css";

export default function LevezaSelvagemPage() {
  return (
    <div className={`w-full min-h-screen flex flex-col bg-own-coral text-zinc-100 overflow-hidden`} id="levetarotfull">
      <NavbarDropdownMenuPages />

      <h1 className={`text-center`}>Leveza Selvagem</h1>
      <span className={`bg-gradient-to-l from-lime-500 to-zinc-300 flex justify-center items-center gap-3 text-center square-peg-regular text-4xl xl:text-8xl py-32`}>
        Entre em contato e agende agora mesmo.
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