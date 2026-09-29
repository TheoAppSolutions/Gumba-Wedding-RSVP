"use client";
import { useState } from "react";
type Rsvp = { id: string; name: string; message: string | null; attending: boolean; created_at: string };
export default function Admin() {
  const [pw, setPw] = useState("");
  const [rows, setRows] = useState<Rsvp[] | null>(null);
  const [err, setErr] = useState("");
  const [filter, setFilter] = useState<"all" | "yes" | "no">("all");
  async function load(e?: React.FormEvent) {
    e?.preventDefault(); setErr("");
    const res = await fetch("/api/admin/rsvps", { headers: { "x-admin-password": pw } });
    if (!res.ok) return setErr(res.status === 401 ? "Wrong password" : "Could not load responses");
    setRows((await res.json()).rsvps);
  }
  if (!rows)
    return (<main className="min-h-screen flex items-center justify-center p-6"><form onSubmit={load} className="w-full max-w-sm space-y-4 bg-white p-8 rounded-xl shadow">
      <h1 className="font-serif text-3xl">Admin</h1>
      <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" className="w-full border border-dusty-200 rounded-lg px-4 py-3" />
      {err && <p className="text-sm text-red-600">{err}</p>}
      <button className="w-full bg-dusty-700 text-white rounded-lg py-3">Sign in</button></form></main>);
  const yes = rows.filter((r) => r.attending).length;
  const shown = rows.filter((r) => filter === "all" || (filter === "yes") === r.attending);
  const csv = () => {
    const q = (s: string) => `"${s.replace(/"/g, '""')}"`;
    const body = ["Name,Attending,Message,Submitted", ...rows.map((r) => [q(r.name), r.attending ? "Yes" : "No", q(r.message ?? ""), r.created_at].join(","))].join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([body], { type: "text/csv" })); a.download = "rsvps.csv"; a.click();
  };
  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6"><h1 className="font-serif text-4xl">RSVP Responses</h1>
        <div className="flex gap-2"><button onClick={() => load()} className="border border-dusty-400 rounded-full px-4 py-2 text-sm">Refresh</button><button onClick={csv} className="bg-dusty-700 text-white rounded-full px-4 py-2 text-sm">Export CSV</button></div></div>
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        {[["Total", rows.length], ["Going", yes], ["Not going", rows.length - yes]].map(([l, n]) => (<div key={l as string} className="bg-white rounded-xl p-4 shadow-sm"><p className="text-3xl font-serif">{n}</p><p className="text-xs uppercase tracking-widest text-dusty-600">{l}</p></div>))}
      </div>
      <div className="flex gap-2 mb-4">{(["all", "yes", "no"] as const).map((f) => (<button key={f} onClick={() => setFilter(f)} className={`px-4 py-1.5 rounded-full text-sm border ${filter === f ? "bg-dusty-600 text-white border-dusty-600" : "border-dusty-300"}`}>{f === "all" ? "All" : f === "yes" ? "Going" : "Not going"}</button>))}</div>
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto"><table className="w-full text-left text-sm">
        <thead className="bg-dusty-100 text-dusty-800"><tr><th className="p-3">Name</th><th className="p-3">Response</th><th className="p-3">Message</th><th className="p-3">Submitted</th></tr></thead>
        <tbody>{shown.map((r) => (<tr key={r.id} className="border-t border-dusty-100 align-top"><td className="p-3 font-medium">{r.name}</td>
          <td className="p-3"><span className={`px-2 py-0.5 rounded-full text-xs ${r.attending ? "bg-dusty-200 text-dusty-800" : "bg-gray-200 text-gray-700"}`}>{r.attending ? "Going" : "Not going"}</span></td>
          <td className="p-3 max-w-xs">{r.message}</td><td className="p-3 whitespace-nowrap text-dusty-600">{new Date(r.created_at).toLocaleString()}</td></tr>))}
          {!shown.length && <tr><td colSpan={4} className="p-6 text-center text-dusty-600">No responses yet.</td></tr>}</tbody></table></div>
    </main>
  );
}
