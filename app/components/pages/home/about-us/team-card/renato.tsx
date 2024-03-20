import { Link } from "@/app/components/links"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const RenatoTorres = () => {
  return(
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/profile-pic-2.png"
          alt="Renato Torres"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/unicoder-icon.svg"
            alt=""
          />
          Renato Torres
        </h3>
        <p className="text-gray-400 my-6">
          Profissional em desenvolvimento front-end, atuando diretamente
          como equipe de UI/UX juntamente com a equipe de design, organizando
          o projeto utilizando Trello, e realizando o método build and run.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="HTML5"/>
          <TechBadge name="CSS3"/>
          <TechBadge name="JavaScript"/>
          <TechBadge name="React"/>
          <TechBadge name="TailwindCSS"/>
          <TechBadge name="NextJS"/>
          <TechBadge name="Figma"/>
          <TechBadge name="RestAPIs"/>
        </div>

        <Link href="https://www.linkedin.com/in/renato-torres-dev/" target="_blank">
          Ver perfil
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}