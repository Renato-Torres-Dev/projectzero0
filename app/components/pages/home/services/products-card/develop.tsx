import { Link } from "@/app/components/links"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const DevSite = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/unicoder-icon.svg"
            alt=""
          />
          Desenvolvimento de Site
        </h3>
        <p className="text-gray-400 my-6">
          Oferecemos desenvolvimento de sites personalizados para maximizar
          a presença online dos clientes. Com design responsivo e funcionalidade
          avançada, impulsionamos o engajamento e alcançamos objetivos comerciais.
          Garantimos suporte contínuo para o sucesso contínuo do site.
        </p>

        <Link href="/" target="_blank">
          Ver detalhadamente
          <HiArrowNarrowRight />
        </Link>
      </div>
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/products/dev-site.webp"
          alt="Imagem de Desenvolvimento de Sites"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
    </div>
  )
}