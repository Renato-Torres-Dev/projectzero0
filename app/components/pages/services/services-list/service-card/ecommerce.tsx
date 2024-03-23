import Image from "next/image"

export const EcommerceCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow:hidden border-2 border-gray-800 hover:border-fuchsia-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-38 overflow-hidden">
        <Image 
          src={"/images/products/ecommerce.webp"} 
          alt="Compras online"
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-fuchsia-500 transition-all">E-Commerce Profissional</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Oferecemos soluções completas de e-commerce, desenvolvendo 
          plataformas personalizadas e seguras que impulsionam as vendas 
          e proporcionam uma experiência de compra excepcional.
        </p>
      </div>
    </div>
  )
}