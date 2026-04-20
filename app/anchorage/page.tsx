import type { Metadata } from 'next';
import Link from 'next/link';
import { APPLY_URL, Nav, LeadForm, Footer } from '../_components';

export const metadata: Metadata = {
  title: 'Anchorage VA Home Loans | JBER & South Anchorage | Derek Huit NMLS #203980',
  description:
    'VA home loans for Anchorage, Alaska buyers — JBER personnel, Eagle River, South Anchorage, Hillside, U-Med. Zero down, no PMI. Local Anchorage LO with 18 years experience.',
  alternates: { canonical: '/anchorage' },
  openGraph: {
    title: 'Anchorage VA Home Loans | AlaskaVAHomes.com',
    description: 'VA home loans for JBER personnel and Anchorage military families.',
    url: 'https://alaskavahomes.com/anchorage',
  },
};

// Page-specific structured data — local SEO hit for "Anchorage VA loan"
const anchorageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'VA Home Loan Origination',
  provider: { '@id': 'https://alaskavahomes.com/#business' },
  areaServed: {
    '@type': 'City',
    name: 'Anchorage',
    containedInPlace: { '@type': 'State', name: 'Alaska' },
  },
  audience: { '@type': 'Audience', audienceType: 'Active-duty military, veterans, and their families' },
  offers: {
    '@type': 'Offer',
    name: 'VA Home Purchase Loan',
    description: 'Zero down payment VA-backed home loan for Anchorage-area purchases.',
  },
  about: [
    { '@type': 'Thing', name: 'Joint Base Elmendorf-Richardson (JBER)' },
    { '@type': 'Place', name: 'South Anchorage' },
    { '@type': 'Place', name: 'Eagle River' },
    { '@type': 'Place', name: 'Hillside, Anchorage' },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to buy a home in Anchorage with a VA loan',
  description: 'A 5-step process to use your VA entitlement for an Anchorage home purchase.',
  step: [
    { '@type': 'HowToStep', name: 'Request your Certificate of Eligibility (COE)', text: 'Through your lender via WebLGY — typically returned within 24 hours.' },
    { '@type': 'HowToStep', name: 'Get pre-approved', text: 'Submit LES, W-2s, and bank statements. Pre-approval letter within 24 business hours.' },
    { '@type': 'HowToStep', name: 'Work with a VA-fluent Anchorage agent', text: 'Shop homes that pass VA Minimum Property Requirements (MPRs).' },
    { '@type': 'HowToStep', name: 'Write a VA-backed offer', text: 'Include financing and inspection contingencies. Request seller concessions up to 4%.' },
    { '@type': 'HowToStep', name: 'Close', text: 'VA appraisal (14–21 days in AK), underwriting, Closing Disclosure, sign and receive keys.' },
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
          Anchorage · Eagle River · JBER · South Anchorage · Hillside
        </p>
        <h1 className="rise rise-2 display-hero font-display text-[48px] leading-[1.02] tracking-tight text-bone md:text-[72px]">
          VA loans for<br />
          <span className="italic text-mgold">Anchorage, Alaska.</span>
        </h1>
        <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
          Anchorage is Alaska's largest market and home to JBER — the biggest military population in the state. I've closed VA purchases in every neighborhood: Eagle River starter homes, South Anchorage family homes, Hillside view properties, U-Med walkability. Here's what every Anchorage VA buyer should know.
        </p>
        <div className="rise rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={APPLY_URL} className="btn-gold">Start my Anchorage VA application</a>
          <a href="#guide" className="btn-outline border-bone/30 text-bone hover:bg-bone hover:text-steel">
            Get the PCS guide
          </a>
        </div>
      </div>
    </section>
  );
}

function MarketOverview() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(anchorageSchema) }} />
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Market Overview</p>
        <h2 className="mb-8 font-display text-4xl font-medium leading-tight text-steel md:text-5xl">
          The Anchorage housing market, briefly.
        </h2>
        <div className="space-y-6 text-[16px] leading-relaxed text-ink/80">
          <p>
            Anchorage (ZIP codes 995xx) is Alaska's largest city with roughly 290,000 residents. Median single-family home prices hover in the $425K–$475K range as of 2026, with strong seasonal variation — peak selling runs May through August when listings move in days and multiple offers are common, especially on homes priced $400K–$550K. Shoulder season (September–April) gives buyers more negotiating room.
          </p>
          <p>
            For <strong>VA buyers specifically</strong>, Anchorage is one of the friendliest markets in the state. Inventory is large enough that VA MPR issues rarely bottleneck your search. Most homes have permanent heat systems, municipal water and sewer, and year-round road access — the three Alaska MPR concerns that hurt VA offers in more rural markets.
          </p>
          <p>
            Where Anchorage VA buyers do get tripped up: older homes in the central bowl (1960s–70s stock) can have buried oil tanks, asbestos tile, and aging boilers. Hillside homes can have foundation issues from slope movement. Both are inspection-era problems — a VA-fluent local inspector catches them before your offer hardens.
          </p>
        </div>
      </div>
    </section>
  );
}

