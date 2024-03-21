'use client'

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NavItems = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Equipe",
    href: "/team"
  }
]

export const Header = () => {
  return(
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.png"
            alt="Logo UniCoder"
          />
        </Link>

        {/* <nav className="flex items-center gap-4 sm:gap-10">
          {NavItems.map(item =>(
            <NavItem {...item} key={item.label} />
          ))}
        </nav> */}
      </div>
    </header>
  )
}