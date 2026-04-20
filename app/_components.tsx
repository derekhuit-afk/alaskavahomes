'use client';

import { useState } from 'react';
import Link from 'next/link';

export const APPLY_URL = 'https://online.cardinalfinancial.com/#/p/apply/derekhuit';

export function isNYZip(zip: string): boolean {
  const z = zip.trim();
  if (!/^\d{5}$/.test(z)) return false;
  const n = parseInt(z, 10);
  if (z === '06390') return true;
  if (n >= 10001 && n <= 14975) return true;
  if (n >= 501 && n <= 544) return true;
  return false;
}

export function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="font-display text-xl font-semibold text-bone">
          Alaska<span className="text-mgold">VA</span>Homes
        </Link>
        <div className="hidden items-center gap-6 text-[11px] font-semibold uppercase tracking-trackout text-bone/80 md:flex">
          <Link href="/anchorage" className="hover-underline">Anchorage</Link>
          <Link href="/jber" className="hover-underline">JBER</Link>
          <Link href="/wasilla" className="hover-underline">Wasilla</Link>
          <Link href="/eielson" className="hover-underline">Eielson</Link>
          <a href={APPLY_URL} className="hover-underline text-mgold">Apply →</a>
        </div>
        <a href={APPLY_URL} className="text-[11px] font-semibold uppercase tracking-trackout text-mgold hover-underline md:hidden">
          Apply →
        </a>
      </div>
    </nav>
  );
}

