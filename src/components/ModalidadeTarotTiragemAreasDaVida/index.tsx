import { Clock } from "@phosphor-icons/react";

export default function ModalidadeTarotTiragemAreasDaVida() {
  return (
    <div className={`
        w-full
        tiragemareasdavida
        flex
        flex-col
        oooh-baby-regular
        justify-center
        items-center
        gap-6
        text-center
        outline-none
        border-none
        bg-zinc-300
      `} id="tiragemareasdavida">
      <h1 className={`text-center text-2xl xl:text-8xl xl:pt-20 xl:pb-10`}>Tiragem 7 Áreas da vidas</h1>
      <p className={`text-center text-2xl xl:text-3xl px-4 font-pt-mono`}>
        Nessa leitura olhamos para sete aspectos de sua vida, trazendo a energia das áreas pessoal, profissional, amor, família, saúde, espiritual e emocional.
      </p>
      <p className={`text-center text-2xl xl:text-3xl px-4 font-pt-mono`}>
        Excelente para você que busca ter uma visão sistêmica de si, contribuindo para um movimento mais coeso, pois você contempla as diferentes partes que compõem sua vida e como cada uma pode estar reverberando no seu sentir.
      </p>
      <p className={`flex justify-center items-center gap-3 text-center font-pt-mono text-2xl xl:text-3xl px-4`}>
        <Clock />Duração de 1 hora; online, em tempo real ou gravada.
      </p>
    </div>
  )
}