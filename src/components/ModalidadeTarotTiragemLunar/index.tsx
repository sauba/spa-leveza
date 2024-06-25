import { Clock } from "@phosphor-icons/react";

export default function ModalidadeTarotTiragemLunar() {
  return (
    <div className={`
        w-full
        tiragemlunar
        flex
        flex-col
        justify-center
        items-center
        text-center
        square-peg-regular
        outline-none
        border-none
        bg-zinc-300
      `} id="tiragemlunar">
      <h1 className={`text-center text-2xl xl:text-8xl xl:pt-20 xl:pb-10`}>Tiragem Lunar</h1>
      <p className={`ftext-center text-2xl xl:text-3xl px-4 font-pt-mono`}>
        Essa leitura é feita para o período de um mês lunar, começando pela energia da semana de fase de Lua Nova, seguindo com a Lua Crescente, Lua Cheia e por fim Lua Minguante.
      </p>
      <p className={`ftext-center text-2xl xl:text-3xl px-4 font-pt-mono`}>
        É uma leitura para você que percebe o seu movimento cíclico e quer apoio para trilhar essa jornada com mais clareza, sem perder os seus objetivos de vista e se mantendo conectada em meio ao seu movimento emocional.
      </p>
      <p className={`flex justify-center items-center gap-3 text-center font-pt-mono text-2xl xl:text-3xl px-4 xl:pb-10`}>
        <Clock />Duração de 1 hora; online, em tempo real ou gravada.
      </p>
    </div>
  )
}