import RsvpForm from "@/components/RsvpForm";
import DesignShell from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import MapSection from "@/components/MapSection";
import DiscoAttire from "@/components/DiscoAttire";
import GoodToKnow from "@/components/GoodToKnow";

export default function Home() {
  return (
    <DesignShell>
      <main>
        <Hero />
        <Countdown />
        <MapSection />
        <DiscoAttire />
        <GoodToKnow />
        <section id="rsvp" className="scroll-mt-4 bg-dusty-100 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-lg">
            <p className="text-center text-[10px] uppercase tracking-[0.4em] text-dusty-600">Save your spot</p>
            <h2 className="mb-4 mt-3 text-center font-serif text-5xl font-light italic text-dusty-900">Birthday RSVP</h2>
            <p className="mb-9 text-center text-sm leading-7 text-dusty-700">Let us know if you can celebrate with us.</p>
            <RsvpForm />
          </div>
        </section>
      </main>
    </DesignShell>
  );
}
