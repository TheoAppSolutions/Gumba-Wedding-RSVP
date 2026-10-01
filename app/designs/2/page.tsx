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
export default function Design2() {
  return (
    <DesignShell>
      <main>
        <Hero variant={2} />
        <Countdown />
        <MapSection />
        <Attire />
        <Gift />
        <Gallery />
        <Entourage />
        <section id="rsvp" className="bg-white px-6 py-20 scroll-mt-4">
          <div className="max-w-lg mx-auto">
            <h2 className="font-serif text-4xl mb-6">RSVP</h2>
            <RsvpForm variant={2} />
          </div>
        </section>
      </main>
    </DesignShell>
  );
}
