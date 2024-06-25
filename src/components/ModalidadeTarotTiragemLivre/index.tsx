import { Clock } from "@phosphor-icons/react";

export default function ModalidadeTarotTiragemLivre() {
  return (
    <div className={`
        w-full
        tiragemlivre
        flex
        flex-col
        justify-center
        items-center
        text-center
        square-peg-regular
        outline-none
        border-none
        bg-zinc-300
      `} id="tiragemlivre">
      <h1 className={`text-center text-2xl xl:text-8xl xl:pt-20 xl:pb-10`}>Tiragem Livre</h1>
      <p className={`text-center text-2xl xl:text-3xl px-4 font-pt-mono`}>
        Essa é uma leitura para você que está cheia de perguntas específicas e quer ter a liberdade de contemplar as reflexões que o Tarot traz em resposta a cada uma delas.
      </p>
      <p className={`text-center text-2xl xl:text-3xl px-4 font-pt-mono`}>
        Então, em um formato mais livre, conversamos um pouco sobre seus questionamentos, levando-os ao Tarot e fazendo a leitura do que ele traz para cada assunto.
      </p>
      <p className={`flex justify-center items-center gap-3 text-center font-pt-mono text-2xl xl:text-3xl px-4`}>
        <Clock />Duração de 1 hora e 20 minutos; online, em tempo real ou gravada.
      </p>
    </div>
  )
}