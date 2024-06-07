import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

export default function LeveTarot() {
  return (
    <div className={`
        w-full
        min-h-screen
        levetarot
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        bg-zinc-400
        text-zinc-100
      `} id="levetarot">
      <div>
        <h1 className={`text-center text-8xl font-caveat`}>Leve Tarot</h1>
      </div>
      <Accordion>
        <AccordionItem indicator key="1" aria-label="O que é o Tarot Terapêutico ?" title="O que é o Tarot Terapêutico ?" className={`text-3xl xl:text-6xl font-caveat`}>
          <p className={`px-4 lg:px-24 text-center text-3xl 2xl:text-5xl tracking-wider font-bad-script text-zinc-100`}>
            O Tarot é uma ferramenta de autoconhecimento, que representa um mistério para muitos de nós. Nada que também não aconteça com a própria temática ‘autoconhecimento’, que, culturalmente, foi tão afastada de nós... Mas, relaxa, nós estamos aqui, justamente, em prol dessa merecida reconexão!
          </p>
        </AccordionItem>
        <AccordionItem indicator key="2" aria-label="Como Experienciar o Tarot Terapêutico ?" title="Como Experienciar o Tarot Terapêutico ?" className={`text-3xl xl:text-6xl font-caveat`} >
          <p className={`px-4 lg:px-24 text-center text-3xl 2xl:text-5xl tracking-wider font-bad-script text-zinc-100`}>
            Uma Tiragem de Tarot acontece no AGORA… é claro que podem vir cartas que te ajudem na compreensão de energias do passado, e, certamente, você colherá conselhos e orientações para o futuro, mas, é importante perceber, que as mensagens estão se manifestando no presente, fortalecendo seu processo de autoconhecimento e sua tomada de consciência no agora!
          </p>
        </AccordionItem>
        <AccordionItem indicator key="3" aria-label="Quando Recorrer ao Tarot Terapêutico ?" title="Quando Recorrer ao Tarot Terapêutico ?" className={`text-3xl xl:text-6xl font-caveat`}>
          <p className={`px-4 lg:px-24 text-center text-3xl 2xl:text-5xl tracking-wider font-bad-script text-zinc-100`}>
            Sempre que estiver em busca de clareza e apoio para suas intenções, ações, decisões… O Tarot será bem-vindo, te beneficiando com as revelações que já estão disponíveis para você.
          </p>
        </AccordionItem>
      </Accordion>

      <Link href="/servicos/tarot" className={`rounded-3xl bg-purple-500 text-white text-2xl mt-8 p-4 font-caveat`}>Saiba Mais</Link>
    </div>
  )
}