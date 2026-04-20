'use client';

import Link from 'next/link';
import { APPLY_URL, Nav, LeadForm, Footer } from './_components';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-steel text-bone">
      <Nav />
      <div className="grain pointer-events-none absolute inset-0 opacity-25" />
      {/* Mountain silhouette */}
      <svg className="pointer-events-none absolute bottom-0 left-0 right-0 w-full opacity-30" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden>
        <path d="M0,200 L0,140 L130,70 L220,110 L320,40 L420,90 L540,30 L640,85 L760,45 L880,95 L990,55 L1100,100 L1200,70 L1200,200 Z" fill="#2A3A4D" />
      </svg>
      <div className="absolute left-0 top-0 h-full w-[2px] bg-mgold/30 hidden md:block" />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-32 md:px-10 md:pt-40 md:pb-40">
        <p className="rise rise-1 mb-6 text-[11px] font-semibold uppercase tracking-trackout text-mgold">
          VA Home Loans · Alaska · Built for Military Families · NMLS #203980
        </p>

        <h1 className="rise rise-2 display-hero font-display text-[52px] leading-[1.02] tracking-tight text-bone md:text-[84px]">
          Your VA entitlement,<br />
          <span className="italic text-mgold">used right in Alaska.</span>
        </h1>

        <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
          VA home loans from an Anchorage-based LO who closes them every week. JBER, Eielson, Fort Wainwright, Coast Guard — PCS orders or already here. Zero down, no PMI, seller-paid closing allowed. I know the Alaska VA appraiser list by name.
        </p>

        <div className="rise rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={APPLY_URL} className="btn-gold">Start my VA application</a>
          <a href="#guide" className="btn-outline border-bone/30 text-bone hover:bg-bone hover:text-steel">
            Get the PCS-to-Alaska guide
          </a>
        </div>

        <div className="rise rise-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-bone/10 pt-8 text-xs text-bone/60">
          <span>Derek Huit · NMLS <span className="text-bone">#203980</span></span>
          <span className="hidden sm:inline">·</span>
          <span>18 Years · $1B+ Originated</span>
          <span className="hidden sm:inline">·</span>
          <span>VA-Approved Lender</span>
          <span className="hidden sm:inline">·</span>
          <span>Equal Housing Opportunity</span>
        </div>
      </div>
    </section>
  );
}

