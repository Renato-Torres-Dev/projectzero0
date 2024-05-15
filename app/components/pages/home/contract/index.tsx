import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { VerticalDivider } from "@/app/components/divider/vertical"
import Question from "@/app/components/question"
import { SectionTitle } from "@/app/components/section-title"

export const Contract = () => {
  return(
    <section className="container py-16">
      <SectionTitle subtitle="experiência" title="Por Que Contratar-nos?" className="items-center text-center mb-16"/>
      
      <Question title="Abordagem Personalizada" content="Reconhecemos que cada cliente é único, com desafios e objetivos específicos. Por isso, adotamos uma abordagem personalizada para cada projeto, adaptando nossos serviços para atender às necessidades individuais de cada empresa. Trabalhamos em estreita colaboração com nossos clientes desde o início, ouvindo suas necessidades, compreendendo suas metas e desenvolvendo estratégias sob medida que geram resultados significativos."/>
      
      <Question title="Profissionalismo e Dedicação" content="Nossa equipe é composta por profissionais altamente qualificados e dedicados, apaixonados por oferecer serviços da mais alta qualidade em todas as etapas do processo. Nosso compromisso com a excelência e a satisfação do cliente é evidente em cada interação, desde a consulta inicial até a entrega final do projeto."/>

      <Question title="Inovação Constante" content="Estamos sempre à frente das últimas tendências e tecnologias do mercado, garantindo que nossos clientes tenham acesso às soluções mais inovadoras e eficazes disponíveis. Investimos continuamente em pesquisa e desenvolvimento, explorando novas oportunidades e abordagens para melhor atender às necessidades em constante evolução de nossos clientes."/>

      <Question title="Resultados Mensuráveis" content="Nossa abordagem baseada em dados nos permite oferecer resultados mensuráveis e tangíveis para nossos clientes. Utilizamos métricas e KPIs específicos para acompanhar o progresso do projeto e demonstrar o ROI de nossos serviços, garantindo transparência e confiança em nossas entregas."/>
      
      <Question title="Experiência Comprovada" content="Ao longo dos anos, acumulamos um histórico sólido de sucesso, demonstrando nossa capacidade de enfrentar desafios complexos e entregar resultados excepcionais para nossos clientes. Nossa experiência abrange uma ampla gama de setores e tipos de projetos, o que nos permite oferecer insights valiosos e soluções eficazes para uma variedade de necessidades empresariais."/>

    </section>
  )
}