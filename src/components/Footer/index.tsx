import {
  InstagramLogo,
  WhatsappLogo
} from "@phosphor-icons/react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className={`w-full min-h-screen flex justify-center text-red-50 items-center text-center`}
      id="contato"
    >
      <div className={`flex flex-col mt-4 font-pt-mono hover:cursor-none`}>
        <span
          className={`lg:text-8xl text-center font-allura`}
        >
          Daniele Andrade
        </span>

        <span className={`lg:text-5xl pb-1 tracking-wider flex-wrap`}>
          Terapeuta
        </span>

        <span
          className={`lg:text-4xl tracking-widest flex-wrap`}
        >
          Entre em Contato:
        </span>

        <div className={`flex justify-center items-center gap-6 pt-8`}>
          <div className={`hover:animate-wiggle`}>
            <span className={`text-red-500`}>
              <Link
                href="https://www.instagram.com/levezaparaviver/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={96} />
              </Link>
            </span>
          </div>

          <div className={`animate-wiggle`}>
            <span className={`text-green-600`}>
              <Link
                href="https://wa.me/5581989689423"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={96} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
