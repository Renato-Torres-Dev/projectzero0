import { cn } from "@/app/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
}

export const NavItem = ({ label, href}: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link href={href} className={cn(
      "text-gray-400 hover:text-neutral-200 flex items-center gap-2 font-medium font-sans",
      isActive && "text-fuchsia-600 hover:text-fuchsia-600"
    )}>
      <span className="text-fuchsia-400">{`<`}</span>
      {label}
      <span className="text-fuchsia-400">{`/>`}</span>
    </Link>
  )
}