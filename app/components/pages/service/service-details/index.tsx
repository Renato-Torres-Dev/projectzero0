import { Button } from "@/app/components/button"
import { Link } from "@/app/components/links"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { FiGlobe } from "react-icons/fi"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"

export const ServiceDetails = () => {
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

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Primeiro Portfolio criado, utilizando técnicas de HTML5, CSS3, JavaScript e Bootstrap. Sempre procurando manter o código limpo e de fácil compreensão, e o site responsivo para poder comportar todos os tipos de telas.
      </p>

      <Link href="/services">
        <HiArrowNarrowLeft size={20}/>
        Voltar para serviços
      </Link>
    </section>
  )
}