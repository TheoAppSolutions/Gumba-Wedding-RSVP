import { COLORS } from "@/lib/colors";
import { EVENT } from "@/lib/event";
const SWATCHES = [["Mist", COLORS[200]], ["Powder", COLORS[300]], ["Dusty Blue", COLORS[400]], ["Steel", COLORS[500]], ["Slate", COLORS[700]]];
const SKIN = "#E8D5C4";
function Man() {
  return (
    <svg viewBox="0 0 120 260" className="h-64 w-auto" role="img" aria-label="Man in a semi-formal suit">
      <rect x="21" y="58" width="14" height="86" rx="7" fill={COLORS[700]} /><rect x="85" y="58" width="14" height="86" rx="7" fill={COLORS[700]} />
      <circle cx="28" cy="148" r="6" fill={SKIN} /><circle cx="92" cy="148" r="6" fill={SKIN} />
      <rect x="36" y="150" width="20" height="92" fill={COLORS[900]} /><rect x="64" y="150" width="20" height="92" fill={COLORS[900]} />
      <ellipse cx="46" cy="246" rx="14" ry="6" fill="#222" /><ellipse cx="74" cy="246" rx="14" ry="6" fill="#222" />
      <path d="M34 56 H86 L90 156 H30 Z" fill={COLORS[700]} />
      <path d="M50 56 H70 L60 104 Z" fill="#fff" /><path d="M57 62 H63 L65 108 L60 116 L55 108 Z" fill={COLORS[300]} />
      <path d="M50 56 L60 104 L44 90 Z M70 56 L60 104 L76 90 Z" fill={COLORS[800]} />
      <rect x="54" y="44" width="12" height="14" fill={SKIN} /><circle cx="60" cy="30" r="16" fill={SKIN} />
      <path d="M44 28 Q60 4 76 28 Q60 16 44 28Z" fill="#2b2b2b" />
    </svg>
  );
}
function Woman() {
  return (
    <svg viewBox="0 0 120 260" className="h-64 w-auto" role="img" aria-label="Woman in a semi-formal midi dress">
      <ellipse cx="60" cy="36" rx="21" ry="26" fill="#4a3728" />
      <rect x="28" y="56" width="8" height="70" rx="4" fill={SKIN} /><rect x="84" y="56" width="8" height="70" rx="4" fill={SKIN} />
      <rect x="47" y="196" width="9" height="46" fill={SKIN} /><rect x="64" y="196" width="9" height="46" fill={SKIN} />
      <ellipse cx="50" cy="246" rx="10" ry="5" fill={COLORS[800]} /><ellipse cx="70" cy="246" rx="10" ry="5" fill={COLORS[800]} />
      <path d="M46 54 H74 L77 100 L100 202 H20 L43 100 Z" fill={COLORS[400]} />
      <path d="M51 54 L60 68 L69 54 Z" fill={SKIN} /><rect x="43" y="96" width="34" height="6" fill={COLORS[600]} />
      <rect x="54" y="44" width="12" height="12" fill={SKIN} /><circle cx="60" cy="32" r="15" fill={SKIN} />
      <path d="M45 30 Q60 8 75 30 Q62 20 45 30Z" fill="#4a3728" />
    </svg>
  );
}
export default function Attire() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="font-serif text-4xl mb-2">Attire</h2>
      <p className="text-dusty-700">{EVENT.dressCode} · {EVENT.color} palette</p>
      <div className="mt-8 flex flex-wrap justify-center gap-5">
        {SWATCHES.map(([n, c]) => (<div key={n} className="w-20"><div className="h-20 w-20 rounded-full border border-dusty-200 shadow-sm" style={{ backgroundColor: c }} /><p className="mt-2 text-xs text-dusty-800">{n}</p><p className="text-[10px] text-dusty-500 uppercase">{c}</p></div>))}
      </div>
      <div className="mt-10 flex justify-center gap-12">
        <figure><Man /><figcaption className="mt-2 text-xs uppercase tracking-[0.3em] text-dusty-600">Gentlemen</figcaption></figure>
        <figure><Woman /><figcaption className="mt-2 text-xs uppercase tracking-[0.3em] text-dusty-600">Ladies</figcaption></figure>
      </div>
    </section>
  );
}
