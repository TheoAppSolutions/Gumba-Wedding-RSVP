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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">{venues.map((x, n) => (
          <button key={x.label} onClick={() => setI(n)} className={`px-4 py-1.5 rounded-full text-sm border ${n === i ? "bg-dusty-600 text-white border-dusty-600" : "border-dusty-300"}`}>{x.label}</button>))}</div>
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener noreferrer" className="text-sm rounded-full bg-dusty-700 text-white px-5 py-2 hover:bg-dusty-800">Get Directions</a>
      </div>
      <iframe key={src} title={`Map: ${v.name}`} src={src} className="w-full h-[350px] md:h-[420px] border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
    </section>
  );
}
