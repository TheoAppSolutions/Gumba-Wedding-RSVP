import { EVENT } from "@/lib/event";
import RsvpForm from "@/components/RsvpForm";
import { Venue, DressCode } from "@/components/Info";
import DesignShell from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Gallery from "@/components/Gallery";
export default function Design2() {
  return (
    <DesignShell>
      <main>
        <Hero variant={2} />
        <MapSection />
        <section className="bg-white"><div className="max-w-5xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3"><Venue v={EVENT.ceremony} /><Venue v={EVENT.reception} /><DressCode /></div></section>
        <Gallery />
        <section id="rsvp" className="bg-white px-6 py-20 scroll-mt-4"><div className="max-w-lg mx-auto"><h2 className="font-serif text-4xl mb-6">RSVP</h2><RsvpForm variant={2} /></div></section>
      </main>
    </DesignShell>
  );
}
