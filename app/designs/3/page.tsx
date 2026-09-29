import { EVENT } from "@/lib/event";
import RsvpForm from "@/components/RsvpForm";
import { Venue, DressCode } from "@/components/Info";
import DesignShell from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Gallery from "@/components/Gallery";
export default function Design3() {
  return (
    <DesignShell>
      <main>
        <Hero variant={3} />
        <MapSection />
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-12 border-y border-dusty-300 py-6 text-center"><p className="font-serif text-2xl">{EVENT.dateLong}</p><p className="text-dusty-700">{EVENT.time}</p></div>
          <div className="grid md:grid-cols-3 gap-10 text-center md:divide-x divide-dusty-300"><Venue v={EVENT.ceremony} /><Venue v={EVENT.reception} /><DressCode /></div>
        </section>
        <Gallery />
        <section id="rsvp" className="max-w-lg mx-auto px-6 pb-20 scroll-mt-4"><h2 className="font-serif text-3xl text-center mb-6">Will you join us?</h2><RsvpForm variant={3} /></section>
      </main>
    </DesignShell>
  );
}
