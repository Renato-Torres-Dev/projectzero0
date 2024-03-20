import { SectionTitle } from "@/app/components/section-title"
import { RenatoTorres } from "./team-card/renato"
import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { IgorGabriel } from "./team-card/igor"

export const AboutUs = () => {
  return(
    <section className="container py-16">
      <SectionTitle subtitle="equipe" title="Quem Somos" className="items-center text-center"/>
      <p className="text-gray-400 mt-6">
        Somos uma equipe dedicada de especialistas em tecnologia, apaixonados por encontrar
        soluções inteligentes para os desafios empresariais contemporâneos. Com uma combinação
        de experiência, criatividade e comprometimento, estamos prontos para ajudá-los a alcançar
        seus objetivos de negócios.
      </p>

      <HorizontalDivider className="mb-16"/>

      <div>
        <RenatoTorres />
        <HorizontalDivider className="my-16"/>
        <IgorGabriel />
        <HorizontalDivider className="my-16"/>
      </div>

      {/*colocar um link para acessar o menu com todos*/}
    </section>
  )
}