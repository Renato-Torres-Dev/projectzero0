import { TbBrandInstagram, TbBrandWhatsapp } from "react-icons/tb"
import { SectionTitle } from "../../section-title"

export const Contato = () => {
  return (
    <section className="w-full sm:min-h-[600px] pb-10 sm:pb-24 py-24 px-6 flex flex-col items-center justify-center">
      <SectionTitle 
        subtitle="contato"
        title="Fale Conosco..."
        className="text-center items-center [&>h3]:text-4xl"  
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-md sm:text-lg">
          Vamos produzir o seu site, fazer a sua loja virtual, criar aquela identidade visual bacana, 
          ou até mesmo criar um comercial bem bolado para o seu empreendimento? Não perca mais tempo, 
          e entre em contato conosco através das nossas redes sociais. Ou se preferir, preencha os 
          dados abaixo, e envie a sua mensagem, solicitando o nosso serviço, orçamento ou consultoria.
          Iremos lhe atender o mais breve possível, com o máximo de profissionalismo e atenção.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <a 
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5581995204835"
          className="hover:text-fuchsia-700 transition-colors mx-6"
        >
          <TbBrandWhatsapp size={184} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/unicoder_tech?igsh=MTFhOWpjeTB2dmJjcg=="
          className="hover:text-fuchsia-700 transition-colors mx-6"
        >
          <TbBrandInstagram size={184} />
        </a>
      </div>
    </section>
  )
}