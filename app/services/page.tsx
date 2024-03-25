import { Metadata } from "next";
import { ServicesIntroduction } from "../components/pages/services/services-introduction";
import { ServicesList } from "../components/pages/services/services-list";

export const metadata: Metadata = {
  title: "Unicoder - Serviços",
  icons: "/images/icons/unicoder-icon.svg",
}

export default function Services () {
  return (
    <>
      <ServicesIntroduction />
      <ServicesList />
    </>  
  )
}