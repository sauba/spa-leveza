import Link from "next/link";

export default function LevezaSelvagem() {
  return (
    <div className={`
        w-full
        min-h-screen
        levezaselvagem
        flex
        flex-col
        justify-start
        items-center
        text-center
        outline-none
        border-none
        font-caveat
        bg-own-pink
        text-zinc-100
      `} id="levezaselvagem">
      <div className={`w-full z-30 my-16 py-4`}>
        <h1 className={`text-center text-7xl square-peg-regular`}>Leveza Selvagem</h1>

        <p className={`px-4 lg:px-24 text-center text-lg xl:text-xl 2xl:text-2xl tracking-wider font-pt-mono`}>
          O Leveza Selvagem foi criado para nós Mulheres abrirmos espaço para nós mesmas.
          Aqui aprendemos, despertamos, reconectamos e expandimos nossa Natureza Feminina.
        </p>

        <p className={`px-4 lg:px-24 text-center text-lg xl:text-xl 2xl:text-2xl tracking-wider font-pt-mono`}>
          Conheça nossas propostas terapêuticas
        </p>
      </div>

      <span className={`rounded-3xl bg-zinc-100 text-own-pink text-xl px-4 py-2 my-8 font-pt-mono z-10`}>
        <Link href="/servicos/levezaselvagem" className={``}>Saiba Mais</Link>
      </span>
    </div>
  )
}