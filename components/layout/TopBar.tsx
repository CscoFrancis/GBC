export function TopBar({ text }: { text: string }) {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[1001] bg-green px-4 py-[0.52rem] text-center text-[0.77rem] tracking-[0.07em] text-white/99 [&_strong]:text-green-lt"
      // Content is authored site copy (from local JSON / future CMS field), not user input.
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
