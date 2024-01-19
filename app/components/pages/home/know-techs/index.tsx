import { SectionTitle } from "@/app/components/section-title"
import { KnowTech } from "./know-tech"
import { TbBrandCss3, TbBrandGit, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandReact, TbBrandTailwind } from "react-icons/tb"

const TechSkills = [
  {
    icon: <TbBrandNextjs />,
    name: "Next.js",
    startDate: "2022-03-07"
  },
  {
    icon: <TbBrandTailwind />,
    name: "TailwindCSS",
    startDate: "2023-06-05"
  },
  {
    icon: <TbBrandHtml5 />,
    name: "HTML5",
    startDate: "2022-03-07"
  },
  {
    icon: <TbBrandCss3 />,
    name: "CSS3",
    startDate: "2022-03-07"
  },
  {
    icon: <TbBrandJavascript />,
    name: "JavaScript",
    startDate: "2022-03-07"
  },
  {
    icon: <TbBrandReact />,
    name: "React.js",
    startDate: "2023-06-05"
  },
  {
    icon: <TbBrandGit />,
    name: "Git",
    startDate: "2023-06-05"
  },
]

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
          {TechSkills.map(( tech, index) => (
            <KnowTech icon={tech.icon} name={tech.name} startDate={tech.startDate} />
          ))}
        </div>
    </section>
  )
}