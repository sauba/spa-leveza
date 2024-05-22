import { Check } from "@phosphor-icons/react";

export default function ComoAcontece() {
  return (
    <div
      className={`
        como-acontece
        flex-col
        items-center
        text-center
        m-4
        lg:m-16
        p-4
        lg:p-8
        outline-none
        bg-amber-950
        bg-opacity-70
        text-white
        font-caveat
        rounded-3xl
        como-acontece
      `}
      id="como-acontece"
    >
      <p className={`text-center mb-4 xl:text-6xl text-2xl lg:text-4xl animate-skew-stop`}>Como Acontece ?</p>
      <p className={`text-center mb-4 xl:text-6xl text-2xl lg:text-4xl`}>
        Contamos com um formato acessível, pra você acompanhar no seu ritmo e ter apoio e inspirações na jornada.
      </p>

      <p className={`text-center mb-4 xl:text-6xl text-2xl lg:text-4xl`}>
        São 6 Módulos, cada um com duração de 2 meses, incluindo:
      </p>
      <div className={`flex-col justify-center items-center pt-2 lg:pt-4 leading-loose tracking-wider`}>
        <p className={`text-center flex justify-center items-center pb-1 text-xl lg:text-5xl`}>
          <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
          Acesso as aulas do módulo gravadas.
        </p>
        <p className={`text-center flex justify-center items-center py-1 text-xl lg:text-5xl`}>
          <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
          Meditações diferentes, a cada fase da Lua.
        </p>
        <p className={`text-center flex justify-center items-center py-1 text-xl lg:text-5xl`}>
          <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
          Rituais com instruções para manifestar durante todo o mês lunar.
        </p>
        <p className={`text-center flex justify-center items-center py-1 text-xl lg:text-5xl`}>
          <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
          Tiragem de Tarot na energia do grupo e das fases da Lua, a cada lunação.
        </p>
        <p className={`text-center flex justify-center items-center py-1 text-xl lg:text-5xl`}>
          <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
          Um Encontro por módulo, online, com datas predefinidas, aos sábados, das 9h às 12h.
        </p>
        <p className={`text-center flex justify-center items-center pt-8 lg:pt-16 text-2xl lg:text-6xl`}>
          E você ainda participa de uma Comunidade Exclusiva, recheada de trocas e dicas,
          além de configurar uma rede apoio massa, cheia de energia feminina.
        </p>
      </div>
    </div>
  )
}