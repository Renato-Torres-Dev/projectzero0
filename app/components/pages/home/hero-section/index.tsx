'use client'

import { Button } from "@/app/components/button"
import { Metadata } from "next";
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi";
import {  TbBrandInstagram, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";
import { motion } from 'framer-motion'
import Link from "next/link";

const Mock_Skilss = [
  {
    name: "OnePage"
  },
  {
    name: "Sites"
  },
  {
    name: "E-Commerce"
  },
  {
    name: "Comerciais"
  },
  {
    name: "Marketing Digital"
  },
  {
    name: "Consultoria"
  },
]

const Mock_Contacts = [
  {
    url: "https://www.instagram.com/unicoder_tech?igsh=MTFhOWpjeTB2dmJjcg==",
    icon: <TbBrandInstagram />
  },
  {
    url: "https://api.whatsapp.com/send?phone=5581995204835",
    icon: <TbBrandWhatsapp/>
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] sm:bg-hero-image bg-gray-950 bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[170px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
         className="w-full lg:max-w-[530px]"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
        >
          <p className="font-master text-fuchsia-400">Olá, Seja Bem-Vindo à</p>

          <Image
            height={35}
            width={271}
            src="/images/logo_text.png"
            alt="Logo Unicoder 2"
          />

          <p className="text-gray-400 my-6 text-sm sm:text-base">É com grande entusiasmo que nos dirigimos a vocês hoje para apresentar nossa empresa de <span style={{fontWeight: 600, color: "white"}}>Consultoria</span> e <span style={{fontWeight: 600, color: "white"}}>Soluções Tecnológicas</span>. Estamos comprometidos em oferecer serviços de alta qualidade que impulsionem o sucesso empresarial por meio da inovação e da eficiência tecnológica.</p>
          
          {/* <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Mock_Skilss.map(( skill, index ) => (
              <TechBadge name={skill.name} />
            ))}
          </div> */}

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Link href="/contact">
              <Button className="w-max">
                Entre em contato
              </Button>
            </Link>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {Mock_Contacts.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact=${index}`}
                  target="_blank"
                  className="hover:text-fuchsia-700 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        {/* <Image
          width={340}
          height={327}
          src="/images/logo_video.gif"
          alt="Logomarca Unicoder"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover border border-fuchsia-600 shadow-button"
        /> */}
      </div>
    </section>
  )
}