import { Link } from "@/app/components/links"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const ServicesIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle 
        subtitle="serviços"
        title="O que ofertamos..."
        className="text-center items-center [&>h3]:text-4xl"  
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Bem-vindos a Nossos Serviços! Nós somos uma empresa dedicada a oferecer soluções 
          inovadoras e personalizadas para atender às necessidades únicas de nossos clientes. 
          Com uma equipe de especialistas altamente qualificados e uma abordagem centrada no 
          cliente, estamos comprometidos em fornecer serviços de alta qualidade que impulsionem 
          o sucesso e o crescimento de nossos parceiros comerciais.
        </p>
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Nossos serviços abrangem uma ampla gama de áreas, desde consultoria estratégica e 
          desenvolvimento de software até marketing digital e suporte técnico. Estamos aqui 
          para ajudar empresas de todos os tamanhos e setores a atingirem seus objetivos de 
          negócios, oferecendo expertise, criatividade e suporte contínuo em todas as etapas 
          do processo.
        </p>
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Ao escolher Nossos Serviços, você está optando por uma parceria sólida e confiável, 
          onde seus objetivos se tornam nossa prioridade número um. Estamos entusiasmados para 
          colaborar com você e ajudar a transformar suas ideias em realidade. Juntos, podemos 
          alcançar novos patamares de sucesso e prosperidade.
          CONFIRA ABAIXO OS NOSSOS SERVIÇOS!
        </p>
        <Link href={"/"}>
          <HiArrowNarrowLeft size={20}/>
          Voltar para a Home
        </Link>
      </div>
    </section>
  )
}