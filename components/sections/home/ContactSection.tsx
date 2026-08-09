import type { SiteSettings } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/shared/ContactForm";

export function ContactSection({ settings }: { settings: SiteSettings }) {
  return (
    <Container className="grid gap-16 md:grid-cols-2">
      <div>
        <SectionLabel>Get In Touch</SectionLabel>
        <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
          Plan Your Visit
        </h2>
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
          We&apos;d love to welcome you this week. Reach out with any questions,
          or just stop by — you&apos;ll always find a seat.
        </p>

        <dl className="mt-8 flex flex-col gap-4 text-sm text-text">
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Address</dt>
            <dd className="mt-1">{settings.address}</dd>
            <a
            href="https://www.google.com/maps/place/Grace+Baptist+Church,+Lang%E2%80%99ata+Road,+Karen/@-1.3381111,36.7381195,17z/data=!3m1!4b1!4m6!3m5!1s0x182f1b000716c0a3:0xc733477d9d3b69c7!8m2!3d-1.3381111!4d36.7406944!16s%2Fg%2F11w4n18ttm"
            target="_blank"
            className="text-green-600 hover:underline"
        >
            View on Google Maps →
        </a>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Phone</dt>
            <dd className="mt-1">{settings.phone}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Email</dt>
            <dd className="mt-1">{settings.email}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">
              Service Times
            </dt>
            <dd className="mt-1">{settings.serviceTime1}</dd>
            <dd>{settings.serviceTime2}</dd>
          </div>
        </dl>
      </div>

      <ContactForm />
    </Container>
  );
}
