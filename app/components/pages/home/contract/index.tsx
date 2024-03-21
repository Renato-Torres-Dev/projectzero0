import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { VerticalDivider } from "@/app/components/divider/vertical"
import { SectionTitle } from "@/app/components/section-title"

export const Contract = () => {
  return(
    <section className="container py-16">
      <SectionTitle subtitle="experiência" title="Por Que Contratar-nos?" className="items-center text-center"/>
      <HorizontalDivider className="mb-16"/>

      <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
        <div>
          <h1 className="flex items-center gap-3 font-medium text-2xl text-gray-50">
            Abordagem Personalizada
          </h1>
          <p className="text-gray-400 text-lg my-6">
            Reconhecemos que cada cliente é único, com desafios e
            objetivos específicos. Por isso, adotamos uma abordagem 
            personalizada para cada projeto, adaptando nossos serviços para 
            atender às necessidades individuais de cada empresa. Trabalhamos
            em estreita colaboração com nossos clientes desde o início, 
            ouvindo suas necessidades, compreendendo suas metas e desenvolvendo 
            estratégias sob medida que geram resultados significativos.
          </p>
        </div>
        <VerticalDivider/>
        <div>
          <h1 className="flex items-center gap-3 font-medium text-2xl text-gray-50">
            Profissionalismo e Dedicação
          </h1>
          <p className="text-gray-400 text-lg my-6">
            Nossa equipe é composta por profissionais altamente qualificados 
            e dedicados, apaixonados por oferecer serviços da mais alta qualidade 
            em todas as etapas do processo. Nosso compromisso com a excelência e 
            a satisfação do cliente é evidente em cada interação, desde a consulta 
            inicial até a entrega final do projeto.
          </p>
        </div>
        <VerticalDivider />
        <div>
          <h1 className="flex items-center gap-3 font-medium text-2xl text-gray-50">
            Inovação Constante
          </h1>
          <p className="text-gray-400 text-lg my-6">
            Estamos sempre à frente das últimas tendências e tecnologias 
            do mercado, garantindo que nossos clientes tenham acesso às 
            soluções mais inovadoras e eficazes disponíveis. Investimos 
            continuamente em pesquisa e desenvolvimento, explorando novas 
            oportunidades e abordagens para melhor atender às necessidades 
            em constante evolução de nossos clientes.
          </p>
        </div>
      </div>
      <HorizontalDivider />
      <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
        <div>
          <h1 className="flex items-center gap-3 font-medium text-2xl text-gray-50">
            Resultados Mensuráveis
          </h1>
          <p className="text-gray-400 text-lg my-6">
            Nossa abordagem baseada em dados nos permite oferecer resultados 
            mensuráveis e tangíveis para nossos clientes. Utilizamos métricas 
            e KPIs específicos para acompanhar o progresso do projeto e demonstrar 
            o ROI de nossos serviços, garantindo transparência e confiança em 
            nossas entregas.
          </p>
        </div>
        <VerticalDivider />
        <div>
          <h1 className="flex items-center gap-3 font-medium text-2xl text-gray-50">
            Experiência Comprovada
          </h1>
          <p className="text-gray-400 text-lg my-6">
            Ao longo dos anos, acumulamos um histórico sólido de sucesso, 
            demonstrando nossa capacidade de enfrentar desafios complexos 
            e entregar resultados excepcionais para nossos clientes. Nossa 
            experiência abrange uma ampla gama de setores e tipos de projetos, 
            o que nos permite oferecer insights valiosos e soluções eficazes 
            para uma variedade de necessidades empresariais.
          </p>
        </div>
      </div>
    </section>
  )
}