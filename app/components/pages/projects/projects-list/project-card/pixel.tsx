import Image from "next/image"

export const ProjectPixelCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow:hidden border-2 border-gray-800 hover:border-red-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-38 overflow-hidden">
        <Image 
          src={"/images/bgportfolio.jpg"} 
          alt="Renato Portfolio"
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-red-500 transition-all">Portfólio PixelArt</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">Primeiro Portfólio produzido. Como um amante da PixelArt, eu fiz um pequeno projeto de Portfólio quando estava iniciando os meus cursos, demonstrando algumas técnicas que havia aprendido durante o curso.</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">HTML5, CSS3, JavaScript</span>
      </div>
    </div>
  )
}