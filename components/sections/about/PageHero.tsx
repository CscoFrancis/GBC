import Image from "next/image";

export function PageHero({
  image,
  eyebrow,
  title,
}: {
  image: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="relative flex h-[46vh] min-h-[320px] items-center justify-center overflow-hidden pt-24">
      <Image src={image} alt={title} fill sizes="100vw" className="object-cover" priority />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative text-center text-white">
        <span className="mb-3 block text-xs tracking-[0.2em] uppercase text-white/80">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl font-semibold md:text-5xl">{title}</h1>
      </div>
    </div>
  );
}
