import Image from "next/image"

export default function About() {
  return (
    <div className={`
        w-full
        min-h-screen
        about
        flex
        flex-col
        justify-start
        items-center
        text-center
        outline-none
        border-none
        text-zinc-100
        font-caveat
      `} id="about">
      <Image src={`/logo.svg`} width={600} height={600} alt="Leveza Para Viver logo" className={`animate-pulse cursor-none mx-auto`} priority />
      <p className={`px-4 lg:px-24 text-center text-3xl xl:text-4xl 2xl:text-6xl tracking-wider`}>
        O Leveza Para Viver é a manifestação de uma filosofia de vida, da Mulher e Terapeuta, Daniele Andrade.
      </p>

      <p className={`px-4 lg:px-24 text-center text-3xl xl:text-4xl 2xl:text-6xl tracking-wider`}>
        Um espaço de evolução que coloca em movimento, diferentes projetos terapêuticos, te apresentando caminhos para uma vida com mais Leveza Para Viver.
      </p>
    </div>
  )
}