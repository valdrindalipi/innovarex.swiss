-- Kurz-Patch, im SQL Editor ausführen:
-- ---------- Nachtrag 22.09.2026: Uploads und Briefings auch für eingeloggte Nutzer, SVG erlauben ----------
update storage.buckets set allowed_mime_types = array['image/jpeg','image/png','image/webp','image/heic','image/svg+xml','application/pdf'] where id = 'briefing';
drop policy if exists briefing_upload_auth on storage.objects;
create policy briefing_upload_auth on storage.objects for insert to authenticated with check (bucket_id = 'briefing');
drop policy if exists briefings_auth_insert on public.briefings;
create policy briefings_auth_insert on public.briefings for insert to authenticated with check (true);
drop policy if exists leads_auth_insert on public.leads;
create policy leads_auth_insert on public.leads for insert to authenticated with check (true);
