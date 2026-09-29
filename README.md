# Raymund & Vanessa — RSVP (Next.js 14 + Supabase)
1. `npm install`
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Copy `.env.example` to `.env.local` and fill in the URL, service role key and an admin password.
4. `npm run dev` → `/` (design picker), `/designs/1|2|3`, `/admin`.
5. Add the same env vars in Vercel. Fill in venue addresses in `lib/event.ts`.

## Media & map
- Hero image: `public/hero.jpg` · Gallery: `public/gallery/01.jpg…` (edit the list in `MEDIA` in `lib/event.ts`) · Music: drop an mp3 at `public/music/wedding.mp3`.
- Map: enable the **Maps Embed API** in Google Cloud, set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, and restrict the key to your domain (HTTP referrers).
