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
        <h1 className={`text-center text-6xl lg:text-8xl font-allura`}>Leve Tarot</h1>
      </div>

      <Accordion>
        <AccordionItem indicator key="1" aria-label="O que é o Tarot Terapêutico ?" title={<span style={{ color: '#f0f0f0' }}>O que é o Tarot Terapêutico ?</span>} className={`text-3xl xl:text-6xl font-allura`}>
          <p className={`px-2 lg:px-20 text-center text-2xl 2xl:text-3xl tracking-widest font-pt-mono`}>
            O Tarot é uma ferramenta de autoconhecimento, que representa um mistério para muitos de nós. Nada que também não aconteça com a própria temática ‘autoconhecimento’, que, culturalmente, foi tão afastada de nós... Mas, relaxa, nós estamos aqui, justamente, em prol dessa merecida reconexão!
          </p>
        </AccordionItem>
        <AccordionItem indicator key="2" aria-label="Como Experienciar o Tarot Terapêutico ?" title={<span style={{ color: '#f0f0f0' }}>Como Experienciar o Tarot Terapêutico ?</span>} className={`text-3xl xl:text-6xl font-allura`} >
          <p className={`px-2 lg:px-20 text-center text-2xl 2xl:text-3xl tracking-widest font-pt-mono`}>
            Uma Tiragem de Tarot acontece no AGORA… é claro que podem vir cartas que te ajudem na compreensão de energias do passado, e, certamente, você colherá conselhos e orientações para o futuro, mas, é importante perceber, que as mensagens estão se manifestando no presente, fortalecendo seu processo de autoconhecimento e sua tomada de consciência no agora!
          </p>
        </AccordionItem>
        <AccordionItem indicator key="3" aria-label="Quando Recorrer ao Tarot Terapêutico ?" title={<span style={{ color: '#f0f0f0' }}>Quando Recorrer ao Tarot Terapêutico ?</span>} className={`text-3xl xl:text-6xl font-allura`}>
          <p className={`px-2 lg:px-20 text-center text-2xl 2xl:text-3xl tracking-widest font-pt-mono`}>
            Sempre que estiver em busca de clareza e apoio para suas intenções, ações, decisões… O Tarot será bem-vindo, te beneficiando com as revelações que já estão disponíveis para você.
          </p>
        </AccordionItem>
      </Accordion>

      <Link href="/servicos/tarot" className={`w-full rounded-3xl bg-purple-500 text-white text-xl mt-8 px-4 py-2 font-pt-mono`}>Saiba Mais</Link>
    </div>
  )
}