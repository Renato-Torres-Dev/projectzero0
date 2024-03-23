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
      "text-gray-400 flex items-center gap-2 font-medium font-mono",
      isActive && "text-fuchsia-600"
    )}>
      <span className="text-fuchsia-400">{`<`}</span>
      {label}
      <span className="text-fuchsia-400">{`/>`}</span>
    </Link>
  )
}