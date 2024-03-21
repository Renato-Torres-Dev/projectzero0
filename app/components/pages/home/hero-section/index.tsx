import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";

const Mock_Skilss = [
  {
    name: "OnePage"
  },
  {
    name: "Sites"
  },
  {
    name: "E-Commerce"
  },
  {
    name: "Comerciais"
  },
  {
    name: "Marketing Digital"
  },
  {
    name: "Consultoria"
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
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[170px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-master text-fuchsia-400">Olá, Seja Bem-Vindo à</p>

          <Image
            height={35}
            width={271}
            src="/images/logo_text.png"
            alt="Logo Unicoder 2"
          />

          <p className="text-gray-400 my-6 text-sm sm:text-base">É com grande entusiasmo que nos dirigimos a vocês hoje para apresentar nossa empresa de <span style={{fontWeight: 600, color: "white"}}>Consultoria</span> e <span style={{fontWeight: 600, color: "white"}}>Soluções Tecnológicas</span>. Estamos comprometidos em oferecer serviços de alta qualidade que impulsionem o sucesso empresarial por meio da inovação e da eficiência tecnológica.</p>
          
          {/* <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Mock_Skilss.map(( skill, index ) => (
              <TechBadge name={skill.name} />
            ))}
          </div> */}

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max">
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
          src="/images/logo_video.gif"
          alt="Logomarca Unicoder"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover border border-fuchsia-600 shadow-button"
        />
      </div>
    </section>
  )
}