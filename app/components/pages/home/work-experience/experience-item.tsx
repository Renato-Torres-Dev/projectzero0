import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

type ExpInfoProps = {
  img_src: string,
    link: string,
    text_link: string,
    area: string,
    tempo: string,
    desc: string,
    tech: {
      tech1: string,
      tech2: string,
      tech3: string,
      tech4: string,
      tech5: string,
    },
}

export const ExperienceItem = ({ img_src, link, text_link, area, tempo, desc, tech }: ExpInfoProps) => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={img_src}
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo Cubo9"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"/>
      </div>

      <div>
        <div className="flex flex-col text-sm sm:text-base">
          <a
            href={link}
            target="_blank"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            {text_link}
          </a>
          <h4 className="text-gray-300 mb-3 mt-6">
            {area}
          </h4>
          <span className="text-gray-500 mb-3">
            {tempo}
          </span>
          <p className="text-gray-400">
            {desc}
          </p>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
          
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <TechBadge name={tech.tech1}/>
            <TechBadge name={tech.tech2}/>
            <TechBadge name={tech.tech3}/>
            <TechBadge name={tech.tech4}/>
            <TechBadge name={tech.tech5}/>
          </div>
        </div>
      </div>
    </div>
  )
}