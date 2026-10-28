import { EVENT } from "@/lib/event";

const NOTES = [
  { eyebrow: "The vibe", title: "Come ready to celebrate", body: "Expect good music, great company, and plenty of birthday cheer." },
  { eyebrow: "What to wear", title: "Disco ball energy", body: `The dress code is ${EVENT.dressCode}. Think retro flair, a little shimmer, and something you can dance in.` },
  { eyebrow: "Your reply", title: "Let us know", body: "Please send your RSVP so we know whether to save you a spot." },
];

export default function GoodToKnow() {
  return (
    <section className="relative overflow-hidden bg-dusty-100 px-5 py-20 md:py-28" aria-labelledby="good-to-know-title">
      <div className="relative mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-dusty-600">Before the party</p>
          <h2 id="good-to-know-title" className="mt-4 font-script text-6xl text-dusty-900 sm:text-7xl">Good to know</h2>
          <p className="mt-6 text-sm leading-7 text-dusty-700">A few notes to help you get ready for the celebration.</p>
        </header>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {NOTES.map((note) => <article key={note.title} className="rounded-[1.5rem] border border-dusty-200 bg-white/80 px-6 py-7 shadow-sm"><p className="text-[10px] uppercase tracking-[0.3em] text-dusty-600">{note.eyebrow}</p><h3 className="mt-3 font-serif text-3xl text-dusty-900">{note.title}</h3><p className="mt-4 text-sm leading-7 text-dusty-700">{note.body}</p></article>)}
        </div>
        <div className="mt-10 rounded-[1.5rem] bg-dusty-900 px-6 py-8 text-center text-white shadow-lg sm:px-10">
          <p className="text-[10px] uppercase tracking-[0.35em] text-dusty-200">We hope to see you there</p>
          <p className="mx-auto mt-3 max-w-2xl font-serif text-2xl leading-snug sm:text-3xl">Your company would make the celebration even brighter.</p>
          <a href="#rsvp" className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-dusty-900 transition hover:bg-dusty-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-dusty-300">Send your RSVP</a>
        </div>
      </div>
    </section>
  );
}
