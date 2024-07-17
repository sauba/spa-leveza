import { Accordion, AccordionItem } from "@nextui-org/react";
import { ArrowCircleDown } from "@phosphor-icons/react";
import Link from "next/link";
import VideoPlayer from "../VideoPlayer";

export default function LeveTarot() {
  return (
    <div className={`
        w-full
        min-h-screen
        levetarot
        flex
        flex-col
        justify-start
        items-center
        text-center
        outline-none
        border-none
        font-caveat
        bg-own-roxo
        text-zinc-100
      `} id="levetarot">
      <div className={`w-full absolute z-30 my-16 py-4`}>
        <h1 className={`text-center text-8xl square-peg-regular`}>Leve Tarot</h1>

        <Accordion className="text-zinc-400 rounded-3xl py-8">
          <AccordionItem indicator key="1" aria-label="O que é ?" title={<span style={{ fontSize: '20px', display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: '#ffffff', color: '#A9A9A9', borderRadius: '32px', borderColor: 'white', outline: 'none', padding: '8px', width: '300px', margin: 'auto' }}><ArrowCircleDown />O que é ?</span>} className={`text-3xl xl:text-6xl font-pt-mono`}>
            <p className={`px-2 lg:px-20 py-4 text-center text-xl 2xl:text-2xl tracking-wider font-pt-mono text-zinc-100 bg-own-roxo/70 rounded-xl`}>
              O Tarot é uma ferramenta que desperta o sentir mais profundo, te conectando a sua sabedoria interior, através da interpretação das cartas.
            </p>
          </AccordionItem>
          <AccordionItem indicator key="2" aria-label="Como Experienciar ?" title={<span style={{ fontSize: '20px', display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: '#ffffff', color: '#A9A9A9', borderRadius: '32px', borderColor: 'white', outline: 'none', padding: '8px', width: '300px', margin: 'auto' }}><ArrowCircleDown />Como Experienciar ?</span>} className={`text-3xl xl:text-6xl font-pt-mono`} >
            <p className={`px-2 lg:px-20 py-4 text-center text-xl 2xl:text-2xl tracking-wider font-pt-mono text-zinc-100 bg-own-roxo/70 rounded-xl`}>
              Tenha o Tarot como um recurso terapêutico; busque sempre um profissional qualificado; escolha o modelo de tiragem que mais se conecta com o seu momento; e, se abra ao autoconhecimento.
            </p>
          </AccordionItem>
          <AccordionItem indicator key="3" aria-label="Quando Recorrer ?" title={<span style={{ fontSize: '20px', display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: '#ffffff', color: '#A9A9A9', borderRadius: '32px', borderColor: 'white', outline: 'none', padding: '8px', width: '300px', margin: 'auto' }}><ArrowCircleDown />Quando Recorrer ?</span>} className={`text-3xl xl:text-6xl font-pt-mono`}>
            <p className={`px-2 lg:px-20 py-4 text-center text-xl 2xl:text-2xl tracking-wider font-pt-mono text-zinc-100 bg-own-roxo/70 rounded-xl`}>
              Se você busca por autoconhecimento, despertar intuitivo, clareza sobre aspectos da vida... você já pode recorrer ao Tarot e se beneficiar das revelações disponíveis pra você.
            </p>
          </AccordionItem>
        </Accordion>

        <Link href="/servicos/tarot" className={`w-4/12 rounded-3xl bg-own-roxo text-zinc-100 text-xl px-4 py-2 font-pt-mono z-10`}>Saiba Mais</Link>
      </div>
      <VideoPlayer />
    </div>
  )
}