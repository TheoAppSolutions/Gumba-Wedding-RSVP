import { GIFT } from "@/lib/event";
export default function Gift() {
  return (
    <section className="bg-dusty-100 px-6 py-16">
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
        <div><h2 className="font-serif text-4xl mb-4">{GIFT.title}</h2><p className="text-dusty-800 leading-relaxed">{GIFT.message}</p></div>
        <figure className="mx-auto text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={GIFT.qr} alt="Gift QR code" width={220} height={220} loading="lazy" className="w-52 h-52 object-contain bg-white p-3 rounded-lg shadow" />
          <figcaption className="mt-3 text-xs uppercase tracking-[0.3em] text-dusty-600">{GIFT.qrLabel}</figcaption>
        </figure>
      </div>
    </section>
  );
}
