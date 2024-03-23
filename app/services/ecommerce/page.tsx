import { Link } from "@/app/components/links"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export default function EcommercePage() {
  return (
    <section className="w-full sm:min-h-[600px] flex flex-col items-center justify-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(/images/products/ecommerce.webp) no-repeat center/cover`
        }}
      />

      <SectionTitle 
        subtitle="serviço"
        title="E-Commerce Profissional"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Nosso serviço de E-commerce Profissional é uma solução abrangente para empresas 
            que buscam estabelecer ou expandir suas operações de comércio eletrônico. Nossa 
            equipe especializada trabalha em estreita colaboração com cada cliente para entender 
            suas necessidades específicas e desenvolver uma plataforma personalizada que atenda 
            a esses requisitos.
        </p>

        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Utilizando tecnologias avançadas, desenvolvemos plataformas intuitivas e seguras, 
            garantindo uma experiência de compra excepcional para os clientes. Desde a fase 
            inicial de configuração até o lançamento e além, oferecemos suporte contínuo para 
            garantir que a plataforma esteja funcionando sem problemas e otimizada para o sucesso.
        </p>
        
        <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Nossos serviços não se limitam apenas ao desenvolvimento da plataforma. 
            Também fornecemos consultoria estratégica para maximizar a eficácia das operações 
            de e-commerce, implementando as melhores práticas e oferecendo insights valiosos 
            para impulsionar as vendas online.
        </p>
    

      <Link href="/services">
        <HiArrowNarrowLeft size={20}/>
        Voltar para serviços
      </Link>

    </section>
  )
}