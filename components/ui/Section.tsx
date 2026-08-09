import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  alt = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-24 transition-colors duration-400 ${
        alt ? "bg-bg-alt" : "bg-bg"
      } ${className}`}
    >
      {children}
    </section>
  );
}
