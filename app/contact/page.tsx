import { Metadata } from "next"
import { Contato } from "../components/pages/contact"

export const metadata: Metadata = {
  title: "Unicoder - Fale Conosco",
  icons: "/images/icons/unicoder_logo.svg",
}

export default function Services () {
  return (
    <>
      <Contato />
    </>  
  )
}