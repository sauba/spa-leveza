import { WhatsappLogo } from "@phosphor-icons/react"
import Link from "next/link"
import { Fragment } from "react"

export default function SpanWhatsapp() {
  return (
    <div className="w-full flex justify-center items-center border-none outline-none overflow-hidden">
      <Fragment>
        <Link
          href="https://wa.me/5581989689423"
          target="_blank"
          rel="noopener noreferrer"
          className={`my-16 flex justify-center items-center`}
        >
          <p className={`text-center text-4xl text-wrap px-4 font-allura`}>Entre em contato:</p>
          <WhatsappLogo size={48} weight="thin" className={`mx-auto text-zinc-100`} />
        </Link>
      </Fragment>
    </div>
  )
}