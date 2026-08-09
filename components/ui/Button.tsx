import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "ghost" | "white";

const variantClasses: Record<Variant, string> = {
  solid: "bg-green text-white hover:bg-green-mid",
  ghost: "border border-green text-green hover:bg-green hover:text-white",
  white: "bg-white text-green hover:bg-bg-alt",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-[0.78rem] font-medium tracking-[0.08em] uppercase transition-colors duration-300";

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({
  href,
  variant = "solid",
  children,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = "solid",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} disabled:cursor-not-allowed disabled:opacity-60`}
      {...rest}
    >
      {children}
    </button>
  );
}
