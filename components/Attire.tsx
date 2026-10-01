import { COLORS } from "@/lib/colors";
import { EVENT } from "@/lib/event";

const SWATCHES = [["Mist", COLORS[200]], ["Powder", COLORS[300]], ["Dusty Blue", COLORS[400]], ["Steel", COLORS[500]], ["Slate", COLORS[700]]];
const SKIN = "#EAD3BF";
const HAIR_M = "#2b2b2b";
const HAIR_W = "#4a3728";

function Man() {
  return (
    <svg viewBox="0 0 160 320" className="h-72 w-auto" role="img" aria-label="Man in a semi-formal suit and tie">
      <ellipse cx="80" cy="307" rx="40" ry="5" fill="#000" opacity=".08" />
      {/* trousers + shoes */}
      <path d="M52 166 H108 L106 296 H84 L80 192 L76 296 H54 Z" fill={COLORS[800]} />
      <path d="M52 296 H77 Q79 306 64 306 H48 Q47 299 52 296Z M108 296 H83 Q81 306 96 306 H112 Q113 299 108 296Z" fill="#1f2933" />
      {/* sleeves + hands */}
      <path d="M52 72 Q38 76 34 92 L28 170 H44 L50 126 Z M108 72 Q122 76 126 92 L132 170 H116 L110 126 Z" fill={COLORS[600]} stroke={COLORS[800]} strokeWidth=".6" />
      <circle cx="36" cy="177" r="6" fill={SKIN} /><circle cx="124" cy="177" r="6" fill={SKIN} />
      {/* jacket */}
      <path d="M52 70 Q80 60 108 70 L112 184 H48 Z" fill={COLORS[700]} stroke={COLORS[800]} strokeWidth=".6" />
      <path d="M68 62 H92 L80 126 Z" fill="#fff" />
      <path d="M62 66 L68 62 L80 126 L66 118 L56 90 Z M98 66 L92 62 L80 126 L94 118 L104 90 Z" fill={COLORS[800]} />
      <path d="M76 76 H84 L86 84 H74 Z M75 85 H85 L88 138 L80 148 L72 138 Z" fill={COLORS[300]} />
      <path d="M80 126 V184" stroke={COLORS[900]} strokeWidth=".8" />
      <circle cx="80" cy="150" r="1.6" fill={COLORS[900]} /><circle cx="80" cy="166" r="1.6" fill={COLORS[900]} />
      <path d="M92 106 L102 104 L102 110 L92 110 Z" fill="#fff" />
      {/* head */}
      <rect x="72" y="50" width="16" height="16" fill={SKIN} />
      <circle cx="65" cy="40" r="3" fill={SKIN} /><circle cx="95" cy="40" r="3" fill={SKIN} />
      <ellipse cx="80" cy="38" rx="15" ry="18" fill={SKIN} />
      <path d="M64 36 Q62 12 80 13 Q98 12 96 36 Q92 23 80 23 Q68 23 64 36Z" fill={HAIR_M} />
    </svg>
  );
}

function Woman() {
  return (
    <svg viewBox="0 0 160 320" className="h-72 w-auto" role="img" aria-label="Woman in a semi-formal midi dress">
      <ellipse cx="80" cy="307" rx="40" ry="5" fill="#000" opacity=".08" />
      <path d="M60 40 Q57 10 80 11 Q103 10 100 40 L103 86 Q80 78 57 86 Z" fill={HAIR_W} />
      {/* legs + heels */}
      <path d="M70 232 H78 L77 296 H71 Z M82 232 H90 L89 296 H83 Z" fill={SKIN} />
      <path d="M67 296 H79 L80 305 H64 Z M81 296 H93 L96 305 H80 Z" fill={COLORS[800]} />
      {/* arms */}
      <path d="M62 72 L50 80 L44 150 H52 L62 100 Z M98 72 L110 80 L116 150 H108 L98 100 Z" fill={SKIN} />
      <circle cx="48" cy="153" r="4.5" fill={SKIN} /><circle cx="112" cy="153" r="4.5" fill={SKIN} />
      {/* dress */}
      <rect x="74" y="50" width="12" height="16" fill={SKIN} />
      <path d="M64 66 Q80 76 96 66 L100 70 L98 110 L122 232 H38 L62 110 L60 70 Z" fill={COLORS[400]} />
      <path d="M60 70 L50 80 L57 93 L64 75 Z M100 70 L110 80 L103 93 L96 75 Z" fill={COLORS[400]} stroke={COLORS[500]} strokeWidth=".6" />
      <path d="M68 62 L80 90 L92 62 Z" fill={SKIN} />
      <path d="M62 108 H98 V117 H62 Z" fill={COLORS[600]} /><rect x="76" y="108" width="8" height="9" fill={COLORS[200]} />
      <path d="M70 117 L58 232 M80 117 V232 M90 117 L102 232" stroke={COLORS[500]} strokeWidth="1" opacity=".5" />
      {/* head */}
      <ellipse cx="80" cy="38" rx="14" ry="17" fill={SKIN} />
      <path d="M65 37 Q64 17 80 17 Q96 17 95 37 Q88 26 78 26 Q70 27 65 37Z" fill={HAIR_W} />
    </svg>
  );
}

function Figure({ label, note, children }: { label: string; note: string; children: React.ReactNode }) {
  return (
    <figure className="w-56 mx-auto">
      <div className="bg-dusty-100 rounded-t-full pt-10 px-6 flex justify-center">{children}</div>
      <figcaption className="mt-4">
        <p className="text-xs uppercase tracking-[0.3em] text-dusty-600">{label}</p>
        <p className="mt-1 text-sm text-dusty-700 leading-relaxed">{note}</p>
      </figcaption>
    </figure>
  );
}

export default function Attire() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-dusty-500">Dress Code</p>
      <h2 className="mt-3 font-serif italic text-5xl md:text-6xl font-light text-dusty-800">{EVENT.dressCode}</h2>
      <div className="mt-5 flex items-center justify-center gap-3 text-dusty-400" aria-hidden>
        <span className="h-px w-12 bg-current" /><span className="h-1.5 w-1.5 rotate-45 bg-current" /><span className="h-px w-12 bg-current" />
      </div>
      <p className="mt-5 max-w-md mx-auto text-dusty-700 leading-relaxed">Polished and refined: dressy, but not black-tie. We&apos;d love to see you in shades of our {EVENT.color.toLowerCase()} palette.</p>

      <p className="mt-12 text-xs uppercase tracking-[0.3em] text-dusty-500">Color Palette</p>
      <div className="mt-5 flex flex-wrap justify-center gap-4 sm:gap-6">
        {SWATCHES.map(([n, c]) => (
          <div key={n} className="w-20">
            <div className="h-16 w-16 mx-auto rounded-full ring-4 ring-white shadow-md" style={{ backgroundColor: c }} />
            <p className="mt-3 text-xs text-dusty-800">{n}</p>
            <p className="text-[10px] tracking-wider text-dusty-500 uppercase">{c}</p>
          </div>))}
      </div>

      <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-8">
        <Figure label="Gentlemen" note="Suit and tie, or a barong, with dress shoes."><Man /></Figure>
        <Figure label="Ladies" note="Midi or cocktail dress, with heels or dressy flats."><Woman /></Figure>
      </div>
    </section>
  );
}
