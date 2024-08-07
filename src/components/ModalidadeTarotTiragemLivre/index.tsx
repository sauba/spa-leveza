import { Clock, MonitorPlay } from "@phosphor-icons/react";

export default function ModalidadeTarotTiragemLivre() {
  return (
    <div className={`
        w-full
        xl:px-4
        tiragemlivre
        flex
        flex-col
        justify-center
        items-center
        text-center
        square-peg-regular
        outline-none
        border-none
        hover:cursor-pointer
      `} id="tiragemlivre">
      <h1 className={`text-center text-6xl xl:text-8xl xl:py-10`}>Tiragem Livre</h1>
      <p className={`text-center text-lg xl:text-2xl px-4 font-pt-mono`}>
        Essa é uma leitura para você que está cheia de perguntas específicas e quer ter a liberdade de contemplar as reflexões que o Tarot traz em resposta a cada uma delas.
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