import { Link } from "@/app/components/links"
import { SectionTitle } from "@/app/components/section-title"
import { Metadata } from "next"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const metadata: Metadata = {
  title: "Unicoder - Desenvolvimento de Site",
  icons: "/images/icons/unicoder-icon.svg",
}

export default function SitePage() {
  return (
    <section className="w-full sm:min-h-[600px] flex flex-col items-center justify-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(/images/products/dev-site.webp) no-repeat center/cover`
        }}
      />

      <SectionTitle 
        subtitle="serviço"
        title="Desenvolvimento de Site"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Nosso serviço de Desenvolvimento de Sites é uma resposta personalizada para 
            empresas que buscam estabelecer uma presença online forte e eficaz. Empregamos 
            as tecnologias mais recentes e seguimos as melhores práticas de design para criar 
            sites que não apenas sejam visualmente atraentes, mas também altamente funcionais 
            e responsivos em diferentes dispositivos.
        </p>

        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Independentemente do tamanho ou complexidade, nossa equipe especializada está 
            pronta para criar desde sites institucionais simples até plataformas de e-commerce 
            robustas. Trabalhamos em estreita colaboração com cada cliente para entender 
            suas metas e necessidades específicas, garantindo que o resultado final não apenas 
            atenda, mas exceda suas expectativas.
        </p>
        
        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Nosso processo de desenvolvimento é transparente e colaborativo, com uma comunicação 
            constante para garantir que cada etapa seja realizada de acordo com os requisitos do 
            cliente. Nossa missão é não apenas entregar um site, mas também garantir que ele seja 
            uma ferramenta poderosa para impulsionar o sucesso e o crescimento do negócio de 
            nossos clientes online.
        </p>
    

      <Link href="/services">
        <HiArrowNarrowLeft size={20}/>
        Voltar para serviços
      </Link>

    </section>
  )
}