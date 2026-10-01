"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { MEDIA } from "@/lib/event";
export default function Gallery() {
  const [bad, setBad] = useState<string[]>([]);
  const imgs = MEDIA.gallery.filter((s) => !bad.includes(s));
  const [open, setOpen] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const slide = (d: number) => track.current?.scrollBy({ left: d * track.current.clientWidth * 0.8, behavior: "smooth" });
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + imgs.length) % imgs.length)), [imgs.length]);
  useEffect(() => {
    if (open === null) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, [open, step]);
  if (!imgs.length) return null;
  const arrow = "absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 text-dusty-800 shadow flex items-center justify-center text-2xl hover:bg-white";
  const mbtn = "absolute text-white text-3xl h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center";
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-serif text-4xl text-center mb-8">Our Moments</h2>
      <div className="relative">
        <button aria-label="Previous photos" onClick={() => slide(-1)} className={`${arrow} left-1 sm:-left-4`}>‹</button>
        <button aria-label="Next photos" onClick={() => slide(1)} className={`${arrow} right-1 sm:-right-4`}>›</button>
        <div ref={track} className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {imgs.map((s, n) => (
            <button key={s} onClick={() => setOpen(n)} aria-label={`Enlarge photo ${n + 1}`} className="snap-center shrink-0 w-[78%] sm:w-[45%] lg:w-[31%] aspect-[4/5] overflow-hidden bg-dusty-200 focus:outline-none focus-visible:ring-4 ring-dusty-400">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s} alt={`Photo ${n + 1}`} loading="lazy" onError={() => setBad((b) => [...b, s])} className="w-full h-full object-cover" />
            </button>))}
        </div>
      </div>
      {open !== null && imgs[open] && (
        <div role="dialog" aria-modal="true" aria-label="Enlarged photo" className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgs[open]} alt={`Photo ${open + 1}`} className="max-h-[88vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button aria-label="Close" className={`${mbtn} top-4 right-4`} onClick={() => setOpen(null)}>×</button>
          <button aria-label="Previous photo" className={`${mbtn} left-3 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <button aria-label="Next photo" className={`${mbtn} right-3 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
        </div>)}
    </section>
  );
}
