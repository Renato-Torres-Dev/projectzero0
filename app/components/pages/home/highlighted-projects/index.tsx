import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectPixel } from "./project-card/pixel"
import { Link } from "@/app/components/links"
import { HiArrowNarrowRight } from "react-icons/hi"
import { ProjectMouraBr } from "./project-card/moura-br"
import { ProjectMouraAr } from "./project-card/moura-ar"

export const HighLightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em Destaque"/>
      <HorizontalDivider className="mb-16"/>

      <div>
        <ProjectPixel />
        <HorizontalDivider className="my-16" />
        <ProjectMouraBr />
        <HorizontalDivider className="my-16" />
        <ProjectMouraAr />
        <HorizontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
          <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}