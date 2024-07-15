import { Accordion, AccordionItem } from "@nextui-org/react";
import { ArrowCircleDown } from "@phosphor-icons/react";
import Link from "next/link";
import VideoPlayer from "../VideoPlayer";

export default function LeveTarot() {
  return (
    <div className={`
        w-full
        levetarot
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        font-caveat
        bg-own-roxo
        text-zinc-100
      `} id="levetarot">
      <div className={`w-full absolute z-30 py-8`}>
        <h1 className={`text-center text-6xl lg:text-8xl square-peg-regular pb-4 lg:pt-0`}>Leve Tarot</h1>

        <Accordion className="text-zinc-400 rounded-3xl">
          <AccordionItem indicator key="1" aria-label="O que é ?" title={<span style={{ fontSize: '20px', display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: '#ffffff', color: '#A9A9A9', borderRadius: '32px', borderColor: 'white', outline: 'none', padding: '16px', width: '300px', margin: 'auto' }}><ArrowCircleDown />O que é ?</span>} className={`mx-24 text-3xl xl:text-6xl font-pt-mono`}>
            <p className={`px-2 lg:px-20 py-4 text-center text-xl 2xl:text-2xl tracking-wider font-pt-mono text-zinc-100 bg-own-roxo/50 rounded-xl`}>
              Tarot, uma sabedoria milenar que podemos aproximar das nossas vidas  através das leituras, também conhecidas como tiragens. Vamos entender juntas. O Tarot é uma ferramenta de autoconhecimento, que representa um mistério para muitos de nós. Nada que também não aconteça com a própria temática ‘autoconhecimento’, que, culturalmente, foi tão afastada de nós... Mas, relaxa, nós estamos aqui, justamente, em prol dessa merecida reconexão!
            </p>
          </AccordionItem>
          <AccordionItem indicator key="2" aria-label="Como Experienciar ?" title={<span style={{ fontSize: '20px', display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: '#ffffff', color: '#A9A9A9', borderRadius: '32px', borderColor: 'white', outline: 'none', padding: '16px', width: '300px', margin: 'auto' }}><ArrowCircleDown />Como Experienciar ?</span>} className={`mx-24 text-3xl xl:text-6xl font-pt-mono`} >
            <p className={`px-2 lg:px-20 py-4 text-center text-xl 2xl:text-2xl tracking-wider font-pt-mono text-zinc-100 bg-own-roxo/50 rounded-xl`}>
              Uma Tiragem de Tarot acontece no AGORA… é claro que podem vir cartas que te ajudem na compreensão de energias do passado, e, certamente, você colherá conselhos e orientações para o futuro, mas, é importante perceber, que as mensagens estão se manifestando no presente, fortalecendo seu processo de autoconhecimento e sua tomada de consciência no agora!
            </p>
          </AccordionItem>
          <AccordionItem indicator key="3" aria-label="Quando Recorrer ?" title={<span style={{ fontSize: '20px', display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: '#ffffff', color: '#A9A9A9', borderRadius: '32px', borderColor: 'white', outline: 'none', padding: '16px', width: '300px', margin: 'auto' }}><ArrowCircleDown />Quando Recorrer ?</span>} className={`mx-24 text-3xl xl:text-6xl font-pt-mono`}>
            <p className={`px-2 lg:px-20 py-4 text-center text-xl 2xl:text-2xl tracking-wider font-pt-mono text-zinc-100 bg-own-roxo/50 rounded-xl`}>
              Sempre que estiver em busca de clareza e apoio para suas intenções, ações, decisões… O Tarot será bem-vindo, te beneficiando com as revelações que já estão disponíveis para você.
            </p>
          </AccordionItem>
        </Accordion>

        <Link href="/servicos/tarot" className={`w-4/12 rounded-3xl bg-own-roxo text-zinc-100 text-xl mt-32 px-4 py-2 font-pt-mono z-10`}>Saiba Mais</Link>
      </div>
      <VideoPlayer />
    </div>
  )
}