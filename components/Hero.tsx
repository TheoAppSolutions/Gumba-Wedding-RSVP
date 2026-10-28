"use client";

import Image from "next/image";
import { EVENT, MEDIA } from "@/lib/event";
import { useMusic } from "./MusicPlayer";

export default function Hero() {
  const { play } = useMusic();

  function goToRsvp() {
    play();
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-dusty-900 px-6 py-24 text-white md:min-h-screen">
      <Image src={MEDIA.hero} alt="Raymund and Vanessa together" fill priority quality={90} sizes="100vw" className="object-cover" style={{ objectPosition: "20% center" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-dusty-950/65 via-dusty-900/55 to-dusty-950/90" />
      <div className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full border-[50px] border-dusty-300/15" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border-[58px] border-dusty-300/20" aria-hidden />
      <div className="pointer-events-none absolute left-[13%] top-[27%] h-3 w-3 rotate-45 bg-dusty-300" aria-hidden />
      <div className="pointer-events-none absolute right-[16%] top-[22%] h-4 w-4 rounded-full bg-dusty-200" aria-hidden />
      <div className="pointer-events-none absolute bottom-[23%] right-[24%] h-3 w-3 rotate-12 bg-dusty-400" aria-hidden />
      <div className="pointer-events-none absolute inset-5 border border-white/25 sm:inset-9" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-dusty-100">You&apos;re invited</p>
        <div className="mx-auto my-8 flex w-24 items-center justify-center text-5xl text-dusty-100 drop-shadow-lg" aria-hidden>✦</div>
        <h1 className="font-serif text-6xl font-light leading-[0.9] drop-shadow-lg sm:text-8xl md:text-9xl">
          {EVENT.celebrant ? <><span className="block">{EVENT.celebrant}’s</span><span className="mt-3 block font-script text-dusty-100">{EVENT.milestone || "birthday"}</span></> : <><span className="block">A birthday</span><span className="mt-3 block font-script text-dusty-100">celebration</span></>}
        </h1>
        <p className="mx-auto mt-9 max-w-xl text-base leading-8 text-white sm:text-lg">Good company, happy moments, and another trip around the sun. We&apos;d love to celebrate with you.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-dusty-100">
          <span>{EVENT.dateLong}</span><span aria-hidden>✦</span><span>{EVENT.time}</span>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={goToRsvp} className="rounded-full bg-white px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-dusty-900 transition hover:bg-dusty-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-dusty-300">RSVP now</button>
          <a href="#details" className="rounded-full border border-white/60 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-dusty-300">Party details</a>
        </div>
      </div>
    </section>
  );
}