function Neighborhoods() {
  const areas = [
    { t: 'South Anchorage', d: 'Family-oriented, good schools, mid-career officer territory. Homes $475K–$650K. Easy JBER commute via the Seward Highway.', best: 'O-3 to O-5 families, stable 2-3 year assignments' },
    { t: 'Eagle River', d: '15-minute drive to JBER, slightly lower prices, suburban feel, strong military community. Homes $425K–$575K.', best: 'Enlisted families, first-time VA buyers, anyone wanting space' },
    { t: 'Hillside', d: 'View properties, bigger lots, more established buyers. Homes $550K–$900K+. Steep roads and winter driving are real.', best: 'Higher-rank officers, second-home buyers, non-PCS veterans' },
    { t: 'U-Med / Midtown', d: 'Walkable to hospitals and UAA, smaller homes, good for single service members and DINK couples. $325K–$450K.', best: 'Single E-5 through E-7, dual-military young couples' },
    { t: 'East Anchorage', d: 'Most affordable inside Anchorage proper. Mix of older homes and apartments. $275K–$400K.', best: 'Enlisted first-time VA buyers, condo buyers' },
    { t: 'Downtown / Bootlegger\'s Cove', d: 'Condos and townhomes, walkable to ship terminal, popular with short-stay officers. $300K–$550K.', best: 'Short-tour officers, Coast Guard PCS' },
  ];
  return (
    <section className="bg-steel py-20 text-bone md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold">Know the Neighborhoods</p>
        <h2 className="mb-14 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl">
          Anchorage, block by block.
        </h2>
        <div className="grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div key={a.t} className="bg-steel p-8 md:p-10">
              <h3 className="font-display text-xl font-medium text-mgold">{a.t}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-bone/80">{a.d}</p>
              <p className="mt-5 border-l-2 border-mgold pl-3 text-[12px] leading-relaxed text-bone/60">
                <span className="font-semibold uppercase tracking-trackout text-bone/80">Best for</span><br />{a.best}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JBERSection() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">JBER Personnel</p>
        <h2 className="mb-8 font-display text-4xl font-medium leading-tight text-steel md:text-5xl">
          Buying near Joint Base Elmendorf-Richardson.
        </h2>
        <div className="space-y-6 text-[16px] leading-relaxed text-ink/80">
          <p>
            JBER is Alaska's largest military installation, with more than 30,000 active-duty personnel, civilians, and dependents across Elmendorf AFB and Fort Richardson. If your PCS orders bring you here, Anchorage proper is usually the smart play — JBER sits inside Anchorage city limits, giving you a commute of 0–20 minutes depending on which neighborhood you choose.
          </p>
          <p>
            Most JBER personnel house-hunt in one of three zones: <strong>South Anchorage</strong> (safe, family-focused, 20-min commute), <strong>Eagle River</strong> (quieter, 15-min commute, slightly lower prices), or <strong>on-post housing</strong> (PPV — Aurora Military Housing — is fine for short tours but you forfeit BAH). For a 3+ year assignment, buying almost always beats renting or PPV because you keep your BAH <em>and</em> build equity.
          </p>
          <p>
            For dual-military couples or higher-rank officers, Hillside and South Addition offer view homes with easy downtown access. For enlisted first-time VA buyers, Eagle River's starter-home inventory in the $425K–$500K range is the sweet spot.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/jber" className="btn-outline">Deep JBER guide →</Link>
        </div>
      </div>
    </section>
  );
}