export function LeadForm({ source = 'alaskavahomes.com', defaultInstallation = '' }: { source?: string; defaultInstallation?: string }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', zip: '',
    loan_type: 'va_purchase',
    service_status: 'active_duty',
    installation: defaultInstallation,
  });
  const [consent, setConsent] = useState({ terms: false, tcpa: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'ny_blocked'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const canSubmit =
    consent.terms && consent.tcpa &&
    form.name.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    /^\d{10,}$/.test(form.phone.replace(/\D/g, '')) &&
    /^\d{5}$/.test(form.zip);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (isNYZip(form.zip)) { setStatus('ny_blocked'); return; }
    setStatus('sending'); setErrorMsg('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source,
          tcpa_consent: consent.tcpa,
          terms_consent: consent.terms,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-bone p-8 text-ink md:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Delivered</p>
        <h3 className="mt-3 font-display text-3xl font-medium text-steel">Your PCS guide is on the way.</h3>
        <p className="mt-4 text-ink/70">
          Check your email — the PDF link is in your inbox. I'll reach out personally within 1 business hour (7am–7pm Alaska time).
        </p>
        <a href="/guide.pdf" target="_blank" rel="noopener" className="btn-primary mt-6">Or download it directly</a>
      </div>
    );
  }

  if (status === 'ny_blocked') {
    return (
      <div className="bg-bone p-8 text-ink md:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Important Notice</p>
        <h3 className="mt-3 font-display text-3xl font-medium text-steel">We can't serve New York from this site.</h3>
        <p className="mt-4 text-ink/70">
          This site is not authorized by the New York State Department of Financial Services. No mortgage loan applications for properties located in the state of New York will be accepted through this site.
        </p>
        <button onClick={() => { setStatus('idle'); setForm({ ...form, zip: '' }); }} className="btn-outline mt-6">Update ZIP code</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-bone p-6 text-ink md:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="field" type="text" placeholder="Full name" required
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="field" type="email" placeholder="Email address" required
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="field" type="tel" placeholder="Phone number" required
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className="field" type="text" inputMode="numeric" pattern="\d{5}" maxLength={5} placeholder="Property ZIP" required
          value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })} />
      </div>

      <select className="field mt-4" value={form.service_status}
        onChange={(e) => setForm({ ...form, service_status: e.target.value })}>
        <option value="active_duty">Active Duty</option>
        <option value="veteran">Veteran</option>
        <option value="reserve">Reserve / National Guard</option>
        <option value="retired">Retired military</option>
        <option value="surviving_spouse">Surviving spouse</option>
        <option value="other">Other / Prefer not to say</option>
      </select>

      <select className="field mt-3" value={form.installation}
        onChange={(e) => setForm({ ...form, installation: e.target.value })}>
        <option value="">Installation (optional)</option>
        <option value="JBER">JBER (Elmendorf-Richardson)</option>
        <option value="Eielson">Eielson AFB</option>
        <option value="Fort Wainwright">Fort Wainwright</option>
        <option value="Coast Guard Kodiak">Coast Guard Kodiak</option>
        <option value="Coast Guard Juneau">Coast Guard Juneau</option>
        <option value="Other AK">Other Alaska</option>
        <option value="PCS Incoming">PCS orders to Alaska (incoming)</option>
      </select>

      <select className="field mt-3" value={form.loan_type}
        onChange={(e) => setForm({ ...form, loan_type: e.target.value })}>
        <option value="va_purchase">VA purchase loan</option>
        <option value="va_refi">VA refinance (IRRRL / Cash-out)</option>
        <option value="conventional">Conventional (not using VA)</option>
        <option value="exploring">Just exploring</option>
      </select>

      <div className="mt-6 space-y-3 text-[12px] leading-relaxed text-ink/70">
        <label className="flex cursor-pointer items-start gap-3">
          <input type="checkbox" className="mt-0.5 h-4 w-4 flex-shrink-0 accent-steel"
            checked={consent.terms}
            onChange={(e) => setConsent({ ...consent, terms: e.target.checked })} />
          <span>I agree to the <Link href="/privacy" className="underline">Privacy Policy</Link> and <Link href="/terms" className="underline">Terms of Use</Link>.</span>
        </label>
        <label className="flex cursor-pointer items-start gap-3">
          <input type="checkbox" className="mt-0.5 h-4 w-4 flex-shrink-0 accent-steel"
            checked={consent.tcpa}
            onChange={(e) => setConsent({ ...consent, tcpa: e.target.checked })} />
          <span>By submitting, I agree to receive calls, texts (including autodialed and prerecorded messages), and emails from Derek Huit and Cardinal Financial Company, Limited Partnership regarding mortgage products at the number and email provided. Consent is not a condition of any purchase. Message and data rates may apply. Reply STOP to opt out.</span>
        </label>
      </div>

      <button type="submit" className="btn-gold mt-6 w-full" disabled={!canSubmit || status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send me the PCS guide'}
      </button>

      {status === 'error' && <p className="mt-4 text-sm text-red-700">{errorMsg || 'Something went wrong. Please try again.'}</p>}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-steel-900 py-14 text-bone/70">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-xl font-semibold text-bone">
              Alaska<span className="text-mgold">VA</span>Homes
            </div>
            <p className="mt-4 text-xs leading-relaxed">
              VA home loans for Alaska's military community. Built by an 18-year Alaska LO. Not endorsed by the VA or any government agency.
            </p>
          </div>

          <div className="text-xs leading-relaxed">
            <p className="mb-2 font-semibold uppercase tracking-trackout text-bone">Derek Huit · NMLS #203980</p>
            <p>Anchorage, Alaska</p>
            <p className="mt-2">Powered by <strong className="text-bone/90">Cardinal Financial Company, Limited Partnership</strong></p>
            <p>Company NMLS #66247 · VA Approved Lender</p>
            <p>3701 Arco Corporate Drive, Suite 200</p>
            <p>Charlotte, NC 28273</p>
            <p className="mt-3"><a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/66247" target="_blank" rel="noopener" className="underline">NMLS Consumer Access →</a></p>
            <p className="mt-1"><a href="https://www.cardinalfinancial.com/nmls-licensing" target="_blank" rel="noopener" className="underline">State licensing information →</a></p>
          </div>

          <div className="text-xs leading-relaxed">
            <p className="mb-2 font-semibold uppercase tracking-trackout text-bone">Legal</p>
            <ul className="space-y-1.5">
              <li><Link href="/privacy" className="hover:text-bone">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-bone">Terms of Use</Link></li>
              <li><a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/203980" target="_blank" rel="noopener" className="hover:text-bone">Verify my NMLS ID →</a></li>
            </ul>
            <p className="mb-2 mt-4 font-semibold uppercase tracking-trackout text-bone">Related</p>
            <ul className="space-y-1.5">
              <li><a href="https://loanak.com" target="_blank" rel="noopener" className="hover:text-bone">LoanAK.com →</a></li>
              <li><a href="https://usa.loan" target="_blank" rel="noopener" className="hover:text-bone">USA.loan →</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-bone/10 pt-8 text-[11px] leading-relaxed text-bone/60">
          <p className="mb-3">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-4 w-4 border border-bone/60 bg-transparent" title="Equal Housing Opportunity">⌂</span>
              Equal Housing Opportunity.
            </span>{' '}
            Cardinal Financial Company, Limited Partnership holds state licenses as described at{' '}
            <a href="https://www.cardinalfinancial.com/nmls-licensing" target="_blank" rel="noopener" className="underline">cardinalfinancial.com/nmls-licensing</a>.
          </p>
          <p className="mb-3">
            <strong className="text-bone/80">This site is not authorized by the New York State Department of Financial Services.</strong> No mortgage loan applications for properties located in the state of New York will be accepted through this site.
          </p>
          <p className="mb-3">
            Not a commitment to lend. All loans subject to credit approval, underwriting, appraisal, and property meeting VA Minimum Property Requirements. Rates, terms, and programs subject to change without notice. Not all applicants will qualify. <strong className="text-bone/80">Not endorsed by the Department of Veterans Affairs or any U.S. government agency.</strong>
          </p>
          <p>© {new Date().getFullYear()} Huitai LLC. All rights reserved. AlaskaVAHomes.com is a marketing site operated by Huitai LLC.</p>
        </div>
      </div>
    </footer>
  );
}
