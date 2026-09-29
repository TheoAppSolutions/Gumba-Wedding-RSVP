create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text,
  attending boolean not null,
  created_at timestamptz not null default now()
);
-- Only the server (service role key) touches this table.
alter table public.rsvps enable row level security;
