export default function About() {
  return (
    <div className={`
        w-full
        min-h-screen
        about
        justify-center
        items-center
        text-center
        m-4
        lg:m-16
        p-4
        lg:p-8
        outline-none
        border-none
        text-white
        font-caveat
      `} id="about">
      <p className={`text-center xl:text-6xl animate-skew-stop tracking-widest`}>Sobre</p>
      <p className={`text-center xl:text-5xl tracking-wider leading-loose lg:pt-32`}>
        O Leveza Para Viver é a manifestação de uma filosofia de vida, da Mulher e Terapeuta, Daniele Andrade. Um espaço de evolução que coloca em movimento, diferentes projetos terapêuticos, te apresentando caminhos para uma vida com mais Leveza Para Viver.
      </p>
    </div>
  )
}