export function VerseBlock({ text, reference }: { text: string; reference: string }) {
  return (
    <blockquote className="border-l-2 border-green py-2 pl-6">
      <p className="font-display text-xl leading-relaxed text-text italic">
        &ldquo;{text}&rdquo;
      </p>
      <cite className="mt-2 block text-sm text-muted not-italic">
        {reference}
      </cite>
    </blockquote>
  );
}
