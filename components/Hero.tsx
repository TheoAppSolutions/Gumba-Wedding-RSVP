"use client";
import { EVENT, MEDIA } from "@/lib/event";
import { useMusic } from "./MusicPlayer";
export default function Hero({ variant = 1 }: { variant?: 1 | 2 | 3 }) {
  const { play } = useMusic();
  const onRsvp = () => { play(); document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" }); }; // click = user gesture
  const left = variant === 2;
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center bg-dusty-700 bg-cover bg-center text-white" style={{ backgroundImage: `url(${MEDIA.hero})` }}>
      <div className="absolute inset-0 bg-dusty-900/60" />
      <div className={`relative z-10 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col ${left ? "items-start text-left" : "items-center text-center"}`}>
        {variant === 3 && <div className="w-24 h-24 rounded-full border border-white/70 flex items-center justify-center font-serif text-3xl mb-6">{EVENT.initials}</div>}
        <p className="text-xs uppercase tracking-[0.4em] text-dusty-200 mb-5">The Wedding Of</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-light leading-tight">{EVENT.honoree}</h1>
        <p className="mt-5 max-w-xl text-dusty-100 text-lg font-light">{MEDIA.tagline}</p>
        <p className="mt-6 tracking-[0.3em] uppercase text-sm">{EVENT.dateLong} · {EVENT.time}</p>
        <button type="button" onClick={onRsvp} className="mt-10 px-10 py-3 border border-white bg-white/10 backdrop-blur hover:bg-white hover:text-dusty-800 transition tracking-[0.3em] uppercase text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-dusty-300">RSVP</button>
      </div>
    </section>
  );
}
