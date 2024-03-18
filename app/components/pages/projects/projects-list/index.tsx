import Link from "next/link"
import { ProjectPixelCard } from "./project-card/pixel"
import { ProjectMouraBRCard } from "./project-card/mourabr"
import { ProjectMouraARCard } from "./project-card/mouraar"

export const ProjectList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href={"/projects/portfoliopixel"}>
        <ProjectPixelCard />
      </Link>
      <Link href={"/projects/mourabr"}>
        <ProjectMouraBRCard />
      </Link>
      <Link href={"/projects/mouraar"}>
        <ProjectMouraARCard />
      </Link>
    </section>
  )
}