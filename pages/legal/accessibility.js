import Head from "next/head";
import LegalHeader from "@/components/LegalHeader";

export default function Accessibility() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Accessibility Statement | Husnain.UK",
    url: "https://husnain.uk/legal/accessibility",
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Head>
        <title>Accessibility Statement | Husnain.UK</title>
        <meta
          name="description"
          content="Accessibility statement outlining commitment to inclusive, accessible design on Husnain.UK."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <LegalHeader title="Accessibility Statement" subtitle="Committed to inclusive design" />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
        <Section title="Commitment">
          <p>
            I am dedicated to ensuring digital accessibility for everyone, including
            users with disabilities. My goal is to make Husnain.UK intuitive and usable
            by all visitors.
          </p>
        </Section>

        <Section title="Accessibility Features">
          <ul className="list-disc list-inside space-y-1">
            <li>High-contrast color schemes for both light and dark mode.</li>
            <li>Fully keyboard-navigable layout.</li>
            <li>Meaningful alt text for all imagery.</li>
            <li>ARIA labels for interactive elements.</li>
          </ul>
        </Section>

        <Section title="Feedback">
          <p>
            If you encounter any accessibility barriers, please reach out via{" "}
            <strong>contact@husnain.uk</strong>. I’ll prioritize resolving any issue
            swiftly.
          </p>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm shadow-sm space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
}
