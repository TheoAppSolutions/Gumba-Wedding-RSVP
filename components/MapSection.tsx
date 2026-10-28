import { EVENT } from "@/lib/event";

const venue = EVENT.venue;
const query = encodeURIComponent(`${venue.name}, ${venue.address}`);
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const mapSource = apiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`
  : `https://maps.google.com/maps?q=${query}&output=embed`;

export default function MapSection() {
  return (
    <section id="details" className="scroll-mt-4 bg-dusty-50 px-5 pb-24 pt-24 md:pb-28 md:pt-28" aria-labelledby="details-title">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-dusty-600">The celebration</p>
          <h2 id="details-title" className="mt-4 font-serif text-5xl font-light italic text-dusty-900 md:text-6xl">Party details</h2>
          <p className="mt-6 text-sm leading-7 text-dusty-700">Here&apos;s where and when we&apos;ll get together.</p>
        </header>
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] bg-dusty-700 px-7 py-8 text-white shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.35em] text-dusty-100">Date &amp; time</p>
              <p className="mt-3 font-serif text-3xl font-light leading-tight">{EVENT.dateLong}</p>
              <p className="mt-3 text-sm text-white/80">{EVENT.time}</p>
            </div>
            <div className="rounded-[1.5rem] border border-dusty-200 bg-white px-7 py-8 text-dusty-900 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.35em] text-dusty-600">Venue</p>
              <p className="mt-3 font-serif text-3xl font-light leading-tight">{venue.name}</p>
              <p className="mt-3 text-sm text-dusty-700">{venue.address}</p>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${query}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-dusty-700 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-dusty-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-dusty-300">Get directions ↗</a>
            </div>
            <div className="rounded-[1.5rem] border border-dusty-200 bg-white px-7 py-8 text-dusty-900 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.35em] text-dusty-600">Dress code</p>
              <p className="mt-3 font-serif text-3xl font-light leading-tight">{EVENT.dressCode}</p>
              <p className="mt-3 text-sm leading-6 text-dusty-700">Bring your favorite retro sparkle and dancing shoes.</p>
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border-8 border-white bg-dusty-200 shadow-[0_22px_60px_rgba(70,41,95,0.14)] md:min-h-[520px]">
            <iframe title={`Map showing ${venue.name}`} src={mapSource} className="absolute inset-0 h-full w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}
