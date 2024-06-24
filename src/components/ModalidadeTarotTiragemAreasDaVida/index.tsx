import { WhatsappLogo } from "@phosphor-icons/react";

export default function ModalidadeTarotTiragemAreasDaVida() {
  return (
    <div className={`
        w-full
        min-h-screen
        tiragemareasdavida
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        bg-zinc-300
      `} id="tiragemareasdavida">
      <h1 className={`text-center`}>Tiragem 7 Áreas da vidas</h1>
      <p>
        Nessa leitura olhamos para sete aspectos de sua vida, trazendo a energia das áreas pessoal, profissional, amor, família, saúde, espiritual e emocional.
      </p>
      <p>
        Excelente para você que busca ter uma visão sistêmica de si, contribuindo para um movimento mais coeso, pois você contempla as diferentes partes que compõem sua vida e como cada uma pode estar reverberando no seu sentir.
      </p>
      <p>
        Duração de 1 hora; online, em tempo real ou gravada; valor R$ 120,00.
      </p>
      <p>Entre em contato e agende agora mesmo <WhatsappLogo weight="thin" /></p>
    </div>
  )
}