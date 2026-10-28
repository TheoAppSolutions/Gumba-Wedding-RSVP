import Image from "next/image";
import { EVENT } from "@/lib/event";

const looks = [
  {
    title: "Menswear inspiration",
    note: "Velvet, metallic shirts, and relaxed tailoring.",
    image: "/attire-men-disco.png",
    alt: "Three faceless illustrated men in plum velvet, silver and lavender metallic shirts, and dark disco inspired tailoring",
  },
  {
    title: "Womenswear inspiration",
    note: "Sequins, iridescent fabrics, and dancing shoes.",
    image: "/attire-women-disco.png",
    alt: "Three faceless illustrated women in a silver sequin dress, an iridescent jumpsuit, and a violet cocktail dress",
  },
];

export default function DiscoAttire() {
  return (
    <section id="attire" className="bg-dusty-950 px-5 py-20 text-white md:py-28" aria-labelledby="attire-title">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-dusty-200">Style inspiration</p>
          <h2 id="attire-title" className="mt-5 font-serif text-5xl font-light leading-tight sm:text-6xl">
            Dress for the <span className="font-script text-dusty-200">dance floor</span>
          </h2>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-dusty-200">{EVENT.dressCode}</p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/80">
            Think sequins, metallics, velvet, and a little 90s flair. Wear a look that feels like you and lets you move comfortably all night.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {looks.map((look) => (
            <figure key={look.title} className="overflow-hidden rounded-[2rem] border border-white/20 bg-dusty-800 shadow-[0_30px_70px_rgba(15,8,24,0.35)]">
              <Image
                src={look.image}
                alt={look.alt}
                width={1536}
                height={1024}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="px-6 py-6">
                <h3 className="font-serif text-2xl text-white">{look.title}</h3>
                <p className="mt-2 text-sm text-white/70">{look.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
