import type { Metadata } from 'next';
import Link from 'next/link';
import { APPLY_URL, Nav, LeadForm, Footer } from '../_components';

export const metadata: Metadata = {
  title: 'Eielson & Fairbanks VA Home Loans | Fort Wainwright | Derek Huit NMLS #203980',
  description:
    'VA home loans for Eielson AFB, Fort Wainwright, and Fairbanks. Watch the dry cabin rules. Lower prices, longer winters. 18 years of Alaska lending.',
  alternates: { canonical: '/eielson' },
};

const eielsonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'VA Home Loan Origination',
  provider: { '@id': 'https://alaskavahomes.com/#business' },
  areaServed: [
    { '@type': 'Place', name: 'Eielson Air Force Base' },
    { '@type': 'Place', name: 'Fort Wainwright' },
    { '@type': 'City', name: 'Fairbanks' },
    { '@type': 'City', name: 'North Pole' },
  ],
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
          Eielson AFB · Fort Wainwright · Fairbanks · North Pole
        </p>
        <h1 className="rise rise-2 display-hero font-display text-[48px] leading-[1.02] tracking-tight text-bone md:text-[72px]">
          Interior VA loans —<br />
          <span className="italic text-mgold">done right.</span>
        </h1>
        <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
          The Fairbanks market — Eielson F-35 families, Fort Wainwright soldiers, Guard and Reserve — plays by different rules than Anchorage. Lower prices, colder winters, dry cabins that VA won't finance. Here's what you need to know.
        </p>
        <div className="rise rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={APPLY_URL} className="btn-gold">Start my Interior VA application</a>
          <a href="#guide" className="btn-outline border-bone/30 text-bone hover:bg-bone hover:text-steel">Get the PCS guide</a>
        </div>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eielsonSchema) }} />
      <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-14">

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">The Market</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">Fairbanks-area pricing is a different ball game.</h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80">
            <p>Median single-family home prices in the Fairbanks North Star Borough run $275K–$375K — roughly 30% below Anchorage. Eielson AFB sits 25 minutes southeast of Fairbanks on Richardson Highway. Fort Wainwright is adjacent to Fairbanks proper. Most Interior military families live in one of three zones: North Pole (equidistant between Eielson and Fort Wainwright), Fairbanks city (Wainwright commute), or Moose Creek / Salcha (Eielson-oriented).</p>
            <p>The trade-off is weather and utilities. Interior Alaska winters regularly hit -40°F. Heating costs for a typical 2,000 sq ft home run $400–$700/month November through March. Factor that into your BAH math.</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">The Dry Cabin Problem</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">VA will not finance a dry cabin. Period.</h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80">
            <p>This is the #1 Interior VA mistake. The Fairbanks area has a substantial inventory of "dry cabins" — homes without running water, where residents haul water from fill stations. They're cheap ($120K–$200K), they're everywhere in the hills north of Fairbanks, and they're <strong>completely ineligible for VA financing</strong>.</p>
            <p>VA Minimum Property Requirements mandate a permanent running-water system — municipal or on-site well. No well, no plumbing, no VA loan. Many PCS-ing airmen fall in love with a dry cabin's price point and waste weeks before their LO breaks the bad news.</p>
            <p>If you want a dry cabin lifestyle on a VA loan, the move is to buy a plumbed home on a similar acreage in the same area. Trust me — it exists, it just takes a Fairbanks-fluent agent to find it.</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Where to Look</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">Neighborhoods by mission.</h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80">
            <div className="border-l-2 border-mgold pl-6">
              <h3 className="font-display text-xl text-steel">Eielson families</h3>
              <p className="mt-2">North Pole and Salcha are your neighborhoods. 15–25 minute commute to Eielson. Home prices $275K–$375K with municipal or community water. Watch for homes on propane with buried tanks — appraisers flag those.</p>
            </div>
            <div className="border-l-2 border-mgold pl-6">
              <h3 className="font-display text-xl text-steel">Fort Wainwright soldiers</h3>
              <p className="mt-2">Fairbanks proper (Hamilton Acres, Lathrop, Badger Road area) or North Pole. 5–15 minute commute to post. Better restaurant and retail access than Eielson-area housing.</p>
            </div>
            <div className="border-l-2 border-mgold pl-6">
              <h3 className="font-display text-xl text-steel">Officers / higher ranks</h3>
              <p className="mt-2">Farmers Loop, the University area, or the Goldstream Valley. Larger lots, nicer construction, view properties. $375K–$550K range.</p>
            </div>
            <div className="border-l-2 border-mgold pl-6">
              <h3 className="font-display text-xl text-steel">Single / unaccompanied</h3>
              <p className="mt-2">Fairbanks downtown or South Cushman area has condos and smaller homes in the $225K–$325K range. VA loans work on condos if the project is VA-approved — I'll check the list.</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Hidden Costs</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">Budget for Interior-specific expenses.</h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80">
            <ul className="space-y-3 pl-6">
              <li><strong>Heating fuel.</strong> Most homes use heating oil. A 275-gallon tank fill runs $900–$1,300. Most families fill 2–4x per winter.</li>
              <li><strong>Engine block heater plugs.</strong> Cars don't start at -30°F without being plugged in. Most Interior homes have outlets on the garage/driveway — verify during your inspection.</li>
              <li><strong>Snow removal.</strong> If you have a long driveway, budget $50–$150/mo for plowing or buy a snowblower ($800–$2,500).</li>
              <li><strong>Roof snow load.</strong> Heavy winters stress roofs. Get a professional to inspect for sagging or ice damming issues before writing an offer.</li>
              <li><strong>Seasonal electrical.</strong> Engine block heaters, trickle chargers, water line heat tape — electric bills spike Nov–Mar.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel/10 pt-12">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Related Pages</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/anchorage" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">Anchorage market</h3>
              <p className="mt-2 text-sm text-ink/70">Different state, different rules →</p>
            </Link>
            <Link href="/jber" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">JBER playbook</h3>
              <p className="mt-2 text-sm text-ink/70">For SW Alaska PCS →</p>
            </Link>
            <Link href="/wasilla" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">Wasilla / Mat-Su</h3>
              <p className="mt-2 text-sm text-ink/70">South-central commuters →</p>
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
          <p className="mt-5 text-bone/70">14 pages. Includes Interior-specific MPR warnings and the dry-cabin decision tree.</p>
        </div>
        <div className="md:col-span-3">
          <LeadForm source="alaskavahomes.com/eielson" defaultInstallation="Eielson" />
        </div>
      </div>
    </section>
  );
}

export default function EielsonPage() {
  return (
    <main>
      <Hero />
      <Content />
      <GuideCTA />
      <Footer />
    </main>
  );
}
