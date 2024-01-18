import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NavItems = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Projetos",
    href: "/projects"
  }
]

export const Header = () => {
  return(
    <header>
      <div className="container">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="Logo GB Dev"
          />
        </Link>

        <nav className="flex items-center gap-10">
          {NavItems.map(item =>(
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}