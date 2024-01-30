import Image from "next/image"

export const ProjectMouraARCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow:hidden border-2 border-gray-800 hover:border-red-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-38 overflow-hidden">
        <Image 
          src={"/images/argentinacaba.png"} 
          alt="Renato Portfolio"
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-red-500 transition-all">Baterías Moura Argentina</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">Projeto realizado para Moura Argentina, site traduzido para espanhol e melhorado para melhor desempenho e usabilidade para os clientes locais.</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">HTML5, CSS3, JavaScript, Next.js</span>
      </div>
    </div>
  )
}