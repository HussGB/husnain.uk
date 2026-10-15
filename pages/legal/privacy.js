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
        <p>For this website and enquiries about the operator's own services, the data controller is Mohammed Husnain, who may present services under the names Husnain.UK, HussGB, and HussGB Development. These names do not, on the information currently provided, identify separate legal persons.</p>
        <p>Contact the controller at <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a>, using the subject <strong>Privacy Request</strong> or <strong>Legal Notice HussGB</strong>. No geographical contact address is published. Email contact may not satisfy every statutory trader-disclosure requirement; an address will be supplied before a transaction where applicable law requires it.</p>
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
        <p>Personal data is retained only for as long as reasonably necessary for the purpose collected, legal obligations, and the establishment or defence of legal claims. The intended default periods are: enquiry-only records for up to 12 months after the last meaningful contact; contracts, invoices, and related business records for up to six years after the end of the relevant financial year where needed for tax, accounting, or legal claims; and security logs for up to 12 months unless an incident or legal obligation requires longer. Data needed for a live dispute, investigation, or legal hold may be retained until it is resolved.</p>
        <p>For hosted customer services, the order and any data-processing agreement control. Unless otherwise agreed, after service termination the customer will be offered the export window described in the service terms, live customer data is scheduled for deletion within seven days after that window, and backup copies may remain until the provider's routine overwrite cycle (intended to be no more than 30 days). Actual deletion timing depends on the infrastructure and may be extended where law requires retention. The customer should obtain an export before service ends.</p>
        <p>These are retention targets, not a representation that every provider uses identical systems or deletion schedules. The relevant provider, data location, and any different period will be identified in the project documentation where applicable.</p>
      </Section>
      <Section title="7. Customer projects and data protection roles">
        <p>For a customer system, the customer will generally determine the purposes and means of processing its users' data and act as controller. Mohammed Husnain may act as processor, or a subprocessor where another processor is involved, only as the service requires and under documented instructions. Before processing begins, the parties must record their roles, purposes, data types and subjects, duration, security measures, subprocessors, breach assistance, rights-request support, international transfers, return/deletion arrangements, and any required UK GDPR Article 28 terms.</p>
        <p>This privacy notice is not a data-processing agreement. The customer must provide lawful instructions and appropriate notices to its users; no customer personal data should be put into a service until the required data-processing terms and security arrangements are agreed.</p>
      </Section>
      <Section title="8. Security and incidents">
        <p>Appropriate technical and organisational measures are selected for the nature and risk of the processing, including access controls and provider safeguards where applicable. No internet service or backup can be guaranteed secure or continuously available. A suspected personal-data breach affecting a customer service will be assessed and reported to the customer without undue delay where required by the applicable data-processing agreement and law. The controller will notify the ICO and affected people where the legal threshold and notification duties apply.</p>
      </Section>
      <Section title="9. Your rights and complaints">
        <p>Subject to legal conditions and exemptions, you may have rights to access, rectify, erase, restrict, or object to processing, data portability, and to withdraw consent where consent is the basis. You may also object to direct marketing. Send requests to <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a>; the controller will respond within the statutory period and may request proportionate identity verification. You may complain to the UK Information Commissioner's Office (ICO) at <a className="underline" href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a>.</p>
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
