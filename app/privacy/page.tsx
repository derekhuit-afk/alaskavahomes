import type { Metadata } from 'next';
import { Nav, Footer } from '../_components';

export const metadata: Metadata = {
  title: 'Privacy Policy | AlaskaVAHomes.com',
  description: 'Privacy policy for AlaskaVAHomes.com — how we collect, use, and protect your information.',
  alternates: { canonical: '/privacy' },
  robots: 'index, follow',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="relative bg-steel pt-32 pb-12 text-bone md:pt-40">
        <Nav />
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold">Legal</p>
          <h1 className="font-display text-4xl font-medium md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-bone/60">Last updated: April 20, 2026</p>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-24">
        <article className="prose-legal mx-auto max-w-3xl px-6 md:px-10 text-[15px] leading-relaxed text-ink/85 space-y-6">
          <p><strong>AlaskaVAHomes.com</strong> (the "Site") is a marketing website operated by <strong>Huitai LLC</strong> ("we," "us") on behalf of Derek Huit (NMLS #203980), a licensed loan originator with Cardinal Financial Company, Limited Partnership (NMLS #66247). This policy describes how we collect and use your information.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Information we collect</h2>
          <p>When you submit a form on this Site, we collect: full name, email address, phone number, property ZIP code, loan type interest, military service status (optional), installation (optional), IP address, browser user agent, and submission timestamp. We do <strong>not</strong> collect Social Security numbers, DD-214 documents, military orders, financial account numbers, or credit data through this Site.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">How we use your information</h2>
          <p>We use submitted information to (a) respond to your inquiry, (b) deliver the requested PCS-to-Alaska guide, (c) begin a mortgage pre-qualification conversation with Derek Huit and Cardinal Financial Company, Limited Partnership, and (d) comply with applicable federal and state lending regulations, including TCPA consent record-keeping.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Who we share with</h2>
          <p>We share your information with (a) Derek Huit, (b) Cardinal Financial Company, Limited Partnership for loan origination purposes, (c) service providers assisting with communication (e.g., Twilio for SMS), and (d) regulators or law enforcement where legally required. We do <strong>not</strong> sell your personal information to unaffiliated third parties. We do not share your information with the U.S. Department of Veterans Affairs except through the normal VA loan origination process.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">TCPA consent</h2>
          <p>By submitting a form with both consent checkboxes, you provide express written consent to receive calls, text messages (including autodialed and prerecorded messages), and emails from Derek Huit and Cardinal Financial Company at the number and email you provided — even if that number is on a Do Not Call list. Consent is not a condition of any purchase. Standard message and data rates may apply. Reply STOP to any text to opt out. Reply HELP for help.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Military members and the SCRA</h2>
          <p>Active-duty service members are protected by the Servicemembers Civil Relief Act (SCRA) and the Military Lending Act (MLA). These federal protections apply to mortgage lending and are fully honored by Cardinal Financial Company. Nothing on this Site, including the PCS guide, overrides those protections.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Cookies and analytics</h2>
          <p>This Site may use first-party cookies and web analytics to understand aggregate usage. We do not use behavioral advertising cookies or sell data to ad networks.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Your rights</h2>
          <p>You can request access to, correction of, or deletion of your personal information by emailing <strong>derekhuit@gmail.com</strong>. California, Colorado, Connecticut, Virginia, and Utah residents have additional rights under state privacy law — we honor all such requests within the statutory timeframes.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Security</h2>
          <p>We use reasonable administrative, technical, and physical safeguards to protect submitted information. No internet transmission is 100% secure; submit information at your own risk.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Contact</h2>
          <p>Huitai LLC<br />Attn: Privacy<br />Anchorage, AK<br />Email: derekhuit@gmail.com</p>
        </article>
      </section>

      <Footer />
    </main>
  );
}
