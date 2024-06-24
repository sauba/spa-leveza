import ModalidadeTarotTiragemAreasDaVida from "@/components/ModalidadeTarotTiragemAreasDaVida";
import ModalidadeTarotTiragemLivre from "@/components/ModalidadeTarotTiragemLivre";
import ModalidadeTarotTiragemLunar from "@/components/ModalidadeTarotTiragemLunar";

export default function LeveTarotTypes() {
  return (
    <div className={`flex`} id="levetarotfull">
      <div className={`flex-col`}>
        <ModalidadeTarotTiragemAreasDaVida />
      </div>
      <div className={`flex-col`}>
        <ModalidadeTarotTiragemLivre />
        <ModalidadeTarotTiragemLunar />
      </div>
    </div>
  )
}