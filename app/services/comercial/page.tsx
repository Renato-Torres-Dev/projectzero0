import { Link } from "@/app/components/links"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export default function EcommercePage() {
  return (
    <section className="w-full sm:min-h-[600px] flex flex-col items-center justify-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(/images/products/comercial.webp) no-repeat center/cover`
        }}
      />

      <SectionTitle 
        subtitle="serviço"
        title="Comerciais e Propagandas"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Nosso serviço de Comerciais e Propagandas vai além da simples criação de anúncios; 
            oferecemos uma abordagem completa para promover a marca e os produtos de nossos 
            clientes de forma eficaz. Começamos por compreender profundamente a identidade da 
            marca e os objetivos específicos de marketing. Em seguida, desenvolvemos estratégias 
            de marketing audiovisual altamente eficazes, utilizando não apenas técnicas 
            tradicionais, mas também inovadoras, para garantir que cada comercial seja único, 
            criativo e envolvente.
        </p>

        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Utilizando técnicas avançadas de storytelling, criamos narrativas cativantes que 
            ressoam com o público-alvo, deixando uma impressão duradoura e criando conexões 
            emocionais com a marca. Nossa equipe especializada, composta por profissionais 
            talentosos e experientes, garante a produção de comerciais de alta qualidade, 
            desde a pré-produção até a pós-produção.
        </p>
        
        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Além disso, nos dedicamos à distribuição estratégica dos comerciais, garantindo 
            que alcancem o público certo nos canais adequados. Monitoramos de perto o desempenho 
            de cada campanha, analisando métricas-chave para avaliar o impacto e ajustar as 
            estratégias conforme necessário.
        </p>
    

      <Link href="/services">
        <HiArrowNarrowLeft size={20}/>
        Voltar para serviços
      </Link>

    </section>
  )
}