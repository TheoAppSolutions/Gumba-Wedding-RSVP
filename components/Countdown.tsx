"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";

const target = EVENT.dateISO ? new Date(EVENT.dateISO).getTime() : null;

export default function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (target === null || Number.isNaN(target)) return;
    const tick = () => setRemaining(target - Date.now());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (target === null || Number.isNaN(target)) return null;

  const totalSeconds = remaining === null ? 0 : Math.max(0, Math.floor(remaining / 1000));
  const parts = [
    ["Days", Math.floor(totalSeconds / 86400)],
    ["Hours", Math.floor((totalSeconds % 86400) / 3600)],
    ["Minutes", Math.floor((totalSeconds % 3600) / 60)],
    ["Seconds", totalSeconds % 60],
  ] as const;
  const passed = remaining !== null && remaining <= 0;

  return (
    <section className="relative z-20 -mt-12 px-5" aria-label="Countdown to the birthday celebration">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_70px_rgba(90,38,52,0.14)]">
        <div className="grid md:grid-cols-[0.75fr_1.25fr]">
          <div className="flex flex-col justify-center bg-dusty-700 px-7 py-8 text-center text-white md:px-10 md:text-left">
            <p className="text-[10px] uppercase tracking-[0.35em] text-dusty-100">Mark your calendar</p>
            <p className="mt-3 font-serif text-3xl font-light italic sm:text-4xl">{EVENT.dateShort || EVENT.dateLong}</p>
            {EVENT.time && <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/80">{EVENT.time}</p>}
          </div>
          <div className="px-4 py-8 sm:px-8">
            <p className="mb-5 text-center text-[10px] uppercase tracking-[0.35em] text-dusty-600">{passed ? "The party is here" : "Until the birthday celebration"}</p>
            {passed ? <p className="text-center font-serif text-3xl italic text-dusty-800">Let&apos;s celebrate!</p> : (
              <div className="grid grid-cols-4 divide-x divide-dusty-200" role="timer" aria-live="off">
                {parts.map(([label, value]) => <div key={label} className="px-1 text-center sm:px-3"><p className="font-serif text-3xl tabular-nums text-dusty-800 sm:text-5xl">{remaining === null ? "--" : String(value).padStart(2, "0")}</p><p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-dusty-600 sm:text-[10px]">{label}</p></div>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
