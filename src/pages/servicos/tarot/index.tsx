import NavbarDropdownMenuPages from "@/components/NavbarDropdownPages";
import SpanWhatsapp from "@/components/SpanWhatsapp";
import { Clock } from "@phosphor-icons/react";
import Image from "next/image";
import "./styles.css";

export default function LeveTarotPage() {
  return (
    <div className={`w-full min-h-screen flex flex-col bg-own-roxo text-zinc-100 overflow-hidden`} id="levetarotfull">
      <NavbarDropdownMenuPages />

      <h1 className={`text-center text-8xl square-peg-regular pt-8`}>Leve Tarot</h1>

      <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3`}>
        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/01.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular`}>Perguntas</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}>Essa tiragem é pra você que tem perguntas específicas. Você pode fazer até 5 perguntas e as cartas serão tiradas nesta energia.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 45 minutos.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/02.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular`}>Áreas da Vida</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}>Formato onde tiramos as cartas para leitura das áreas pessoal, profissional, amorosa, familiar, financeira, de saúde e espiritual.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 1 hora.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/03.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular`}>Cruz Celta</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}>Aqui, olhamos a fundo uma situação, contemplando o que a atravessa e está posto, o oculto, presente, passado, futuro, você, sentimentos, o externo e possível resultado.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 1h30 minutos.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/04.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular`}>Ciclo Lunar</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}>Previsão do seu mês lunar, com a energia pra cada fase da lua (nova, crescente, cheia e minguante). Excelente pra quem busca clareza, planejamento e ação.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 1h30 minutos.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/05.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular`}>Ano Novo Pessoal</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}>Essa é sua tiragem de aniversário. Ela contempla a energia de cada um dos 12 meses do seu novo ciclo.
              Também se aplica a Ano Novo.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 1h30 minutos.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/06.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular`}>Tarot Astrológico</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}>Aqui, fazemos uma mandala com as 12 casas astrológicas, onde cada signo representa um aspecto da vida. São vistos aspectos práticos e profundos.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 2 horas.</p>
          </div>
        </div>

      </div>

      <SpanWhatsapp />
    </div>
  )
}