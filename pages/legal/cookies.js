/* eslint-disable react/no-unescaped-entities */
import LegalDocument, { BulletList, Section } from "@/components/LegalDocument";

export default function Cookies() {
  return (
    <LegalDocument title="Cookie & Data Use Notice" path="/legal/cookies" description="The cookies, local storage, analytics, and technical data used by Husnain.UK.">
      <Section title="1. What cookies are used">
        <p>The current site does not intentionally use advertising or behavioural tracking cookies. The theme control uses browser local storage to remember light or dark mode. Local storage is not sent to the server as a tracking identifier.</p>
        <p>Vercel and other infrastructure may create essential technical cookies or process request data needed to deliver, secure, cache, and measure the service. The exact set depends on the deployed configuration and should be checked after every analytics or hosting change.</p>
      </Section>
      <Section title="2. Optional analytics and marketing">
        <p>No analytics provider should be described as active unless it has actually been installed and configured. If privacy-focused analytics, newsletter tools, or marketing systems are introduced, this notice and any consent mechanism will be updated before non-essential tracking begins.</p>
        <p>Marketing emails are sent through in-house systems to people who enrol. They should identify the sender, respect the recipient's preferences, and include a simple unsubscribe route. Promotional messages will not be sent merely because someone used the contact form.</p>
      </Section>
      <Section title="3. Your choices">
        <BulletList>
          <li>You can clear local storage or use browser controls to remove the saved theme preference.</li>
          <li>You can block cookies, although essential functionality or security features may stop working.</li>
          <li>You can unsubscribe from optional marketing at any time.</li>
          <li>Where non-essential cookies or similar technologies are introduced, they will be controlled through an appropriate consent mechanism where required by PECR or other applicable law.</li>
        </BulletList>
      </Section>
      <Section title="4. Customer websites">
        <p>A website built or hosted for a customer may use different cookies, sessions, authentication, analytics, payment tools, or consent technology. The customer is responsible for approving the purposes and notices for its users; the implementation and any processing roles must be recorded in the project contract and, where needed, a data-processing agreement.</p>
      </Section>
      <Section title="5. Review">
        <p>This notice must be reviewed whenever analytics, advertising, newsletters, authentication, payments, hosting, or third-party scripts are added or removed.</p>
      </Section>
    </LegalDocument>
  );
}
