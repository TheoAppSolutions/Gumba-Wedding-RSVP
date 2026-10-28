# Birthday Celebration RSVP

A Next.js 14 birthday invitation with a Supabase RSVP form and private response dashboard.

## Set up

1. Run `npm install`.
2. Run `supabase/schema.sql` in the Supabase SQL editor to create the separate `birthday_rsvp` table. The old wedding responses remain in their original table.
3. Copy `.env.example` to `.env.local` and set the Supabase URL, service role key, and admin password.
4. Run `npm run dev`. The invitation is at `/` and the response dashboard is at `/admin`.
5. Add the same environment variables to your deployment.

## Edit the invitation

Edit `lib/event.ts` to update the details for Raymund’s 60th birthday. It currently uses December 21, 2026 at 1:30 PM, Hotel Alejandro Roof Deck in Tacloban City, and a `90s disco ball` dress code. The ISO date uses Philippine time (`+08:00`) for the countdown.

The existing hero photo and background music remain in `public/`. Change their paths in `lib/event.ts` if you replace those files. The gallery photos are still stored in `public/gallery/` but are no longer shown on the invitation. The map works without an API key; set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` if you want to use the Google Maps Embed API.

The disco dress code inspiration images are `public/attire-men-disco.png` and `public/attire-women-disco.png`. They were edited from the original `attire-men.png` and `attire-women.png` references and appear together in the attire section.
