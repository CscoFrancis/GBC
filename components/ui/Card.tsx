import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-7 shadow-sm transition-colors duration-400 ${className}`}
    >
      {children}
    </div>
  );
}
