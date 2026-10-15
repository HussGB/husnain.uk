/* eslint-disable react/no-unescaped-entities */
import LegalDocument, { Section } from "@/components/LegalDocument";

export default function Impressum() {
  return (
    <LegalDocument title="Impressum / Legal Disclosure" path="/legal/impressum" description="Operator, contact, service, and legal disclosure information for Husnain.UK.">
      <Section title="Operator">
        <p><strong>Mohammed Husnain</strong></p>
        <p>Mohammed Husnain is an individual freelancer based in England, United Kingdom. Services may be offered under the names <strong>Husnain.UK</strong>, <strong>HussGB</strong>, and <strong>HussGB Development</strong>. On the information currently provided, these are names used by the individual and are not separate companies or legal persons. Unless a service contract expressly identifies another legal entity and its details, the contracting supplier is Mohammed Husnain personally.</p>
        <p>The operator has stated that he is not VAT registered. No VAT is charged unless and until the operator becomes registered and gives the customer the legally required notice and VAT invoice.</p>
      </Section>
      <Section title="Contact and legal notices">
        <p>General contact: <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a></p>
        <p>For formal notices, use the email subject <strong>Legal Notice HussGB</strong>. No geographical business or service address is published on this website at the operator's choice. An email address may not satisfy every legal requirement to disclose a trader's geographical address. Where a law requires those details for a particular service or transaction, they must be provided to the customer before the contract is made; this page must not be treated as a complete statutory trader disclosure for that transaction.</p>
      </Section>
      <Section title="Services">
        <p>Services may include website and software development, hosting on infrastructure operated or selected by the supplier, maintenance, consultations, authorised security work, technical operations, and related services. The exact service, price, scope, deadline, ownership, support, and data-processing arrangements are determined by the written quote or contract accepted for the engagement.</p>
      </Section>
      <Section title="Hosting and infrastructure">
        <p>This website is hosted on Vercel. Customer infrastructure may use a provider chosen for the project, including a third-party cloud host, GitHub Pages, Vercel, or self-managed infrastructure. A provider list is not a promise that every listed provider is used for every customer.</p>
      </Section>
      <Section title="Content and links">
        <p>External links are provided for convenience. Mohammed Husnain does not control third-party content, availability, security, privacy practices, or terms. Public GitHub information displayed by this website is retrieved from GitHub's public API.</p>
      </Section>
      <Section title="Update notice">
        <p>This disclosure must be updated when the operator, trading names, business or VAT status, services, contact route, or hosting arrangement changes. The operator should obtain UK legal advice about address-disclosure obligations before offering services where a geographical address is legally required.</p>
      </Section>
    </LegalDocument>
  );
}
