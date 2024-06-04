import { Accordion, AccordionItem, Button } from "@nextui-org/react";

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
        bg-zinc-300
        font-caveat
      `} id="levetarot">
      <div>
        <h1 className={`text-center text-8xl`}>Leve Tarot</h1>
      </div>
      <Accordion>
        <AccordionItem indicator key="1" aria-label="O que é o Tarot Terapêutico ?" title="O que é o Tarot Terapêutico ?" className={`text-2xl xl:text-6xl`} >
          <p className={`px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl tracking-wider font-bad-script`}>
            O Tarot é uma ferramenta de autoconhecimento, que representa um mistério para muitos de nós. Nada que também não aconteça com a própria temática ‘autoconhecimento’, que, culturalmente, foi tão afastada de nós... Mas, relaxa, nós estamos aqui, justamente, em prol dessa merecida reconexão!
          </p>
        </AccordionItem>
        <AccordionItem indicator key="2" aria-label="Como Experienciar o Tarot Terapêutico ?" title="Como Experienciar o Tarot Terapêutico ?" className={`text-2xl xl:text-6xl`} >
          <p className={`px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl tracking-wider font-bad-script`}>
            Uma Tiragem de Tarot acontece no AGORA… é claro que podem vir cartas que te ajudem na compreensão de energias do passado, e, certamente, você colherá conselhos e orientações para o futuro, mas, é importante perceber, que as mensagens estão se manifestando no presente, fortalecendo seu processo de autoconhecimento e sua tomada de consciência no agora!
          </p>
        </AccordionItem>
        <AccordionItem indicator key="3" aria-label="Quando Recorrer ao Tarot Terapêutico ?" title="Quando Recorrer ao Tarot Terapêutico ?" className={`text-2xl xl:text-6xl`}>
          <p className={`px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl tracking-wider font-bad-script`}>
            Sempre que estiver em busca de clareza e apoio para suas intenções, ações, decisões… O Tarot será bem-vindo, te beneficiando com as revelações que já estão disponíveis para você.
          </p>
        </AccordionItem>
      </Accordion>

      <Button className={`rounded-3xl bg-purple-500 text-white text-3xl mt-8 py-2 px-4`}>Saiba Mais</Button>
    </div>
  )
}