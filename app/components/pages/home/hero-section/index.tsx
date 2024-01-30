import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";

const Mock_Skilss = [
  {
    name: "Next.js"
  },
  {
    name: "TailwindCSS"
  },
  {
    name: "HTML5"
  },
  {
    name: "CSS3"
  },
  {
    name: "JavaScript"
  },
  {
    name: "React"
  },
  {
    name: "Git"
  },
]

const Mock_Contacts = [
  {
    url: "https://github.com/Renato-Torres-Dev",
    icon: <TbBrandGithub />
  },
  {
    url: "https://www.linkedin.com/in/renato-torres-dev/",
    icon: <TbBrandLinkedin />
  },
  {
    url: "https://api.whatsapp.com/send?phone=5581995204835",
    icon: <TbBrandWhatsapp/>
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-red-400">Olá, meu nome é</p>

          <h2 className="text-4xl font-medium mt-2">Renato Torres</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é <span style={{fontWeight: 600, color: "white"}}>Renato Torres</span> e sou <span style={{fontWeight: 600, color: "white"}}>Front-End Developer</span> apaixonado por tecnologia. Meu objetivo é criar interfaces de usuário funcionais e de visual bonito. Começando na área, gosto de enfrentar novos desafios e abraço cada oportunidade como se fosse a única.</p>
          
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Mock_Skilss.map(( skill, index ) => (
              <TechBadge name={skill.name} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18}/>
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {Mock_Contacts.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact=${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={340}
          height={327}
          src="/images/profile-pic-2.png"
          alt="Foto de Perfil do Renato Torres"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}