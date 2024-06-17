import { Metadata } from "next";
import { ServicesIntroduction } from "../components/pages/services/services-introduction";
import { ServicesList } from "../components/pages/services/services-list";
import { HorizontalDividerSection } from "../components/divider/horizontal copy";

export const metadata: Metadata = {
  title: "Unicoder - Serviços",
  icons: "/images/icons/unicoder_logo.svg",
}

export default function Services () {
  return (
    <>
      <ServicesIntroduction />
      <HorizontalDividerSection />
      <ServicesList />
      <HorizontalDividerSection />
    </>  
  )
}