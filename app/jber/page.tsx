import type { Metadata } from 'next';
import Link from 'next/link';
import { APPLY_URL, Nav, LeadForm, Footer } from '../_components';

export const metadata: Metadata = {
  title: 'JBER VA Home Loans | Joint Base Elmendorf-Richardson | Derek Huit NMLS #203980',
  description:
    'VA home loans for Joint Base Elmendorf-Richardson (JBER) personnel. PCS-focused guidance. Zero down, no PMI. Anchorage-based LO with 18 years experience and $1B+ originated.',
  alternates: { canonical: '/jber' },
};

const jberSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'VA Home Loan Origination',
  provider: { '@id': 'https://alaskavahomes.com/#business' },
  areaServed: { '@type': 'Place', name: 'Joint Base Elmendorf-Richardson (JBER)' },
  audience: { '@type': 'Audience', audienceType: 'JBER active-duty military and their families' },
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-steel text-bone">
      <Nav />
      <div className="grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pt-40 md:pb-28">
        <Link href="/" className="mb-8 inline-block text-[11px] font-semibold uppercase tracking-trackout text-bone/60 hover-underline">
          ← All Alaska bases
        </Link>
        <p className="rise rise-1 mb-6 text-[11px] font-semibold uppercase tracking-trackout text-mgold">
          Joint Base Elmendorf-Richardson · 30,000+ Personnel · PCS Buyer Focus
        </p>
        <h1 className="rise rise-2 display-hero font-display text-[48px] leading-[1.02] tracking-tight text-bone md:text-[72px]">
          JBER VA loans,<br />
          <span className="italic text-mgold">PCS to closing.</span>
        </h1>
        <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
          Every year, thousands of service members PCS into JBER. I've closed VA loans for Air Force aircrew, Army brigade personnel, dual-military couples, and every rank from E-3 to O-6. Here's the JBER playbook.
        </p>
        <div className="rise rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={APPLY_URL} className="btn-gold">Start my JBER VA application</a>
          <a href="#guide" className="btn-outline border-bone/30 text-bone hover:bg-bone hover:text-steel">Get the PCS guide</a>
        </div>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jberSchema) }} />
      <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-14">

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">The Base</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">What JBER actually looks like for PCS buyers.</h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80">
            <p>JBER is a joint Air Force and Army installation formed in 2010 by merging Elmendorf Air Force Base and Fort Richardson. Today it's the largest military installation in Alaska, home to the 11th Air Force, 673d Air Base Wing, 3rd Wing, 477th Fighter Group, U.S. Army Alaska (USARAK), and the 4th Infantry Brigade Combat Team (Airborne).</p>
            <p>For VA homebuyers, the most important JBER fact is geography: the base sits <em>inside</em> Anchorage city limits. You don't need to move to a remote gate town. Most of Anchorage's best neighborhoods are a 10–20 minute drive from Gate 1.</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">The Math</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">Why JBER personnel buy instead of living in PPV.</h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80">
            <p>Aurora Military Housing (PPV) on JBER is decent quality, but moving in means you <strong>forfeit your BAH</strong>. For most assignments of 2+ years, that math loses to VA-financed ownership.</p>
            <p>Example: an E-6 with dependents at JBER earns roughly $2,900/mo BAH. Over a 3-year tour, that's $104,400. A VA-financed $450K home builds roughly $35K–$50K in equity over the same period (principal paydown + appreciation), <em>plus</em> you keep the BAH as a housing stipend covering most of the mortgage payment.</p>
            <p>Net: $100K+ better off owning than renting PPV — and you walk away with an asset you can sell, refinance, or hold as a VA-financed rental for your next duty station.</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Common PCS Scenarios</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">Four JBER situations I see constantly.</h2>
          <div className="space-y-6 text-[16px] leading-relaxed text-ink/80">
            <div className="border-l-2 border-mgold pl-6">
              <h3 className="font-display text-xl text-steel">First VA purchase — E-5/E-6 enlisted family</h3>
              <p className="mt-2">Target Eagle River or South Anchorage for $425K–$500K starter homes. Zero down, 4% seller concessions, funding fee rolled in. Out-of-pocket often under $3,000 after concessions.</p>
            </div>
            <div className="border-l-2 border-mgold pl-6">
              <h3 className="font-display text-xl text-steel">Second VA loan — retained entitlement</h3>
              <p className="mt-2">You already own a VA-financed home at a prior duty station and kept it as a rental. Partial entitlement can still support a second VA purchase at JBER with minimal down — often still $0 depending on loan size.</p>
            </div>
            <div className="border-l-2 border-mgold pl-6">
              <h3 className="font-display text-xl text-steel">Dual-military couple</h3>
              <p className="mt-2">Both service members can use entitlement on the same purchase, or one can hold it for later. Combined income typically qualifies for $600K+ homes in Hillside or South Addition.</p>
            </div>
            <div className="border-l-2 border-mgold pl-6">
              <h3 className="font-display text-xl text-steel">Disabled vet — funding fee exempt</h3>
              <p className="mt-2">Any VA service-connected rating exempts you from the 2.15% funding fee. On a $450K home, that's $9,675 saved. Makes VA the clear winner over every other loan type.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-steel/10 pt-12">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Related Pages</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/anchorage" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">Anchorage market</h3>
              <p className="mt-2 text-sm text-ink/70">Neighborhoods, prices, timelines →</p>
            </Link>
            <Link href="/wasilla" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">Wasilla / Mat-Su</h3>
              <p className="mt-2 text-sm text-ink/70">Longer commute, bigger lots →</p>
            </Link>
            <Link href="/eielson" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">Eielson / Fairbanks</h3>
              <p className="mt-2 text-sm text-ink/70">Interior AK, watch the dry cabins →</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideCTA() {
  return (
    <section id="guide" className="bg-steel py-20 text-bone md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5 md:px-10 md:gap-16">
        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold">Free PCS Guide</p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">The PCS-to-Alaska VA Buyer's Guide.</h2>
          <p className="mt-5 text-bone/70">14 pages, written for JBER PCS arrivals. Timing, COE, BAH math, MPR traps, temp lodging.</p>
        </div>
        <div className="md:col-span-3">
          <LeadForm source="alaskavahomes.com/jber" defaultInstallation="JBER" />
        </div>
      </div>
    </section>
  );
}

export default function JberPage() {
  return (
    <main>
      <Hero />
      <Content />
      <GuideCTA />
      <Footer />
    </main>
  );
}
