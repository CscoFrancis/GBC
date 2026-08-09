import type { SiteSettings } from "@/types/content";
import { Container } from "@/components/ui/Container";

export function StatsBar({ settings }: { settings: SiteSettings }) {
  const stats = [
    { value: settings.statFounded, label: "Founded" },
    { value: settings.statMembers, label: "Members" },
    { value: settings.statMinistries, label: "Ministries" },
    { value: settings.statElders, label: "Elders" },
  ];

  return (
    <div className="border-b border-border bg-green py-10 text-white">
      <Container className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl font-bold md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-[0.7rem] tracking-[0.15em] text-white/75 uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
