import Link from "next/link";
export default function Picker() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="font-serif text-4xl">Choose a design</h1>
      {[["1", "Classic Centered"], ["2", "Modern Split"], ["3", "Editorial Monogram"]].map(([n, t]) => (
        <Link key={n} href={`/designs/${n}`} className="w-64 text-center rounded-full border border-dusty-400 py-3 hover:bg-dusty-100">Design {n} — {t}</Link>))}
      <Link href="/admin" className="text-sm text-dusty-600 underline mt-4">Admin</Link>
    </main>
  );
}
