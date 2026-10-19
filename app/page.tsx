import RsvpForm from "@/components/RsvpForm";
import DesignShell from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import MapSection from "@/components/MapSection";
import Gallery from "@/components/Gallery";
import Entourage from "@/components/Entourage";
import Attire from "@/components/Attire";
import Gift from "@/components/Gift";

export default function Home() {
  return (
    <DesignShell>
      <main>
        <Hero variant={1} />
        <Countdown />
        <MapSection />
        <Attire />
        <Gift />
        <Gallery />
        <Entourage />
        <section id="rsvp" className="scroll-mt-4 bg-dusty-100 px-6 py-20">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-8 text-center font-serif text-4xl">Kindly Reply</h2>
            <RsvpForm variant={1} />
          </div>
        </section>
      </main>
    </DesignShell>
  );
}
