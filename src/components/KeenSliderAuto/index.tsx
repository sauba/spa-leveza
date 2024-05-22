import amai from "@/assets/amai.svg"
import argoSurfboards from "@/assets/argoSurfboards.svg"
import beriSantana from "@/assets/beriSantana.svg"
import caboStoAgostinho from "@/assets/caboStoAgostinho.svg"
import dBoinha from "@/assets/dBoinhaBarEPetiscos.svg"
import diretoria from "@/assets/diretoria.svg"
import ieli from "@/assets/igrejaEvangelicaLivreItapuama.svg"
import logoJoaoParatleta from "@/assets/logoJoaoParatleta.png"
import mourasProducoesArtisticas from "@/assets/mourasProducoesArtisticas.svg"
import reservaDaCidadania from "@/assets/reservaDaCidadania.svg"
import sharkSurfboards from "@/assets/shark.svg"
import sosPranchas from "@/assets/sosPranchas.svg"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"

const animation = { duration: 60000, easing: (t: number) => t }

export default function KeenSliderAuto() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(12, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 12, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 12, true, animation)
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 4 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 6, spacing: 32 },
      },
    },
  })
  return (
    <div ref={sliderRef} className="keen-slider my-8 py-8">

      <div className="keen-slider__slide number-slide1">
        <Image
          src={argoSurfboards}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>


      <div className="keen-slider__slide number-slide1">
        <Image
          src={caboStoAgostinho}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image
          src={beriSantana}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>
      <div className="keen-slider__slide number-slide3">
        <Image
          src={dBoinha}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>
      <div className="keen-slider__slide number-slide4">
        <Image
          src={ieli}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={logoJoaoParatleta}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={reservaDaCidadania}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={amai}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={mourasProducoesArtisticas}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-full`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={sosPranchas}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={diretoria}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={sharkSurfboards}
          width={380}
          height={380}
          alt=""
          priority
          className={`rounded-3xl`}
        />
      </div>
    </div>
  )
}
