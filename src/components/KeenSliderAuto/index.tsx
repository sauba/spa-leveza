import carta1 from "../../../public/01.svg";
import carta10 from "../../../public/010.svg";
import carta11 from "../../../public/011.svg";
import carta12 from "../../../public/012.svg";
import carta13 from "../../../public/013.svg";
import carta14 from "../../../public/014.svg";
import carta15 from "../../../public/015.svg";
import carta16 from "../../../public/016.svg";
import carta17 from "../../../public/017.svg";
import carta18 from "../../../public/018.svg";
import carta19 from "../../../public/019.svg";
import carta2 from "../../../public/02.svg";
import carta20 from "../../../public/020.svg";
import carta21 from "../../../public/021.svg";
import carta22 from "../../../public/022.svg";
import carta3 from "../../../public/03.svg";
import carta4 from "../../../public/04.svg";
import carta5 from "../../../public/05.svg";
import carta6 from "../../../public/06.svg";
import carta7 from "../../../public/07.svg";
import carta8 from "../../../public/08.svg";
import carta9 from "../../../public/09.svg";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

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
        slides: { perView: 5.5, spacing: 4 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 11.5, spacing: 8 },
      },
    },
  })
  return (
    <div ref={sliderRef} className="keen-slider">

      <div className="keen-slider__slide number-slide1">
        <Image
          src={carta1}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>


      <div className="keen-slider__slide number-slide1">
        <Image
          src={carta2}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide1">
        <Image
          src={carta3}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>


      <div className="keen-slider__slide number-slide2">
        <Image
          src={carta4}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>
      <div className="keen-slider__slide number-slide3">
        <Image
          src={carta5}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>
      <div className="keen-slider__slide number-slide4">
        <Image
          src={carta6}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta7}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta8}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta9}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta10}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta11}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta12}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta13}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta14}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta15}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta16}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta17}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta18}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta19}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta20}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta21}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image
          src={carta22}
          width={156}
          height={156}
          alt=""
          priority
          className={`rounded-lg hover:transition-transform hover:scale-110`}
        />
      </div>
    </div>
  )
}
