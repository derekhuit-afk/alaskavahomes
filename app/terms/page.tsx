import type { Metadata } from 'next';
import { Nav, Footer } from '../_components';

export const metadata: Metadata = {
  title: 'Terms of Use | AlaskaVAHomes.com',
  description: 'Terms of use for AlaskaVAHomes.com — a marketing site operated by Huitai LLC.',
  alternates: { canonical: '/terms' },
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <main>
      <section className="relative bg-steel pt-32 pb-12 text-bone md:pt-40">
        <Nav />
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-mgold">Legal</p>
          <h1 className="font-display text-4xl font-medium md:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-sm text-bone/60">Last updated: April 20, 2026</p>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-6 md:px-10 text-[15px] leading-relaxed text-ink/85 space-y-6">
          <p>By accessing or using <strong>AlaskaVAHomes.com</strong> (the "Site"), you agree to these Terms of Use. The Site is operated by <strong>Huitai LLC</strong> ("we," "us") on behalf of Derek Huit (NMLS #203980), a licensed loan originator with Cardinal Financial Company, Limited Partnership (NMLS #66247).</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Not a commitment to lend</h2>
          <p>Nothing on this Site constitutes a commitment to lend, an offer to enter into a loan agreement, or pre-approval of any loan application. All mortgage products are subject to credit approval, underwriting, appraisal, property meeting VA Minimum Property Requirements (MPRs), sufficient title, and all applicable disclosures. Rates, terms, fees, and programs are subject to change without notice.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Not endorsed by the VA or any government agency</h2>
          <p><strong>This Site is a private marketing website. It is not sponsored, endorsed, or authorized by the U.S. Department of Veterans Affairs, the Department of Defense, or any other branch or agency of the federal government.</strong> The U.S. government does not guarantee any loan and does not sponsor or endorse any lender or loan originator.</p>
          <p>Cardinal Financial Company, Limited Partnership is a VA-approved lender. Approval by the VA does not constitute an endorsement of Cardinal Financial, its loan products, or this Site by any government agency.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">New York non-authorization</h2>
          <p><strong>This Site is not authorized by the New York State Department of Financial Services.</strong> No mortgage loan applications for properties located in the state of New York will be accepted through this Site.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Equal Housing Opportunity</h2>
          <p>Cardinal Financial Company, Limited Partnership and Derek Huit are committed to the letter and spirit of U.S. policy for the achievement of equal housing opportunity. We do not discriminate on the basis of race, color, religion, national origin, sex, marital status, familial status, age, disability, source of income, sexual orientation, gender identity, or veteran status.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Accuracy of information</h2>
          <p>We make reasonable efforts to keep Site content accurate, but rates, programs, BAH rates, funding fees, VA loan limits, and other figures change regularly. The PCS-to-Alaska VA Buyer's Guide contains general educational content and is not a substitute for personalized mortgage advice. Always consult a licensed loan originator for advice specific to your situation.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Third-party sites and resources</h2>
          <p>The Site may link to third-party websites, including government sites (VA.gov, NMLS Consumer Access). We are not responsible for the content, accuracy, or privacy practices of third-party sites.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Limitation of liability</h2>
          <p>To the fullest extent permitted by law, Huitai LLC, Derek Huit, and Cardinal Financial Company, Limited Partnership disclaim all warranties regarding the Site, express or implied. The Site is provided "as is." We are not liable for any indirect, incidental, consequential, or special damages arising from use of the Site.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Governing law</h2>
          <p>These Terms are governed by the laws of the State of Alaska, without regard to conflict-of-law principles. Any disputes shall be resolved in state or federal courts located in Anchorage, Alaska.</p>

          <h2 className="font-display text-2xl font-medium text-steel pt-4">Contact</h2>
          <p>Huitai LLC<br />Anchorage, AK<br />Email: derekhuit@gmail.com</p>

          <p className="pt-6 text-sm text-ink/60 border-t border-steel/10">© {new Date().getFullYear()} Huitai LLC. All rights reserved.</p>
        </article>
      </section>

      <Footer />
    </main>
  );
}
