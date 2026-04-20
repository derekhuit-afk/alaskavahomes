import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isNYZip(zip: string): boolean {
  const z = (zip || '').trim();
  if (!/^\d{5}$/.test(z)) return false;
  const n = parseInt(z, 10);
  if (z === '06390') return true;
  if (n >= 10001 && n <= 14975) return true;
  if (n >= 501 && n <= 544) return true;
  return false;
}

function sanitizePhone(raw: string): string {
  const digits = (raw || '').replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return digits ? `+${digits}` : '';
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = (body.name || '').toString().trim().slice(0, 200);
    const email = (body.email || '').toString().trim().slice(0, 200).toLowerCase();
    const phoneRaw = (body.phone || '').toString();
    const phone = sanitizePhone(phoneRaw);
    const zip = (body.zip || '').toString().trim().slice(0, 10);
    const loan_type = (body.loan_type || '').toString().slice(0, 40);
    const service_status = (body.service_status || '').toString().slice(0, 40);
    const installation = (body.installation || '').toString().slice(0, 60);
    const source = (body.source || 'alaskavahomes.com').toString().slice(0, 120);
    const tcpa_consent = Boolean(body.tcpa_consent);
    const terms_consent = Boolean(body.terms_consent);

    // Validation
    if (!name || name.length < 2) return NextResponse.json({ error: 'Name required.' }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    if (!phone || phone.length < 11) return NextResponse.json({ error: 'Valid phone required.' }, { status: 400 });
    if (!/^\d{5}$/.test(zip)) return NextResponse.json({ error: 'Valid 5-digit ZIP required.' }, { status: 400 });

    // NY block — regulatory requirement
    if (isNYZip(zip)) {
      return NextResponse.json(
        { error: 'This site is not authorized by the New York State Department of Financial Services. No mortgage loan applications for properties located in the state of New York will be accepted through this site.' },
        { status: 403 }
      );
    }

    if (!terms_consent || !tcpa_consent) {
      return NextResponse.json({ error: 'Both consent checkboxes required.' }, { status: 400 });
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || '';
    const ua = req.headers.get('user-agent') || '';

    const supa = supabaseAdmin();
    if (supa) {
      const { error } = await supa.from('alaska_va_leads').insert({
        name, email, phone, zip, loan_type, service_status, installation,
        source, ip_address: ip, user_agent: ua,
        tcpa_consent, terms_consent,
      });
      if (error) console.error('Supabase insert error:', error);
    }

    // Twilio SMS alert (optional)
    const tSid = process.env.TWILIO_ACCOUNT_SID;
    const tTok = process.env.TWILIO_AUTH_TOKEN;
    const tFrom = process.env.TWILIO_FROM_NUMBER;
    const tTo = process.env.LEAD_ALERT_TO_NUMBER;
    if (tSid && tTok && tFrom && tTo) {
      try {
        const twilio = (await import('twilio')).default;
        const client = twilio(tSid, tTok);
        await client.messages.create({
          from: tFrom,
          to: tTo,
          body: `🇺🇸 AlaskaVAHomes lead\n${name} · ${phone}\n${email}\nZIP ${zip} · ${loan_type}${service_status ? ` · ${service_status}` : ''}${installation ? ` · ${installation}` : ''}`,
        });
      } catch (smsErr) {
        console.error('Twilio SMS error:', smsErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead route error:', err);
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}
