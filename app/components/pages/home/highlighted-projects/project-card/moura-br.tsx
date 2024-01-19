import { Link } from "@/app/components/links"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectMouraBr = () => {
  return(
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/brasilrj.png"
          alt="Rio de Janeiro - BR"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          Baterias Moura
        </h3>
        <p className="text-gray-400 my-6">
          Projeto da Baterias Moura, onde realizo todo trabalho de Front-End juntamente com uma equipe, sempre pensando na melhor performance para o cliente.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="HTML5"/>
          <TechBadge name="CSS3"/>
          <TechBadge name="JavaScript"/>
          <TechBadge name="Next.js" />
        </div>

        <Link href="https://www.moura.com.br" target="_blank">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}