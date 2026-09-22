-- Innovarex Admin: Schema, Rechte und Speicher
-- Einmal im Supabase SQL Editor ausführen (Projekt fgmvvtvcrjngqzyrkvfn).
-- Erneutes Ausführen ist unkritisch (create if not exists / drop policy if exists).

create extension if not exists pgcrypto;

-- ---------- Tabellen ----------
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  firma text,
  email text not null,
  telefon text,
  interesse text,
  menge_budget text,
  nachricht text,
  erstberatung text,
  quelle text not null default 'website',
  stage text not null default 'neu',
  wert numeric,
  prioritaet text not null default 'normal',
  naechster_schritt text,
  faellig_am date,
  verloren_grund text,
  briefing_token uuid not null default gen_random_uuid()
);
create index if not exists leads_stage_idx on public.leads (stage);
create index if not exists leads_created_idx on public.leads (created_at desc);

create table if not exists public.lead_notizen (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  created_at timestamptz not null default now(),
  typ text not null default 'notiz',
  text text not null,
  autor text
);
create index if not exists lead_notizen_lead_idx on public.lead_notizen (lead_id, created_at desc);

create table if not exists public.aufgaben (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads (id) on delete cascade,
  created_at timestamptz not null default now(),
  titel text not null,
  faellig_am date,
  erledigt boolean not null default false,
  erledigt_am timestamptz
);
create index if not exists aufgaben_lead_idx on public.aufgaben (lead_id);

create table if not exists public.briefings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  token uuid,
  lead_id uuid references public.leads (id) on delete set null,
  firma text,
  ansprechperson text,
  email text,
  telefon text,
  daten jsonb not null default '{}'::jsonb,
  dateien jsonb not null default '[]'::jsonb
);
create index if not exists briefings_token_idx on public.briefings (token);

-- updated_at automatisch
create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists leads_updated_at on public.leads;
create trigger leads_updated_at before update on public.leads for each row execute function public.set_updated_at();

-- Briefing automatisch dem Lead zuordnen, wenn ein Token mitkommt
create or replace function public.link_briefing_to_lead() returns trigger language plpgsql security definer as $$
begin
  if new.token is not null and new.lead_id is null then
    select id into new.lead_id from public.leads where briefing_token = new.token limit 1;
  end if;
  if new.lead_id is not null then
    update public.leads set stage = case when stage in ('neu','erstgespraech','briefing') then 'kalkulation' else stage end where id = new.lead_id;
    insert into public.lead_notizen (lead_id, typ, text, autor) values (new.lead_id, 'system', 'Briefing eingereicht', 'System');
  end if;
  return new;
end $$;
drop trigger if exists briefings_link on public.briefings;
create trigger briefings_link before insert on public.briefings for each row execute function public.link_briefing_to_lead();

-- ---------- Zugriff ----------
alter table public.leads enable row level security;
alter table public.lead_notizen enable row level security;
alter table public.aufgaben enable row level security;
alter table public.briefings enable row level security;

create or replace function public.is_admin() returns boolean language sql stable as $$
  select coalesce(auth.jwt() ->> 'email', '') in ('vdalipi@innovarex.swiss')
$$;

-- Website darf Anfragen und Briefings nur anlegen, nichts lesen
drop policy if exists leads_anon_insert on public.leads;
create policy leads_anon_insert on public.leads for insert to anon with check (true);
drop policy if exists briefings_anon_insert on public.briefings;
create policy briefings_anon_insert on public.briefings for insert to anon with check (true);

-- Admin darf alles
drop policy if exists leads_admin on public.leads;
create policy leads_admin on public.leads for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists notizen_admin on public.lead_notizen;
create policy notizen_admin on public.lead_notizen for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists aufgaben_admin on public.aufgaben;
create policy aufgaben_admin on public.aufgaben for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists briefings_admin on public.briefings;
create policy briefings_admin on public.briefings for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- ---------- Datei-Speicher für Briefing-Uploads ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('briefing', 'briefing', false, 15728640, array['image/jpeg','image/png','image/webp','image/heic','application/pdf'])
on conflict (id) do nothing;

drop policy if exists briefing_upload_anon on storage.objects;
create policy briefing_upload_anon on storage.objects for insert to anon with check (bucket_id = 'briefing');
drop policy if exists briefing_read_admin on storage.objects;
create policy briefing_read_admin on storage.objects for select to authenticated using (bucket_id = 'briefing' and public.is_admin());
drop policy if exists briefing_delete_admin on storage.objects;
create policy briefing_delete_admin on storage.objects for delete to authenticated using (bucket_id = 'briefing' and public.is_admin());