function LocalCosts() {
  return (
    <section className="bg-bone py-20 md:py-28 border-t border-steel/10">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Anchorage Dollars</p>
        <h2 className="mb-8 font-display text-4xl font-medium leading-tight text-steel md:text-5xl">
          Real Anchorage VA purchase numbers.
        </h2>
        <p className="mb-6 text-[16px] leading-relaxed text-ink/80">
          Example: $450,000 Anchorage home, first-use VA entitlement, no disability rating. This is the actual cash you'd need at the table:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-steel text-bone">
                <th className="p-3 text-left font-semibold">Line item</th>
                <th className="p-3 text-right font-semibold">VA loan</th>
                <th className="p-3 text-right font-semibold">Conventional 5% down</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-bone"><td className="p-3 border-b border-steel/10">Down payment</td><td className="p-3 border-b border-steel/10 text-right">$0</td><td className="p-3 border-b border-steel/10 text-right">$22,500</td></tr>
              <tr className="bg-white"><td className="p-3 border-b border-steel/10">VA funding fee (first-use, rolled)</td><td className="p-3 border-b border-steel/10 text-right">Rolled ($9,675)</td><td className="p-3 border-b border-steel/10 text-right">—</td></tr>
              <tr className="bg-bone"><td className="p-3 border-b border-steel/10">PMI (1st year)</td><td className="p-3 border-b border-steel/10 text-right">$0</td><td className="p-3 border-b border-steel/10 text-right">~$3,200</td></tr>
              <tr className="bg-white"><td className="p-3 border-b border-steel/10">Appraisal + inspection</td><td className="p-3 border-b border-steel/10 text-right">$1,200–$2,000</td><td className="p-3 border-b border-steel/10 text-right">$1,150–$1,800</td></tr>
              <tr className="bg-bone"><td className="p-3 border-b border-steel/10">Title + settlement</td><td className="p-3 border-b border-steel/10 text-right">$2,200–$4,500</td><td className="p-3 border-b border-steel/10 text-right">$2,200–$4,500</td></tr>
              <tr className="bg-white"><td className="p-3 border-b border-steel/10">Prepaid taxes + insurance</td><td className="p-3 border-b border-steel/10 text-right">$3,200–$6,800</td><td className="p-3 border-b border-steel/10 text-right">$3,200–$6,800</td></tr>
              <tr className="bg-mgold text-steel font-semibold"><td className="p-3">Cash needed</td><td className="p-3 text-right">~$6,600–$13,300</td><td className="p-3 text-right">~$31,000–$38,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-ink/60">
          With 4% seller concessions (common in Anchorage shoulder season), VA out-of-pocket often drops below $3,000 — or to $0 for disabled vets.
        </p>
      </div>
    </section>
  );
}

function AnchorageFAQ() {
  const faqs = [
    { q: 'What\'s the best Anchorage neighborhood for a JBER E-5 family?', a: 'Eagle River is the highest-value pick for most enlisted families — the commute is 15 minutes, starter homes run $425K–$500K, and you\'re still in a strong resale market when PCS orders come again. South Anchorage is great but tends to skew more expensive and officer-heavy.' },
    { q: 'How long does closing take on an Anchorage VA purchase?', a: 'Typically 30–40 days from ratified contract. The longest single step is the VA appraisal, which can take 14–21 days in Anchorage due to local appraiser availability. Cardinal Financial\'s in-house underwriting keeps the rest of the timeline fast.' },
    { q: 'Will my Anchorage BAH cover a typical mortgage payment?', a: 'Yes, in most cases. 2026 JBER BAH runs roughly $2,700–$3,500/month depending on rank and dependents. A $450K VA loan at current rates (roughly 6–6.5% in 2026) has a PITI around $3,300–$3,600/month — right in that BAH range for mid-grade enlisted and junior officers.' },
    { q: 'Are there any Anchorage neighborhoods VA won\'t finance?', a: 'Anchorage proper has very few VA MPR issues. Watch for: homes with buried oil tanks (common in older central-bowl properties), homes without a permanent heat source, and hillside homes with active foundation movement. Your inspection catches all three — and a VA-fluent agent avoids writing offers on these in the first place.' },
  ];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="bg-bone py-20 md:py-28 border-t border-steel/10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Anchorage-Specific Q&A</p>
        <h2 className="mb-12 font-display text-4xl font-medium leading-tight text-steel md:text-5xl">
          What Anchorage VA buyers actually ask.
        </h2>
        <dl className="divide-y divide-steel/10">
          {faqs.map((f, i) => (
            <div key={i} className="py-6">
              <dt className="font-display text-lg font-medium text-steel md:text-xl">{f.q}</dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-ink/75">{f.a}</dd>
            </div>
          ))}
        </dl>
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
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            The PCS-to-Alaska VA Buyer's Guide.
          </h2>
          <p className="mt-5 text-bone/70">
            14 pages. Written for service members with Alaska PCS orders — especially those routing through JBER. Timing, COE, BAH math, MPR traps, temp lodging, and the 60-day checklist.
          </p>
        </div>
        <div className="md:col-span-3">
          <LeadForm source="alaskavahomes.com/anchorage" defaultInstallation="JBER" />
        </div>
      </div>
    </section>
  );
}

export default function AnchoragePage() {
  return (
    <main>
      <Hero />
      <MarketOverview />
      <Neighborhoods />
      <JBERSection />
      <LocalCosts />
      <AnchorageFAQ />
      <GuideCTA />
      <Footer />
    </main>
  );
}
