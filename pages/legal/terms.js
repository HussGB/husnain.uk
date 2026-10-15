/* eslint-disable react/no-unescaped-entities */
import LegalDocument, { BulletList, Section } from "@/components/LegalDocument";

export default function Terms() {
  return (
    <LegalDocument title="Website Terms of Use" path="/legal/terms" description="Terms governing access to and use of the Husnain.UK website.">
      <Section title="1. Acceptance and scope">
        <p>These terms govern use of the Husnain.UK website, including its pages, RSS feed, public links, and informational content. By using the site, you agree to use it lawfully and not to interfere with its operation. These website terms do not by themselves form a contract for freelance services. Customer services are governed by the Customer Services Terms only where those terms are supplied and incorporated into an accepted quote or contract, together with the project-specific agreement.</p>
      </Section>
      <Section title="2. Permitted use">
        <BulletList>
          <li>Use the site for lawful personal, professional, and informational purposes.</li>
          <li>Do not probe, attack, scrape abusively, overload, impersonate, reverse engineer protected functionality, or attempt unauthorised access.</li>
          <li>Do not submit unlawful, harmful, infringing, malicious, or unnecessary sensitive information.</li>
          <li>Do not treat general website content as legal, financial, medical, security, or professional advice.</li>
        </BulletList>
      </Section>
      <Section title="3. Intellectual property">
        <p>Unless stated otherwise, the website's original text, design, code, and branding belong to Mohammed Husnain or the relevant rights holder. Third-party libraries and assets remain subject to their own licences. You may view and link to public pages, but copying, redistributing, selling, or modifying substantial parts requires permission or a licence.</p>
      </Section>
      <Section title="4. Availability and accuracy">
        <p>The site is provided on an as-available basis. Content may be incomplete, changed, delayed, or temporarily unavailable. No guarantee is made that the site, RSS feed, external links, or displayed GitHub data will be uninterrupted, current, error-free, or suitable for a particular purpose.</p>
      </Section>
      <Section title="5. Accounts and security">
        <p>If an account feature is enabled, keep credentials confidential and notify <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a> about suspected compromise. Registration may be refused or suspended for abuse, security, non-payment, or breach of applicable terms.</p>
      </Section>
      <Section title="6. External services and links">
        <p>GitHub, Vercel, social networks, hosting providers, and other third parties operate under their own terms. Linking to them does not imply endorsement or control.</p>
      </Section>
      <Section title="7. Liability and consumer rights">
        <p>Nothing in these terms excludes or limits liability that cannot lawfully be excluded, including liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or mandatory consumer rights. Subject to that, and to the maximum extent permitted by law, the operator is not liable for indirect or consequential loss arising from use of this informational website. This does not affect liability under a separate customer contract, which must set out its own lawful allocation of risk.</p>
      </Section>
      <Section title="8. Suspension and changes">
        <p>Access may be restricted where reasonably necessary for security, maintenance, legal compliance, or abuse prevention. These terms may change when the site or law changes. Continued use after publication of an update may constitute acceptance where legally effective.</p>
      </Section>
      <Section title="9. Law and contact">
        <p>These website terms are intended to be governed by the law of England and Wales, subject to any mandatory rights available to you. Questions and notices should be sent to <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a>. No geographical business address is published on this website; where a law requires one for a transaction, it must be provided before that contract is made.</p>
      </Section>
    </LegalDocument>
  );
}
