/* eslint-disable react/no-unescaped-entities */
import LegalDocument, { BulletList, Section } from "@/components/LegalDocument";

export default function CustomerServices() {
  return (
    <LegalDocument title="Customer Services Terms" path="/legal/customer-services" description="Terms for website development, hosting, maintenance, consultation, and security services provided by Husnain.UK.">
      <Section title="1. Contract formation and scope">
        <p>Each engagement begins with a written quote, statement of work, order, or contract that identifies the customer, brief, pages and features, deliverables, assumptions, milestones, price, payment schedule, hosting, support, ownership, and any data-processing requirements. A contract is formed only when the quote or contract is accepted in the agreed manner. These terms apply unless the signed or accepted project contract says otherwise.</p>
        <p>Customers must describe required pages, integrations, authentication, data handling, content, accessibility needs, security requirements, deadlines, and dependencies accurately. Work outside the agreed scope is a change request and may affect price and timescale.</p>
      </Section>
      <Section title="2. Services and customer responsibilities">
        <BulletList>
          <li>Services may include website development, software development, hosting, maintenance, consultations, security work, and related technical services.</li>
          <li>The customer must provide lawful instructions, accurate content, required credentials, approvals, licences, domain authority, and timely decisions.</li>
          <li>The customer remains responsible for its business model, user notices, legal compliance, backups unless expressly included, domain ownership, and the accuracy and lawfulness of supplied material.</li>
          <li>Where customer personal data is processed, the parties must document controller/processor roles and use a separate data-processing agreement where required.</li>
        </BulletList>
      </Section>
      <Section title="3. Quotes, invoices, and payment">
        <p>Prices and deposits are agreed per engagement. Mohammed Husnain is currently not VAT registered, so VAT is not charged unless that status changes and the customer is notified. Invoices are due 14 calendar days after creation unless the contract states another date. Weekly, monthly, or annual billing and a minimum term of three months may apply to recurring packages.</p>
        <p>A late payment charge of up to 10% may be applied where stated in the contract and permitted by law. It is intended to cover reasonable administration and delay costs; it is not intended to override statutory consumer protections or operate as an unenforceable penalty. Reasonable recovery costs and suspension rights may also apply.</p>
      </Section>
      <Section title="4. Deposits, cancellation, and refunds">
        <p>Deposits reserve capacity and cover work already begun. If a customer cancels after work starts, any refund will reflect work not completed, committed third-party costs, and the contract, subject always to mandatory consumer rights.</p>
        <p>For digital content or software supplied to a consumer, any loss of a statutory cancellation right will only be relied on where the required express request and acknowledgement have been obtained. There is no blanket rule that used software can never be refunded: statutory rights, defective digital-content remedies, misrepresentation, and unfair-term rules continue to apply.</p>
        <p>For recurring services, the contract will specify the initial term, renewal, notice period, and any lawful early-termination charge. A requested three-month notice period or outstanding-term charge must be proportionate and clearly agreed; it cannot remove a consumer's mandatory cancellation rights.</p>
      </Section>
      <Section title="5. Changes, approvals, and acceptance">
        <p>Changes to the brief, content, features, integrations, or hosting after approval may be charged at the agreed rate and may move the deadline. At handover, the customer receives an email confirming the work covered and how it met the brief. A user manual or maintenance manual may be supplied where included in scope. Customers should test and report material defects promptly.</p>
      </Section>
      <Section title="6. Warranty and support">
        <p>Unmodified software may receive a three-month warranty for defects against the agreed specification, starting at handover, where the contract includes that warranty. It does not cover changes by the customer or another person, misuse, unsupported dependencies, third-party outages, hosting failures, security incidents caused by customer conduct, or requirements not included in the brief.</p>
        <p>General post-completion support may be provided for the first 48 hours. Continuing maintenance, monitoring, updates, security work, and support require a maintenance package or separate agreement.</p>
      </Section>
      <Section title="7. Hosting, uptime, and backups">
        <p>Hosted services are not guaranteed to achieve 100% uptime. Reasonable efforts may be made to provide continuous availability, but outages can arise from providers, networks, maintenance, attacks, dependencies, customer actions, or force majeure. Backups may be retained for up to 30 days or according to the provider's policy, but customers remain responsible for maintaining independent backups unless expressly included.</p>
        <p>Non-payment may result in suspension after reasonable notice. Technical safeguards may restrict operation while an account is overdue, but destructive or irreversible actions will not be represented as a substitute for lawful debt recovery. Customers should export data before termination.</p>
      </Section>
      <Section title="8. Domains and third-party licences">
        <p>The customer owns and remains responsible for its domain. Mohammed Husnain may purchase, configure, or transfer a domain for an agreed additional fee, but registration terms and renewal charges remain the customer's responsibility. Third-party software, fonts, templates, APIs, hosting, certificates, and licences may carry separate fees and restrictions, which the customer must pay or approve as stated in the quote.</p>
      </Section>
      <Section title="9. Intellectual property and licence">
        <p>The customer owns its supplied content and domain. Bespoke deliverables and source code are assigned or licensed only as the accepted contract states and only after amounts due are paid. Unless assigned, Mohammed Husnain retains reusable libraries, tools, generic components, know-how, templates, and pre-existing code. Third-party rights are never transferred beyond their licence.</p>
        <p>Where permitted by the contract, Mohammed Husnain may identify the work and display screenshots or links in a portfolio or personal website. Confidential information, unreleased work, security-sensitive details, and customer restrictions will be respected.</p>
      </Section>
      <Section title="10. Confidentiality and subcontractors">
        <p>Each party should protect the other's non-public business, technical, personal, and security information and disclose it only to people who need it for the engagement or where law requires. Subcontractors or specialist providers may be used where reasonably necessary. Their involvement and cost will be disclosed or agreed where the contract requires it, and confidentiality and security obligations should flow down to them.</p>
      </Section>
      <Section title="11. Security work and limits">
        <p>Security services are scoped activities, not a promise that a system will never be compromised. Testing must be authorised, limited to agreed systems, and performed lawfully. Customers must fix risks, apply updates, monitor their systems, and maintain incident procedures unless those tasks are expressly included.</p>
      </Section>
      <Section title="12. Suspension and termination">
        <p>Either party may terminate as the contract permits, including for material breach that is not remedied after notice, persistent non-payment, unlawful instructions, security risk, insolvency, or prolonged force majeure. On termination, services may stop, outstanding charges and committed third-party costs remain payable, and access may be suspended for non-payment.</p>
        <p>After termination, a 24-hour export window may be provided where technically and legally possible. Deletion is scheduled within seven days after that window, subject to backups, legal retention, security records, disputes, and the customer's separate instructions. Domains may be transferred, returned to the registrar, or parked only as expressly agreed and subject to registrar rules. Hosting space already used remains chargeable.</p>
      </Section>
      <Section title="13. Liability and consumer protection">
        <p>The customer is responsible for decisions made using the deliverables, its content, domains, credentials, users, legal notices, backups, and business outcomes. Nothing in these terms excludes liability that cannot lawfully be excluded, including fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or mandatory consumer rights.</p>
        <p>Subject to that protection, liability caps, exclusions, remedies, and insurance arrangements must be stated clearly in the project contract and should reflect the fee, risk, customer type, and service. A contract cannot make the customer responsible for losses caused by Mohammed Husnain's own non-excludable breach or negligence.</p>
      </Section>
      <Section title="14. Law and notices">
        <p>Unless the contract states otherwise, the engagement is intended to be governed by the law of England and Wales. Consumers retain any mandatory protections of the law that applies to them. Formal notices should be emailed to <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a> with the subject <strong>Legal Notice HussGB</strong>.</p>
      </Section>
    </LegalDocument>
  );
}
