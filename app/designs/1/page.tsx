import { EVENT } from "@/lib/event";
import RsvpForm from "@/components/RsvpForm";
// import { DressCode } from "@/components/Info";
import DesignShell from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Gallery from "@/components/Gallery";
import Attire from "@/components/Attire";
import Gift from "@/components/Gift";
export default function Design1() {
  return (
    <DesignShell>
      <main>
        <Hero variant={1} />
        <MapSection />
        {/* <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <DressCode />
        </section> */}
        <Attire /><Gift /><Gallery />
        <section id="rsvp" className="bg-dusty-100 px-6 py-20 scroll-mt-4"><div className="max-w-lg mx-auto">
          <h2 className="font-serif text-4xl text-center mb-8">Kindly Reply</h2><RsvpForm variant={1} /></div></section>
      </main>
    </DesignShell>
  );
}
