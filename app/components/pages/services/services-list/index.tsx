import Link from "next/link"
import { SiteCard } from "./service-card/site"
import { EcommerceCard } from "./service-card/ecommerce"
import { ComercialCard } from "./service-card/comercial"

export const ServicesList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href={"/services/site"} className="scroll-auto">
        <SiteCard />
      </Link>
      <Link href={"/services/ecommerce"} className="scroll-auto">
        <EcommerceCard />
      </Link>
      <Link href={"/services/comercial"} className="scroll-auto">
        <ComercialCard />
      </Link>
    </section>
  )
}