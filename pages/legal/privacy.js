/* eslint-disable react/no-unescaped-entities */
import LegalDocument, { BulletList, Section } from "@/components/LegalDocument";

export default function PrivacyPolicy() {
  return (
    <LegalDocument
      title="Privacy Policy"
      path="/legal/privacy"
      description="How Mohammed Husnain and Husnain.UK collect, use, retain, and protect personal data."
    >
      <Section title="1. Who controls your data">
        <p>Husnain.UK is the personal trading brand of Mohammed Husnain, also known online as HussGB or HussGB Development. For website enquiries and personal business activity, Mohammed Husnain is the data controller.</p>
        <p>Legal notices should be requested by email with the subject line <strong>Legal Notice HussGB</strong> at <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a>. A final correspondence or service address is intended to be added after solicitor or registered-agent advice is obtained.</p>
      </Section>
      <Section title="2. Data this website may process">
        <BulletList>
          <li>Contact details and the contents of messages you send by email or another listed social platform.</li>
          <li>Account details if registration or authentication is enabled: name, email address, account identifiers, password hash, session and security information. Passwords are not stored in plain text.</li>
          <li>Technical request data processed by hosting infrastructure, such as IP address, browser, device, timestamps, requested URL, referrer, and security logs.</li>
          <li>Public GitHub profile and repository information retrieved from the GitHub API and displayed on the homepage.</li>
          <li>Theme preference stored locally in your browser. This is a functional local-storage value, not a tracking cookie.</li>
          <li>Information voluntarily supplied for a customer quote, website build, hosting, maintenance, consultation, or security engagement.</li>
        </BulletList>
      </Section>
      <Section title="3. Why data is used">
        <BulletList>
          <li>To respond to enquiries, prepare quotes, communicate about a project, and perform a contract.</li>
          <li>To authenticate accounts, prevent abuse, investigate security events, and operate the website.</li>
          <li>To provide hosting, backups, maintenance, support, security work, billing records, and handover materials where agreed.</li>
          <li>To send optional marketing or newsletters only where you have enrolled or another lawful basis applies. You can unsubscribe at any time.</li>
          <li>To comply with legal, tax, accounting, court, regulatory, and fraud-prevention duties.</li>
        </BulletList>
      </Section>
      <Section title="4. Legal bases">
        <p>Depending on the activity, the basis may be taking steps at your request before a contract, performing a contract, complying with a legal obligation, pursuing legitimate interests such as security and business administration, or consent for optional marketing and non-essential technologies. Consent can be withdrawn without affecting earlier lawful processing.</p>
      </Section>
      <Section title="5. Providers and international processing">
        <p>The website is hosted on Vercel. Project infrastructure may be hosted with a provider selected for the engagement, potentially including IONOS, Hetzner, Oracle, Contabo, Kimsufi, GitHub Pages, Vercel, or self-managed infrastructure. The actual providers, regions, subprocessors, and safeguards should be confirmed in the relevant customer contract or project record rather than inferred from this list.</p>
        <p>Data may also be processed by email, database, authentication, domain, backup, payment, or communications providers selected for a particular service. Where UK GDPR applies, appropriate transfer safeguards and contractual controls will be used where required.</p>
      </Section>
      <Section title="6. Retention and deletion">
        <p>Enquiry and project records may be retained for administration, security, dispute handling, legal compliance, and record keeping after completion. Customer backups are normally retained for up to 30 days or according to the relevant hosting provider's policy. Exact retention can vary by service and should be stated in the customer contract. When a service ends, the customer export and deletion process in the customer terms applies, subject to legal holds, backups, security records, and lawful retention duties.</p>
      </Section>
      <Section title="7. Customer projects and data protection roles">
        <p>For a hosted or built customer system, the customer generally decides why their users' data is collected and is normally the controller. Mohammed Husnain may act as a processor or subprocessor only to the extent needed to provide the agreed service and only on the customer's documented lawful instructions. The customer must provide a lawful purpose, privacy notice, retention rules, access requirements, and any required data-processing agreement before personal data is processed.</p>
        <p>Neither this notice nor a quote should be treated as a complete Article 28 UK GDPR data-processing agreement. A separate agreement should be used where the service requires one.</p>
      </Section>
      <Section title="8. Security and incidents">
        <p>Reasonable technical and organisational measures are used for the relevant service, but no internet service or backup can be guaranteed secure or available. If a database breach or vulnerability is identified, affected customers will be contacted using the details held, and affected individuals or regulators may be notified where required by law and the circumstances.</p>
      </Section>
      <Section title="9. Your rights and complaints">
        <p>Subject to legal exceptions, UK data-protection law may give you rights to access, correct, erase, restrict, object to, or port personal data, and to withdraw consent. Email requests to <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a>. You may also complain to the UK Information Commissioner's Office. Identity verification may be required and some requests may be limited by law.</p>
      </Section>
      <Section title="10. Children">
        <p>The website is not deliberately directed at children. Customer contracts require an individual to have legal capacity to agree; a customer aged 13 or over may only engage with parental or guardian involvement and signatures where required. Services involving children or children's data require additional written safeguards.</p>
      </Section>
      <Section title="11. Changes">
        <p>This policy may be updated when the website, services, providers, or legal requirements change. The effective review date will be updated and material changes will be communicated where appropriate.</p>
      </Section>
    </LegalDocument>
  );
}
