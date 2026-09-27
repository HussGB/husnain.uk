/* eslint-disable react/no-unescaped-entities */
import LegalDocument, { Section } from "@/components/LegalDocument";

export default function Impressum() {
  return (
    <LegalDocument title="Impressum / Legal Disclosure" path="/legal/impressum" description="Operator, contact, service, and legal disclosure information for Husnain.UK.">
      <Section title="Operator">
        <p><strong>Mohammed Husnain</strong></p>
        <p>Trading and professional brands: <strong>Husnain.UK</strong>, <strong>HussGB</strong>, and, where used, <strong>HussGB Development</strong>.</p>
        <p>Individual operator based in England, United Kingdom. VAT registration: not VAT registered, as currently stated by the operator.</p>
      </Section>
      <Section title="Contact and legal notices">
        <p>General contact: <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a></p>
        <p>For formal notices, use the email subject <strong>Legal Notice HussGB</strong>. A solicitor or registered-agent service address is intended to be added before this page is relied on as a final statutory disclosure.</p>
      </Section>
      <Section title="Services">
        <p>Services may include website and software development, hosting, maintenance, consultations, security work, technical operations, and related services. The exact service, price, scope, deadline, ownership, support, and data-processing arrangements are determined by the written quote or contract accepted for the engagement.</p>
      </Section>
      <Section title="Hosting and infrastructure">
        <p>This website is hosted on Vercel. Customer infrastructure may use a provider chosen for the project, including a third-party cloud host, GitHub Pages, Vercel, or self-managed infrastructure. A provider list is not a promise that every listed provider is used for every customer.</p>
      </Section>
      <Section title="Content and links">
        <p>External links are provided for convenience. Mohammed Husnain does not control third-party content, availability, security, privacy practices, or terms. Public GitHub information displayed by this website is retrieved from GitHub's public API.</p>
      </Section>
      <Section title="Update notice">
        <p>This disclosure is incomplete until the final legal correspondence or service-address wording is confirmed with professional advice. It must be updated when the operator, business status, services, contact route, or hosting arrangement changes.</p>
      </Section>
    </LegalDocument>
  );
}
