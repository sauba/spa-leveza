import Image from "next/image"
import Link from "next/link"
import logoSauba from "../../../public/logoSauba.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"https://queirozdeveloper.com.br"}>
        <Image
          src={logoSauba}
          width={120}
          height={80}
          alt="Thiago José de Queiroz"
          priority
          className="mx-auto py-4 animate-wiggle"
        />
      </Link>
    </span>
  )
}
