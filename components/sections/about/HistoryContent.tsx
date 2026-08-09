import type { SiteSettings } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { VerseBlock } from "@/components/ui/VerseBlock";

export function HistoryContent({ settings }: { settings: SiteSettings }) {
  return (
    <Container className="max-w-3xl text-center">
      <p className="text-[0.95rem] leading-relaxed text-muted">
        {settings.aboutBody}
      </p>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
        {settings.aboutBody2}
      </p>
      <div className="mt-8 flex justify-center">
        <VerseBlock text={settings.verseText} reference={settings.verseRef} />
      </div>
    </Container>
  );
}
