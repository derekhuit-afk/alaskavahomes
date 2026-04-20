import type { Metadata } from 'next';
import Link from 'next/link';
import { APPLY_URL, Nav, LeadForm, Footer } from '../_components';

export const metadata: Metadata = {
  title: 'Wasilla VA Home Loans | Mat-Su Valley | Derek Huit NMLS #203980',
  description:
    'VA home loans for Wasilla, Palmer, and Mat-Su Valley. Bigger lots, lower prices, 45-60 min commute to JBER. Zero down, no PMI. 18 years Alaska lending experience.',
  alternates: { canonical: '/wasilla' },
};

const wasillaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'VA Home Loan Origination',
  provider: { '@id': 'https://alaskavahomes.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Wasilla' },
    { '@type': 'City', name: 'Palmer' },
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
          Wasilla · Palmer · Mat-Su Valley · Big Lake · Willow
        </p>
        <h1 className="rise rise-2 display-hero font-display text-[48px] leading-[1.02] tracking-tight text-bone md:text-[72px]">
          VA loans for<br />
          <span className="italic text-mgold">the Valley.</span>
        </h1>
        <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
          The Mat-Su Valley trades a longer JBER commute for bigger lots, lower prices, and a less-urban lifestyle. Popular with enlisted families wanting acreage, dual-military couples building equity, and vets who shoot, snowmachine, or want horses.
        </p>
        <div className="rise rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={APPLY_URL} className="btn-gold">Start my Wasilla VA application</a>
          <a href="#guide" className="btn-outline border-bone/30 text-bone hover:bg-bone hover:text-steel">Get the PCS guide</a>
        </div>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wasillaSchema) }} />
      <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-14">

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">The Trade-Off</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">Valley math: cheaper per square foot, expensive per minute.</h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80">
            <p>Wasilla and Palmer sit 40–55 miles north of Anchorage via the Glenn Highway. For JBER personnel, that's a 45–60 minute one-way commute in good conditions, longer in winter. In exchange, home prices run 15–25% below comparable Anchorage homes — and you can get 1–5 acres of land for what a South Anchorage 8,000 sq ft lot costs.</p>
            <p>For the right buyer, the Valley is a killer VA play. For the wrong buyer, the commute kills the deal. Figure out which you are <em>before</em> you fall in love with a 3-bedroom on 2 acres in Big Lake.</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Who the Valley Works For</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">The Valley is right for you if:</h2>
          <ul className="space-y-4 text-[16px] leading-relaxed text-ink/80">
            <li className="flex gap-3"><span className="text-mgold-600 font-bold">→</span>You want acreage — 1 to 5 acres is normal here, vs half-acre max in Anchorage.</li>
            <li className="flex gap-3"><span className="text-mgold-600 font-bold">→</span>You're a two-income family where one spouse works remotely (the driving spouse eats the commute).</li>
            <li className="flex gap-3"><span className="text-mgold-600 font-bold">→</span>You have toys — snowmachines, ATVs, boats, horses — that require garage or outbuilding space.</li>
            <li className="flex gap-3"><span className="text-mgold-600 font-bold">→</span>Your JBER schedule is 4/10s or shift-based, so you only commute 3–4 days a week.</li>
            <li className="flex gap-3"><span className="text-mgold-600 font-bold">→</span>You want to buy more house for the same BAH dollars.</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">VA MPR Warnings</p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-steel md:text-4xl">Watch these in the Valley.</h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80">
            <p>The Valley has more VA MPR issues than Anchorage proper because more homes are on wells, septic systems, and private roads. Common things that kill VA offers:</p>
            <ul className="space-y-3 pl-6">
              <li><strong>Wells without recent flow / potability tests.</strong> VA requires documentation within ~90 days of closing.</li>
              <li><strong>Septic systems missing borough "as-built" certs.</strong> Get the cert from Mat-Su Borough before closing — adds 1–2 weeks if missing.</li>
              <li><strong>Road maintenance associations.</strong> If access is on a private road, you need documented year-round maintenance. Seasonal-access cabins don't qualify.</li>
              <li><strong>Buried oil tanks.</strong> More common in 1980s–90s Valley homes. Have to be evaluated for leaks.</li>
              <li><strong>Outbuildings on permitted lots.</strong> Unpermitted structures can complicate appraisal.</li>
            </ul>
            <p className="text-sm italic text-ink/60">None of these are dealbreakers — they're just things to flag in the offer and time correctly. A Valley-fluent Mat-Su agent will handle this in their sleep.</p>
          </div>
        </div>

        <div className="border-t border-steel/10 pt-12">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Related Pages</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/anchorage" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">Anchorage market</h3>
              <p className="mt-2 text-sm text-ink/70">JBER commute, city neighborhoods →</p>
            </Link>
            <Link href="/jber" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">JBER playbook</h3>
              <p className="mt-2 text-sm text-ink/70">PCS scenarios, dual-military →</p>
            </Link>
            <Link href="/eielson" className="group block bg-bone border border-steel/15 p-6 transition-colors hover:bg-white">
              <h3 className="font-display text-lg text-steel">Eielson / Fairbanks</h3>
              <p className="mt-2 text-sm text-ink/70">Different market entirely →</p>
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
          <p className="mt-5 text-bone/70">14 pages. Includes Valley-specific MPR warnings, well/septic guidance, and the 60-day checklist.</p>
        </div>
        <div className="md:col-span-3">
          <LeadForm source="alaskavahomes.com/wasilla" defaultInstallation="JBER" />
        </div>
      </div>
    </section>
  );
}

export default function WasillaPage() {
  return (
    <main>
      <Hero />
      <Content />
      <GuideCTA />
      <Footer />
    </main>
  );
}
