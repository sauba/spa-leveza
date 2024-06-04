import { Card } from "@nextui-org/card";

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
        text-white
        font-caveat
      `} id="levetarot">
      <Card className={`card`}>
        <p className={`card-header px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider`}>
          O que é o Tarot Terapêutico ?
        </p>

        <p className={`px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider`}>
          O Tarot é uma ferramenta de autoconhecimento, que representa um mistério para muitos de nós. Nada que também não aconteça com a própria temática ‘autoconhecimento’, que, culturalmente, foi tão afastada de nós... Mas, relaxa, nós estamos aqui, justamente, em prol dessa merecida reconexão!
        </p>
      </Card>


      <p className={`px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider`}>
        Como Experienciar o Tarot Terapêutico ?
      </p>

      <p className={`px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider`}>
        Uma Tiragem de Tarot acontece no AGORA… é claro que podem vir cartas que te ajudem na compreensão de energias do passado, e, certamente, você colherá conselhos e orientações para o futuro, mas, é importante perceber, que as mensagens estão se manifestando no presente, fortalecendo seu processo de autoconhecimento e sua tomada de consciência no agora!
      </p>

      <p className={`px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider`}>
        Quando Recorrer ao Tarot Terapêutico ?
      </p>

      <p className={`px-4 lg:px-24 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider`}>
        Sempre que estiver em busca de clareza e apoio para suas intenções, ações, decisões… o Tarot será bem-vindo, te beneficiando com as revelações que já estão disponíveis para você.
      </p>
    </div>
  )
}