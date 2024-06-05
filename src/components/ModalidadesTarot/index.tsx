import ModalidadeTarotTiragemAreasDaVida from "../ModalidadeTarotTiragemAreasDaVida"
import ModalidadeTarotTiragemLivre from "../ModalidadeTarotTiragemLivre"
import ModalidadeTarotTiragemLunar from "../ModalidadeTarotTiragemLunar"

export default function ModalidadesTarot() {
  return (
    <div className={`
        w-full
        min-h-screen
        modalidadestarot
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        bg-zinc-300
      `} id="modalidadestarot">
      <ModalidadeTarotTiragemLunar />
      <ModalidadeTarotTiragemAreasDaVida />
      <ModalidadeTarotTiragemLivre />
      <p>
        Caminhar com o Tarot te aproxima de realizações e resultados bem mais conscientes,
        te trazendo muita Leveza para Viver.
      </p>
    </div>
  )
}