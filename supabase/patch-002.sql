-- Patch 002: Nur vdalipi@innovarex.swiss darf ein Konto haben. Jeder andere Login-Versuch wird auf Datenbank-Ebene abgelehnt.
create or replace function public.only_admin_accounts() returns trigger language plpgsql security definer as $$
begin
  if lower(coalesce(new.email, '')) <> 'vdalipi@innovarex.swiss' then
    raise exception 'Kein Zugang für diese E-Mail-Adresse.';
  end if;
  return new;
end $$;
drop trigger if exists only_admin_accounts on auth.users;
create trigger only_admin_accounts before insert on auth.users for each row execute function public.only_admin_accounts();

-- Bestehende Fremdkonten entfernen, falls vorhanden
delete from auth.users where lower(email) <> 'vdalipi@innovarex.swiss';
