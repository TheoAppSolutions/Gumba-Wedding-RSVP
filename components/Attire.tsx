import Image from "next/image";
import { COLORS } from "@/lib/colors";
import { EVENT } from "@/lib/event";

const SWATCHES = [
  ["Mist", COLORS[200]],
  ["Powder", COLORS[300]],
  ["Dusty Blue", COLORS[400]],
  ["Steel", COLORS[500]],
  ["Slate", COLORS[700]],
];

const ATTIRE = [
  {
    label: "Gentlemen",
    note: "Suit and tie, or a barong, paired with dress shoes.",
    image: "/attire-men.png",
    alt: "Three examples of semi-formal menswear in dusty blue, including a barong Tagalog",
  },
  {
    label: "Ladies",
    note: "Midi or cocktail dress, with heels or dressy flats.",
    image: "/attire-women.png",
    alt: "Three examples of semi-formal dresses in shades of dusty blue",
  },
];

export default function Attire() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
      <p className="text-xs uppercase tracking-[0.4em] text-dusty-500">Dress Code</p>
      <h2 className="mt-3 font-serif text-5xl font-light italic text-dusty-800 md:text-6xl">
        {EVENT.dressCode}
      </h2>
      <div className="mt-5 flex items-center justify-center gap-3 text-dusty-400" aria-hidden>
        <span className="h-px w-12 bg-current" />
        <span className="h-1.5 w-1.5 rotate-45 bg-current" />
        <span className="h-px w-12 bg-current" />
      </div>
      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-dusty-700">
        Polished and refined: dressy, but not black-tie. We&apos;d love to see you in shades of our {EVENT.color.toLowerCase()} palette.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-5">
        {SWATCHES.map(([name, color]) => (
          <div key={name} className="group w-16">
            <div
              className="mx-auto h-12 w-12 rounded-full ring-4 ring-white shadow-md transition-transform duration-300 group-hover:-translate-y-1"
              style={{ backgroundColor: color }}
            />
            <p className="mt-2 text-[10px] text-dusty-700">{name}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {ATTIRE.map(({ label, note, image, alt }) => (
          <figure
            key={label}
            className="overflow-hidden rounded-[2rem] border border-dusty-200 bg-white/70 shadow-[0_20px_55px_rgba(54,75,93,0.10)]"
          >
            <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden bg-dusty-100">
              <div className="absolute inset-x-10 bottom-5 h-10 rounded-full bg-dusty-700/10 blur-xl" aria-hidden />
              <Image
                src={image}
                alt={alt}
                width={1536}
                height={1024}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="relative h-full w-full object-contain"
              />
            </div>
            <figcaption className="border-t border-dusty-200 px-6 py-6">
              <p className="text-xs uppercase tracking-[0.3em] text-dusty-600">{label}</p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-dusty-700">{note}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
