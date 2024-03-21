import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { DevSite } from "./products-card/develop"
import { ECommerce } from "./products-card/ecommerce"
import { Comercial } from "./products-card/comercial"

export const Produtos = () => {
  return (
    <section className="container py-6">
      <SectionTitle subtitle="jobs" title="Nossos Serviços" className="items-center text-center"/>

      <p className="text-gray-400 mt-3 mb-10">
        Nossa equipe especializada e profissional, se destaca dentro do mercado, por
        sempre atender o que o cliente precisa, com a maior praticidade e colocando 
        a sua empresa em uma importante colocação no mercado.
      </p>

      <div>
        <DevSite />
        <HorizontalDivider className="mt-8" />
        <ECommerce />
        <HorizontalDivider className="mt-8" />
        <Comercial />
      </div>
    </section>
  )
}