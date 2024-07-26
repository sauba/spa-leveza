import Image from "next/image"

export default function About() {
  return (
    <div className={`
        w-full
        min-h-screen
        py-14
        about
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-zinc-100
        font-pt-mono
      `} id="about">
      <Image src={`/logo.svg`} width={600} height={600} alt="Leveza Para Viver logo" className={`cursor-none mx-auto`} priority />
      <p className={`px-4 lg:px-24 text-center text-lg xl:text-xl 2xl:text-2xl tracking-wider`}>
        O Leveza Para Viver é um espaço de evolução, focado em autoconhecimento e cuidado. Nasceu como uma filosofia de vida e tem se concretizado com a prestação de serviços terapêuticos. Idealizado por Daniele Andrade, psicóloga e terapeuta holística, o espaço de evolução conta com projetos próprios, na modalidade online e presencial, e, também, abre espaço para outros profissionais, através da sublocação de sala, espaço para eventos e hospedagem.
      </p>
    </div>
  )
}