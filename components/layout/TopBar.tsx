export function TopBar({ text }: { text: string }) {
  return (
       <div
      className="fixed inset-x-0 top-0 z-[1001] flex h-10 items-center justify-center bg-green px-4 text-center text-[0.77rem] tracking-[0.07em] text-white/99 [&_strong]:text-green-lt"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
