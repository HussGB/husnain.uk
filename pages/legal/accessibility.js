import LegalDocument, { BulletList, Section } from "@/components/LegalDocument";

export default function Accessibility() {
  return (
    <LegalDocument title="Accessibility Statement" path="/legal/accessibility" description="The accessibility commitment and feedback process for Husnain.UK and customer websites.">
      <Section title="1. Commitment">
        <p>Husnain.UK aims to make its pages usable by as many people as possible, including people using keyboard navigation, screen readers, magnification, voice control, reduced-motion settings, or alternative input devices. Customer work will include accessibility considerations appropriate to the agreed scope and audience.</p>
      </Section>
      <Section title="2. Current approach">
        <BulletList>
          <li>Semantic headings, landmarks, links, and buttons are used where practical.</li>
          <li>Interactive controls receive accessible names and visible keyboard focus.</li>
          <li>Images receive meaningful alternative text or are treated as decorative where appropriate.</li>
          <li>Layouts are tested across narrow and desktop viewports, with reduced-motion support where animations exist.</li>
          <li>Colour, typography, forms, error messages, and responsive behavior are reviewed during development.</li>
        </BulletList>
      </Section>
      <Section title="3. Limits and third parties">
        <p>Accessibility cannot be guaranteed for every device, browser, assistive technology, third-party embed, or customer-supplied asset. A customer remains responsible for the accessibility of content, data, legal notices, and third-party services it asks to be included.</p>
      </Section>
      <Section title="4. Feedback">
        <p>Report a barrier with the page URL, the task you were trying to complete, your browser or assistive technology, and a description of the problem to <a className="underline" href="mailto:contact@husnain.uk">contact@husnain.uk</a>. Please do not include unnecessary sensitive personal data. Reasonable efforts will be made to investigate and provide an accessible alternative or fix.</p>
      </Section>
    </LegalDocument>
  );
}
