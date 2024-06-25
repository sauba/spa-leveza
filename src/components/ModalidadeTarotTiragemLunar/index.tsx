import { Clock, MonitorPlay } from "@phosphor-icons/react";

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
        hover:transition-transform
        hover:scale-105
        hover:cursor-pointer
                hover:rounded-bl-3xl
      `} id="tiragemlunar">
      <h1 className={`text-center text-6xl xl:text-8xl xl:pb-4`}>Tiragem Lunar</h1>
      <p className={`text-center text-lg xl:text-2xl px-4 font-pt-mono`}>
        Essa leitura é feita para o período de um mês lunar, começando pela energia da semana de fase de Lua Nova, seguindo com a Lua Crescente, Lua Cheia e por fim Lua Minguante.
      </p>
      <p className={`text-center text-lg xl:text-2xl px-4 font-pt-mono`}>
        É uma leitura para você que percebe o seu movimento cíclico e quer apoio para trilhar essa jornada com mais clareza, sem perder os seus objetivos de vista e se mantendo conectada em meio ao seu movimento emocional.
      </p>
      <p className={`flex justify-center items-center gap-3 text-center font-pt-mono text-lg xl:text-2xl px-4`}>
        <Clock size={48} weight="thin" />Duração de 1 hora;
      </p>
      <p className={`flex justify-center items-center gap-3 text-center font-pt-mono text-lg xl:text-2xl px-4`}>
        <MonitorPlay size={48} weight="thin" /> online, em tempo real ou gravada;
      </p>
    </div>
  )
}