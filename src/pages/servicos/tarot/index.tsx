import NavbarDropdownMenuPages from "@/components/NavbarDropdownPages";
import SpanWhatsapp from "@/components/SpanWhatsapp";
import { Clock } from "@phosphor-icons/react";
import Image from "next/image";
import { Fragment } from "react";
import "./styles.css";

export default function LeveTarotPage() {
  return (
    <div className={`w-full min-h-screen flex flex-col bg-own-roxo text-zinc-100 overflow-hidden`} id="levetarotfull">
      <NavbarDropdownMenuPages />

      <Fragment>
        <span className={`mx-auto bg-fundo-dani-cartas bg-no-repeat bg-contain py-96`}>
          <h1 className={`text-center text-8xl square-peg-regular pt-8`}>Leve Tarot</h1>
        </span>
      </Fragment>

      {/* <h1 className={`text-center text-8xl square-peg-regular pt-8`}>Leve Tarot</h1> */}

      {/* <Image src={`/danicartas.svg`} width={300} height={300} className={`rounded-full mx-auto hover:transition-transform hover:scale-110 hover:cursor-none`} priority alt="" /> */}

      <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3`}>
        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/01.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular pb-2`}>Perguntas</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-8 font-pt-mono`}>Essa tiragem é pra você que tem perguntas específicas. Você pode fazer até 5 perguntas e as cartas serão tiradas nesta energia.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg pb-8 xl:pb-0`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 45 minutos.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/02.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular pb-2`}>Áreas da Vida</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-8 font-pt-mono`}>Nesse formato, tiramos as cartas para fazer a leitura da energia da sua área pessoal, profissional, amorosa, familiar, financeira, de saúde e espiritual.</p>
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
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular pb-2`}>Cruz Celta</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-8 font-pt-mono`}>Um modelo em que nos debruçamos sobre uma situação, observando o que está a atravessando, o que está posto, que se tem conhecimento, o que está oculto, questões do passado e futuro recentes relacionados a situação, atitude atual, como os  outros interagem com esta questão, seus medos/esperanças e o possível resultado dessa situação vivida.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 1 hora e 30 minutos.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/04.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular pb-2`}>Ciclo Lunar</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-8 font-pt-mono`}>Aqui, tiramos as cartas trazendo a previsão do seu ciclo lunar. Olhamos pras 4 fases (lua nova, lua crescente, lua cheia e lua minguante), trazendo a energia de cada uma e observando como as sugestões se relacionam. Excelente pra quem busca clareza, planejamento e ação. É possível fazer algumas perguntas durante a leitura.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 1 hora e 30 minutos.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/05.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular pb-2`}>Ano Novo Pessoal</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-8 font-pt-mono`}>Essa é sua tiragem de aniversário, feita a partir de sua data de aniversário, com a manifestação da energia pra cada um dos meses do seu novo ciclo, até a data do próximo.</p>
          </div>

          <div className={`card-footer bg-zinc-100 rounded-b-lg`}>
            <p className={` flex justify-center items-center gap-3 text-center xl:text-2xl text-zinc-400 px-1 py-4 font-pt-mono`}><Clock />aproximadamente 1 hora e 30 minutos.</p>
          </div>
        </div>

        <div className={`card m-2 `}>
          <div className={`card-header`}>
            <Image src={`/06.svg`} width={168} height={120} className={`w-full rounded-t-xl mx-auto`} priority alt="" />
          </div>

          <div className={`card-body bg-zinc-100 xl:h-96`}>
            <p className={`text-center text-6xl text-zinc-400 pt-1 font-bold square-peg-regular pb-2`}>Tarot Astrológico</p>
            <p className={`text-center xl:text-2xl text-zinc-400 px-1 py-8 font-pt-mono`}>Essa é uma leitura mais ampla. Ela traz um olhar sobre seus aspectos naturais, olhando sua energia de ação, material, mental e emocional. E, segue contemplando as 12 casas astrológicas. Cada casa astrológica é representada por um signo, que, por sua vez, manifesta uma temática da nossa vida. Observação: não é mapa astral e não precisa ter mapa astral.</p>
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