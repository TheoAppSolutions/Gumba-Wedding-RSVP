"use client";
import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";
const target = new Date(EVENT.dateISO).getTime();
export default function Countdown() {
  const [left, setLeft] = useState<number | null>(null); // null until mounted, avoids hydration mismatch
  useEffect(() => {
    const tick = () => setLeft(target - Date.now());
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  const s = left === null ? 0 : Math.max(0, Math.floor(left / 1000));
  const parts = [["Days", Math.floor(s / 86400)], ["Hours", Math.floor((s % 86400) / 3600)], ["Minutes", Math.floor((s % 3600) / 60)], ["Seconds", s % 60]] as const;
  const passed = left !== null && left <= 0;
  return (
    <section className="bg-dusty-100 px-6 py-14 text-center" aria-label="Countdown to the wedding">
      <p className="text-xs uppercase tracking-[0.4em] text-dusty-600 mb-6">{passed ? "We said I do" : "Counting down to our big day"}</p>
      {passed ? (
        <p className="font-serif text-3xl md:text-4xl">{EVENT.dateLong}</p>
      ) : (
        <div className="flex justify-center gap-3 sm:gap-8" role="timer">
          {parts.map(([label, n]) => (
            <div key={label} className="w-16 sm:w-24">
              <p className="font-serif text-4xl sm:text-6xl font-light tabular-nums text-dusty-800">{left === null ? "--" : String(n).padStart(2, "0")}</p>
              <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-dusty-600">{label}</p>
            </div>))}
        </div>)}
    </section>
  );
}
