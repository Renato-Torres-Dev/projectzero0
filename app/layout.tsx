import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { Toaster } from './components/toaster'
import { TopButton } from './components/button/topButton'

const NavItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
]

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable} !scroll-smooth`}>
      <body className='bg-gray-950'>
        <Toaster />
        <Header />
        {children}
        <TopButton />
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
