"use client";
import { useState } from "react";
const V = {
  1: { card: "bg-white/90 rounded-2xl shadow-lg p-8", input: "rounded-lg border border-dusty-200", on: "bg-dusty-600 text-white border-dusty-600", btn: "rounded-full bg-dusty-700 hover:bg-dusty-800" },
  2: { card: "bg-transparent", input: "rounded-none border-0 border-b border-dusty-300 bg-transparent px-0", on: "bg-dusty-600 border-dusty-800", btn: "rounded-none bg-dusty-800 hover:bg-dusty-900 tracking-widest uppercase" },
  3: { card: "bg-dusty-100 rounded-sm p-8 border border-dusty-300", input: "rounded-sm border border-dusty-300 bg-white", on: "bg-dusty-500 text-white border-dusty-500", btn: "rounded-sm bg-dusty-500 hover:bg-dusty-600" },
} as const;
export default function RsvpForm({ variant = 1 }: { variant?: 1 | 2 | 3 }) {
  const s = V[variant];
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [going, setGoing] = useState(true);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (attending === null) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, message, attending }) });
      if (!res.ok) throw new Error();
      setGoing(attending); setStatus("done");
    } catch { setStatus("error"); }
  }
  if (status === "done")
    return (<div className={`${s.card} text-center`}><h3 className="font-serif text-3xl mb-2">{going ? "See you there!" : "We'll miss you"}</h3><p className="text-dusty-700">Thank you, {name.split(" ")[0]}. Your response has been received.</p></div>);
  const opt = (val: boolean, label: string) => (
    <button type="button" onClick={() => setAttending(val)} className={`flex-1 border py-3 text-sm transition ${s.input} ${attending === val ? s.on : "bg-white text-dusty-800"}`}>{label}</button>
  );
  return (
    <form onSubmit={submit} className={`${s.card} space-y-5 text-left`}>
      <label className="block text-sm text-dusty-700">Full name
        <input required maxLength={120} value={name} onChange={(e) => setName(e.target.value)} className={`mt-1 w-full px-4 py-3 outline-none focus:border-dusty-500 ${s.input}`} placeholder="Your name" /></label>
      <div><p className="text-sm text-dusty-700 mb-1">Will you be attending?</p>
        <div className="flex gap-3">{opt(true, "Joyfully accepts")}{opt(false, "Regretfully declines")}</div></div>
      <label className="block text-sm text-dusty-700">Message for the couple
        <textarea rows={4} maxLength={1000} value={message} onChange={(e) => setMessage(e.target.value)} className={`mt-1 w-full px-4 py-3 outline-none focus:border-dusty-500 ${s.input}`} placeholder="Leave a note (optional)" /></label>
      <button disabled={status === "sending" || attending === null} className={`w-full py-3 text-white transition disabled:opacity-50 ${s.btn}`}>{status === "sending" ? "Sending…" : "Send RSVP"}</button>
      {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}
