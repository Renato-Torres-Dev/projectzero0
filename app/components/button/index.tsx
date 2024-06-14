import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props}: ButtonProps) => {
	return (
		<button 
			className={cn(
				"text-zinc-700 hover:text-fuchsia-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-fuchsia-600 duration-700",
				className
			)}
			{...props}
		>
				{children}
		</button>
	)
}