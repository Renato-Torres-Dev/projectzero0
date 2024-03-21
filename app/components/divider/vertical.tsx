import { cn } from "@/app/lib/utils"

type VerticalDividerProps = {
  className?: string;
}

export const VerticalDivider = ({ className }: VerticalDividerProps) => {
  return (
    <div className={cn("w-full border-r border-r-gray-800", className)} />
  )
}