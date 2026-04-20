# alaskavahomes.com

Hub 3 of the Derek Huit mortgage portfolio. VA home loans for Alaska's military community.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Supabase · Twilio · Vercel

## Environment variables

```
NEXT_PUBLIC_SUPABASE_URL=https://vvkdnzqgtajeouxlliuk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon>
SUPABASE_SERVICE_ROLE_KEY=<service_role>
LEAD_ALERT_EMAIL=derekhuit@gmail.com
TWILIO_ACCOUNT_SID=(optional)
TWILIO_AUTH_TOKEN=(optional)
TWILIO_FROM_NUMBER=(optional)
LEAD_ALERT_TO_NUMBER=(optional)
```

## Supabase table DDL

Run in CRMEX project SQL editor:

```sql
create table if not exists public.alaska_va_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text not null,
  zip text not null,
  loan_type text,
  service_status text,
  installation text,
  source text,
  ip_address text,
  user_agent text,
  tcpa_consent boolean default false,
  terms_consent boolean default false
);
alter table public.alaska_va_leads enable row level security;
```

## Pages

- `/` — Main VA-in-Alaska landing
- `/anchorage` — Priority location page (JBER commuters + Anchorage market)
- `/jber` — JBER PCS playbook
- `/wasilla` — Mat-Su Valley
- `/eielson` — Interior AK (Eielson + Fort Wainwright)
- `/privacy` — Privacy policy
- `/terms` — Terms of use (VA non-endorsement, NY non-authorization)

## Compliance notes

- Derek NMLS **#203980** throughout
- Cardinal Financial NMLS **#66247**
- "Not endorsed by the VA or any government agency" on every public page
- NY non-authorization notice in footer + on API lead submit
- TCPA-compliant two-checkbox consent on all lead forms
- Equal Housing Opportunity disclosure
