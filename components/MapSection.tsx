"use client";
import { useState } from "react";
import { EVENT } from "@/lib/event";
const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
export default function MapSection() {
  const venues = [EVENT.ceremony, EVENT.reception];
  const [i, setI] = useState(0);
  const v = venues[i];
  const q = encodeURIComponent(v.address ? `${v.name}, ${v.address}` : v.name);
  // Maps Embed API when a key is set; keyless embed as a fallback so the map still shows in dev.
  const src = key ? `https://www.google.com/maps/embed/v1/place?key=${key}&q=${q}` : `https://maps.google.com/maps?q=${q}&output=embed`;
  return (
    <section className="bg-dusty-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-6 grid grid-cols-2 gap-3 sm:gap-6 text-center">
        {venues.map((x, n) => (
          <button key={x.label} type="button" onClick={() => setI(n)} aria-pressed={n === i}
            className={`px-2 py-4 border-b-2 transition focus:outline-none focus-visible:ring-4 ring-dusty-300 ${n === i ? "border-dusty-600 opacity-100" : "border-dusty-200 opacity-60 hover:opacity-100"}`}>
            <span className="block text-xs uppercase tracking-[0.3em] text-dusty-500 mb-2">{x.label}</span>
            <span className="block font-serif text-xl sm:text-3xl leading-tight">{x.name}</span>
            {/* {x.address && <span className="block text-sm text-dusty-700 mt-1">{x.address}</span>} */}
          </button>))}
      </div>
      <iframe key={src} title={`Map: ${v.name}`} src={src} className="w-full h-[350px] md:h-[420px] border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      <div className="text-center py-5">
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener noreferrer" className="inline-block text-sm rounded-full bg-dusty-700 text-white px-6 py-2 hover:bg-dusty-800">Get Directions to the {v.label}</a>
      </div>
    </section>
  );
}
