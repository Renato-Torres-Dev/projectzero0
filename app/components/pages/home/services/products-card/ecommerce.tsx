import { Link } from "@/app/components/links"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ECommerce = () => {
  return(
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/unicoder-icon.svg"
            alt=""
          />
          E-Commerce Profissional
        </h3>
        <p className="text-gray-400 my-6">
        Facilitamos as vendas online para empresas com uma plataforma intuitiva
        e segura, impulsionando as vendas e proporcionando uma experiência de
        compra excepcional. Oferecemos suporte contínuo e estratégias de marketing
        digital para o sucesso do e-commerce de nossos clientes.
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
          src="/images/products/ecommerce.webp"
          alt="Imagem de Desenvolvimento de Sites"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
    </div>
  )
}