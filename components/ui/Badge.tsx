export function Badge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full bg-green text-white shadow-lg">
      <span className="font-display text-3xl font-bold leading-none">
        {value}
      </span>
      <span className="mt-1 text-[0.6rem] tracking-[0.1em] uppercase">
        {label}
      </span>
    </div>
  );
}
