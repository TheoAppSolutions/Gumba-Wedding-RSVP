import { EVENT } from "@/lib/event";
import RsvpForm from "@/components/RsvpForm";
// import { DressCode } from "@/components/Info";
import DesignShell from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import MapSection from "@/components/MapSection";
import Gallery from "@/components/Gallery";
import Entourage from "@/components/Entourage";
import Attire from "@/components/Attire";
import Gift from "@/components/Gift";
export default function Design3() {
  return (
    <DesignShell>
      <main>
        <Hero variant={3} />
        <Countdown />
        <MapSection />
        <Attire />
        <Gift />
        <Gallery />
        <Entourage />
        <section id="rsvp" className="max-w-lg mx-auto px-6 pb-20 pt-10 scroll-mt-4">
          <h2 className="font-serif text-3xl text-center mb-6">Will you join us?</h2>
          <RsvpForm variant={3} />
        </section>
      </main>
    </DesignShell>
  );
}
