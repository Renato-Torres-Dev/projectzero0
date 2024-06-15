import { Link } from "@/app/components/links"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const Comercial = () => {
  return(
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/unicoder-icon.svg"
            alt=""
          />
          Comerciais e Propagandas
        </h3>
        <p className="text-gray-400 my-6">
          Desenvolvemos comerciais criativos e envolventes 
          que promovem a marca e os produtos dos clientes, 
          utilizando técnicas de storytelling e produção de 
          alta qualidade para alcançar resultados impactantes.
        </p>

        <Link href="/services/comercial" className="scroll-auto">
          Ver detalhadamente
          <HiArrowNarrowRight />
        </Link>
      </div>
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/products/comercial.webp"
          alt="Imagem de Desenvolvimento de Sites"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
    </div>
  )
}