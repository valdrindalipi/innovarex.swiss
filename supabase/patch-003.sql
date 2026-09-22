-- Patch 003: Briefing-Vorbefüllung und Status
alter table public.leads add column if not exists briefing_angefordert_am timestamptz;
alter table public.leads add column if not exists briefing_eingereicht_am timestamptz;

-- Liefert nur unkritische Felder zu einem Token, für die Vorbefüllung der Briefing-Seite
create or replace function public.briefing_prefill(t uuid)
returns table (name text, firma text, email text, telefon text, interesse text, menge_budget text, erstberatung text)
language sql security definer stable as $$
  select name, firma, email, telefon, interesse, menge_budget, erstberatung from public.leads where briefing_token = t limit 1
$$;
revoke all on function public.briefing_prefill(uuid) from public;
grant execute on function public.briefing_prefill(uuid) to anon, authenticated;

-- Beim Einreichen: Zeitstempel setzen
create or replace function public.link_briefing_to_lead() returns trigger language plpgsql security definer as $$
begin
  if new.token is not null and new.lead_id is null then
    select id into new.lead_id from public.leads where briefing_token = new.token limit 1;
  end if;
  if new.lead_id is not null then
    update public.leads set briefing_eingereicht_am = now(), stage = case when stage in ('neu','erstgespraech','briefing') then 'kalkulation' else stage end where id = new.lead_id;
    insert into public.lead_notizen (lead_id, typ, text, autor) values (new.lead_id, 'system', 'Briefing eingereicht', 'System');
  end if;
  return new;
end $$;
