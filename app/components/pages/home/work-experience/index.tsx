import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

const ExpInfo = [
  {
    img_src: "/images/cubo9.png",
    link: "https://www.linkedin.com/company/cubo9/",
    text_link: "@Cubo9®",
    area: "Front-End Developer",
    tempo: "ago 2023 • O momento • (6 meses)",
    desc: "Desenvolvendo e realizando manutenções nos projetos utilizando ReactJS, NextJS, SCSS e TypeScript. Sempre organizando o projeto com sprints organizadas pelo Trello.",
    tech: {
      tech1: "React.js",
      tech2: "Next.js",
      tech3: "SCSS",
      tech4: "TypeScript",
      tech5: "Git",
    },
  },
  {
    img_src: "/images/renatoTorres.png",
    link: "https://www.linkedin.com/in/renato-torres-dev/",
    text_link: "@renato-torres-dev",
    area: "Front-End Developer",
    tempo: "out 2021 • O momento • (2 anos e 3 meses)",
    desc: "Perfil pessoal onde desenvolvo projetos Freelance e pessoais, demonstrando técnicas para melhorar a performance UI/UX para o cliente.",
    tech: {
      tech1: "HTML5",
      tech2: "Next.js",
      tech3: "CSS3",
      tech4: "TailwindCSS",
      tech5: "JavaScript",
    },
  },
]

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="jobs" title="Experiência Profissional" />
        <p className="text-gray-400 mt-6">
          Sempre em busca de novos conhecimentos, novas experiências e novos projetos. Gosto de solucionar e entregar o projeto, mais do que perfeito, para satisfazer a todos que admiram o meu trabalho.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {ExpInfo.map(( info, index) => (
          <ExperienceItem 
            img_src={info.img_src}
            link={info.link}
            text_link={info.text_link}
            area={info.area}
            tempo={info.tempo}
            desc={info.desc}
            tech={info.tech}
          />
        ))}
      </div>
    </section>    
  )
}