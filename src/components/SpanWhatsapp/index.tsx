import { WhatsappLogo } from "@phosphor-icons/react"
import Link from "next/link"
import { Fragment } from "react"

export default function SpanWhatsapp() {
  return (
    <div className="w-full pr-14 origin-bottom-right flex justify-end items-end border-none outline-none overflow-hidden">
      <Fragment>
        <Link
          href="https://wa.me/5581989689423"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`text-center text-wrap px-4 font-pt-mono`}>Entre em contato agora mesmo via Whatsapp</p>
          <WhatsappLogo size={56} weight="thin" className={`mx-auto animate-indeterminate-bar text-lime-500`} />
        </Link>
      </Fragment>
    </div>
  )
}