function VAStats() {
  const stats = [
    { n: '$0', l: 'Down payment required' },
    { n: '0%', l: 'Mortgage insurance (no PMI)' },
    { n: '4%', l: 'Max seller-paid concessions' },
    { n: '24h', l: 'COE turnaround' },
  ];
  return (
    <section className="border-y border-steel/10 bg-bone">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-steel/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="px-6 py-8 text-center md:py-10">
            <p className="font-display text-4xl font-semibold text-steel md:text-5xl">{s.n}</p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-trackout text-steel/60">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Installations() {
  const bases = [
    { n: '01', t: 'JBER', d: 'Joint Base Elmendorf-Richardson. Largest military population in Alaska. Anchorage, Eagle River, and Wasilla are all commute options.', href: '/jber' },
    { n: '02', t: 'Anchorage', d: 'South Anchorage, Hillside, Eagle River. Best for JBER personnel who want city access and strong resale market.', href: '/anchorage' },
    { n: '03', t: 'Wasilla & Mat-Su', d: 'Lower prices, bigger lots, 45–60 min commute to JBER. Popular with enlisted families wanting land.', href: '/wasilla' },
    { n: '04', t: 'Eielson & Fairbanks', d: 'F-35 wing, Fort Wainwright adjacent. Lower home prices, longer winters. Know dry-cabin rules before you shop.', href: '/eielson' },
  ];
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Every Installation, Every Market</p>
        <h2 className="mb-14 max-w-3xl font-display text-4xl font-medium leading-tight text-steel md:text-5xl">
          Alaska's military communities, explained.
        </h2>
        <div className="grid gap-px bg-steel/10 md:grid-cols-2">
          {bases.map((b) => (
            <Link key={b.n} href={b.href} className="flex flex-col bg-bone p-8 transition-colors hover:bg-white md:p-10">
              <span className="mb-8 font-display text-xs font-medium tracking-trackout text-mgold-600">{b.n}</span>
              <h3 className="font-display text-2xl font-medium text-steel md:text-3xl">{b.t}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{b.d}</p>
              <span className="mt-8 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-trackout text-steel hover-underline">
                View {b.t} page →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function VABenefits() {
  const benefits = [
    { n: '01', t: 'Zero Down Payment', d: 'Full VA entitlement means no down payment at all, regardless of home price. You keep your savings for moving costs, furniture, and the Alaska winter wardrobe.' },
    { n: '02', t: 'No PMI — Ever', d: 'Conventional loans under 20% down require private mortgage insurance — typically $200–$400/month. VA loans skip that entirely. Savings compound for the life of the loan.' },
    { n: '03', t: 'Better Rates', d: 'VA interest rates typically run 0.25–0.5% below conventional. On a $400K loan, that\'s $70–$130/month in pocket — every month.' },
    { n: '04', t: 'Seller-Paid Closing', d: 'The VA allows sellers to pay up to 4% of sales price in concessions. On a $425K home, that\'s up to $17,000 off your closing costs.' },
    { n: '05', t: 'Funding Fee Exemption', d: 'Any VA service-connected disability rating exempts you from the one-time funding fee. That\'s $9,000+ saved on a $425K home purchase.' },
    { n: '06', t: 'Reusable Entitlement', d: 'Used VA before? You can restore it after selling. You can even hold two VA loans simultaneously in some PCS scenarios. I\'ll work the math.' },
  ];
  return (
    <section className="bg-steel py-20 text-bone md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold">Why VA Beats Everything Else</p>
        <h2 className="mb-14 max-w-3xl font-display text-4xl font-medium leading-tight md:text-5xl">
          Six reasons a VA loan is almost always the right move.
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {benefits.map((b) => (
            <div key={b.n} className="border-l-2 border-mgold pl-6">
              <span className="font-display text-xs font-medium tracking-trackout text-mgold">{b.n}</span>
              <h3 className="mt-2 font-display text-2xl font-medium">{b.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-bone/75">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadMagnet() {
  return (
    <section id="guide" className="bg-bone py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5 md:px-10 md:gap-16">
        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Free PCS Guide</p>
          <h2 className="font-display text-4xl font-medium leading-tight text-steel md:text-5xl">
            The PCS-to-Alaska VA Buyer's Guide.
          </h2>
          <p className="mt-5 text-ink/70">
            14 pages, written for service members with Alaska PCS orders. Timing your application to your report date, BAH gross-up math, VA MPR traps in Alaska, temp lodging strategy, and the 60-day checklist.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink/80">
            <li className="flex gap-3"><span className="text-mgold-600">→</span>PCS timeline mapped to VA loan milestones</li>
            <li className="flex gap-3"><span className="text-mgold-600">→</span>COE request + entitlement restoration rules</li>
            <li className="flex gap-3"><span className="text-mgold-600">→</span>BAH, BAS, and special-pay income in underwriting</li>
            <li className="flex gap-3"><span className="text-mgold-600">→</span>VA Minimum Property Requirements in Alaska (dry cabins, permafrost, wells)</li>
            <li className="flex gap-3"><span className="text-mgold-600">→</span>Funding fee exemption rules — save $9K+</li>
            <li className="flex gap-3"><span className="text-mgold-600">→</span>Base-by-base market read (JBER, Eielson, Wainwright, CG)</li>
            <li className="flex gap-3"><span className="text-mgold-600">→</span>60-day PCS-to-keys checklist</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <LeadForm source="alaskavahomes.com/home" />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: '01', t: 'COE Request', d: 'I request your Certificate of Eligibility through WebLGY. Usually back in 24 hours.' },
    { n: '02', t: 'Pre-Approval', d: 'Full VA pre-approval with verified income. Letter in hand within 24 business hours.' },
    { n: '03', t: 'Home Shopping', d: 'Work with a VA-fluent Alaska agent. I can refer you to ones who know the military buyer.' },
    { n: '04', t: 'Under Contract', d: 'VA appraisal ordered (14–21 days in AK). Inspection scheduled. Underwriting conditions cleared.' },
    { n: '05', t: 'Close on Time', d: 'Clear to Close, CD review, close before or with your report date. Get keys.' },
  ];
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">The Process</p>
        <h2 className="mb-14 max-w-2xl font-display text-4xl font-medium leading-tight text-steel md:text-5xl">
          Five steps. Zero runaround.
        </h2>
        <div className="grid gap-10 md:grid-cols-5 md:gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <span className="flex h-12 w-12 items-center justify-center border border-steel bg-bone font-display text-sm font-medium text-steel">{s.n}</span>
              <h3 className="mt-5 font-display text-xl font-medium text-steel">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'Can I buy a home in Alaska before I report to my PCS duty station?', a: 'Yes — and it\'s usually the smartest move. If your orders allow, close on the home before your report date so you can move in immediately on arrival. VA requires you to occupy within 60 days of closing in most cases; closing before arrival gives you maximum flexibility.' },
    { q: 'How long does a VA loan take to close in Alaska?', a: 'Typically 30–45 days from ratified contract to closing. Alaska VA appraisals run longer than Lower 48 (14–21 days is common) due to distance and weather. Start the VA application the day your orders arrive for the cleanest timeline.' },
    { q: 'Will the VA finance a dry cabin in Fairbanks?', a: 'No. VA Minimum Property Requirements mandate running water in the home. Dry cabins (common in the Fairbanks/North Pole area) do not qualify for VA financing, regardless of price or condition.' },
    { q: 'Do I have to pay the VA funding fee?', a: 'Most borrowers pay the one-time funding fee (2.15% of the loan amount for first-use with zero down), and you can roll it into the loan. However, if you have any VA service-connected disability rating — even 10% — you are exempt from the funding fee. That saves roughly $9,000 on a $425K home.' },
    { q: 'Does my BAH count as income for my VA loan application?', a: 'Yes. BAH is qualifying income. Because it\'s non-taxable, it gets grossed up by 25% for DTI calculation. A $2,800/month BAH counts as $3,500/month toward qualifying.' },
    { q: 'Can my spouse\'s income be used on the loan?', a: 'Yes. Spouse W-2 income or self-employment income (with 2 years of history) counts toward qualifying on a VA loan. Spouse co-signing also works for active-duty members who want to strengthen the application.' },
    { q: 'What if I already used my VA loan before — can I use it again?', a: 'In most cases, yes. If the prior VA loan was paid off when you sold the home, you qualify for one-time restoration of full entitlement. If the prior loan is still active (you kept the house), you may have partial entitlement left and can often still buy with zero down up to certain limits. I\'ll pull your COE and map out the exact math.' },
    { q: 'Is AlaskaVAHomes.com endorsed by the VA?', a: 'No. AlaskaVAHomes.com is a private marketing website operated by Huitai LLC on behalf of Derek Huit (NMLS #203980), a VA-approved Loan Originator with Cardinal Financial Company, Limited Partnership (NMLS #66247). This site is not endorsed by the Department of Veterans Affairs or any U.S. government agency.' },
  ];

  // FAQ schema for AI search (Google AI Overviews, Perplexity, ChatGPT)
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
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold-600">Questions, Answered</p>
        <h2 className="mb-12 font-display text-4xl font-medium leading-tight text-steel md:text-5xl">
          The VA-in-Alaska questions I get most.
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

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-steel py-24 text-bone md:py-32">
      <div className="grain pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-trackout text-mgold">Ready when your orders are</p>
        <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
          Start your VA application<br />
          <span className="italic text-mgold">the day orders drop.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-bone/70 md:text-lg">
          Soft credit pull. Full pre-approval within 24 business hours. COE requested on your behalf, free.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={APPLY_URL} className="btn-gold">Start my VA application</a>
          <a href="#guide" className="text-[12px] font-semibold uppercase tracking-trackout text-bone/80 hover-underline">
            Or get the PCS guide first →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VAStats />
      <Installations />
      <VABenefits />
      <LeadMagnet />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
