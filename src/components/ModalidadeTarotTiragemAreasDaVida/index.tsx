import { Clock, MonitorPlay } from "@phosphor-icons/react";

export default function ModalidadeTarotTiragemAreasDaVida() {
  return (
    <div className={`
        w-full
        h-full
        xl:px-4
        tiragemareasdavida
        flex
        flex-col
        oooh-baby-regular
        justify-start
        items-center
        gap-6
        text-center
        outline-none
        border-none
        bg-zinc-300
        hover:transition-transform
        hover:scale-105
        hover:cursor-pointer
        hover:rounded-br-3xl
      `} id="tiragemareasdavida">
      <h1 className={`text-center text-5xl xl:text-8xl xl:pb-10`}>Tiragem 7 Áreas da Vida</h1>
      <p className={`text-center text-lg xl:text-2xl px-4 font-pt-mono`}>
        Nessa leitura olhamos para sete aspectos de sua vida, trazendo a energia das áreas pessoal, profissional, amor, família, saúde, espiritual e emocional.
      </p>
      <p className={`text-center text-lg xl:text-2xl px-4 font-pt-mono`}>
        Excelente para você que busca ter uma visão sistêmica de si, contribuindo para um movimento mais coeso, pois você contempla as diferentes partes que compõem sua vida e como cada uma pode estar reverberando no seu sentir.
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