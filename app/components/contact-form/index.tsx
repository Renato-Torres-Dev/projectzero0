'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
import { SectionTitle } from "../section-title"
import { Button } from "../button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { toast } from "react-hot-toast"

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(15).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {

  const { 
    handleSubmit, 
    register, 
    reset,
    formState:{isSubmitting}
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })
  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success("Mensagem enviada com sucesso!")
      reset()
    } catch {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.")
    }
  }

  return (
    <section className="py-4 px-6 md:py-8 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle 
          subtitle="contato"
          title="Quer realizar um orçamento? Entre em contato..."
          className="items-center text-center"
        />
        <h2 className="text-gray-400 text-lg my-6">
          Em um mundo cada vez mais digital e competitivo, a tecnologia 
          pode ser um diferencial crucial para o sucesso empresarial. Estamos 
          aqui para ser seu parceiro confiável na jornada rumo à inovação e 
          eficiência. Entre em contato conosco hoje mesmo e descubra como 
          podemos ajudar sua empresa a prosperar no ambiente empresarial em 
          constante evolução.
        </h2>

        <form
         className="mt-12 w-full flex flex-col gap-4"
         onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-fuchsia-600"
            {...register("name")}
          >
          </input>
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-fuchsia-600"
            {...register("email")}
          >
          </input>
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-fuchsia-600"
            maxLength={500}
            {...register("message")}
          >
          </textarea>

          <Button className="w-max mx-auto mt-6" disabled={isSubmitting}>
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}